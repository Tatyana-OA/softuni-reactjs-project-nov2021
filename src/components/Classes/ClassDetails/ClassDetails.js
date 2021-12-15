import { Link } from "react-router-dom";
import SinglePageHead from "../../SinglePageHead/SinglePageHead";
import * as classService from '../../../services/classService';
import * as userService from '../../../services/userService';
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../../contexts/AuthContext";
import BookContext from "../../../contexts/BookContext";

import './ClassDetails.css';



const ClassDetails = ({
	location,
	history,
	match,
	
}) => {

const {bookingInfo, changeBookingInfo} = useContext(BookContext);
console.log(bookingInfo, changeBookingInfo)
const classAuthor = location.state
const authorId = location.state?.authorId
const {userInfo: currentLoggedUser}= useContext(AuthContext)
const localStorageUser = JSON.parse(localStorage.getItem('user'))
const [userAcf, setUserAcf] = useState(null)
let currentUserID = '';
if (currentLoggedUser.user) {
	currentUserID = currentLoggedUser?.user?.user?.id
} else if (localStorageUser?.user) {
	currentUserID = localStorageUser.user.id
}
console.log(currentUserID)
console.log(localStorageUser)
let isAuthor = false;

if (currentLoggedUser.isAuth && currentLoggedUser.user_id === authorId
	|| localStorageUser && localStorageUser.user.id === authorId) {
	isAuthor = true;
}

const userToken = localStorageUser?.token || currentLoggedUser?.user.token



const [classDetails, setClassDetails] = useState({})
const [hasBooked, setHasBooked] = useState(false)
const showBtns = (Boolean(currentLoggedUser.isAuth) || Boolean(localStorage.getItem('user')) )




useEffect(() => {
	//console.log(match.params)
	 async function getClass() {
		const result = await classService.getClassById(match.params.cardId)
		 let userResult = await userService.searchUserByEmail(localStorageUser?.user_email)
		 userResult= userResult[0]?.acf;
		setUserAcf(userResult)
		setClassDetails(result)
		console.log(userAcf, 'USER ACF')
	 }
	 getClass()
}, [])


console.log(userAcf, 'USERACF')

let {id, acf } = classDetails;
console.log(acf, 'class acf')


const bookClass = async (e) => {
	e.preventDefault();
	console.log(userToken, 'userTOken')

	let classToBook = match.params.cardId;
	console.log(userAcf)
	console.log(classToBook, 'to be booked')
	let booked_by = '';
	let participates_in_classes = ''

	acf.booked_by != null ? booked_by = [...acf.booked_by, {"userId": currentUserID.toString()}] : booked_by = [{"userId": currentUserID.toString()}]
	userAcf.participates_in_classes != null  ? participates_in_classes = [...userAcf.participates_in_classes, {"classId": classToBook.toString()}] 
	: participates_in_classes = [{"classId": classToBook.toString()}]
	let objToClass = {
		"acf": {
			 booked_by
		}
	}
	let objToUser = {
		"acf": {
			participates_in_classes
		}
	}

	let result = await classService.bookClassbyId(objToClass, classToBook, userToken)
	let userResult = await userService.addBookingToUser(currentUserID, objToUser, userToken)
	let ids = []
	for (let id of userResult.acf?.participates_in_classes) {
		ids.push(id['classId'])
	}
	let updatedBookings = await classService.getSeveralClassesByIds(ids);
	console.log(updatedBookings, 'UPDATEDBOOKINGS')
	changeBookingInfo(updatedBookings)
	localStorage.setItem('bookings', JSON.stringify(updatedBookings))
	console.log(userResult)

setHasBooked(true)
}


const SpecificButtons = (
	userAcf?.user_type == "teacher" ? '' :
	<button className="submit login details" onClick={bookClass} > BOOK CLASS
	</button>
)

    return acf ? (
    <>

      <SinglePageHead
        pageInfo={{ name: acf.name, slug: `details/${match.params.cardId}` }}
      />


      <div className="single">
        <div className="container">
          <div className="row details-row">
            <div className="col-lg-8">
              <div className="single-content wow fadeInUp">
                <img src={acf.imageUrl}/>
                <h2>{acf.name}</h2>
                <p>
				{acf.description}
                </p>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div className="sidebar-widget wow fadeInUp"></div>

                <div className="sidebar-widget wow fadeInUp">
                  <h2 className="widget-title">Class Details:</h2>
                </div>
                <div className="sidebar-widget wow fadeInUp">
                  <div className="category-widget">
                    <ul>
                      <li><strong>Taught By</strong></li>
					  {classAuthor?.first_name ? (
						<div className="single-bio wow fadeInUp">
						<div className="single-bio-img">
						<img src={classAuthor.user_imageUrl} />
						</div>
						<div className="single-bio-text">
						<h3>{classAuthor.first_name} {classAuthor.last_name}</h3>
						</div>
						</div>
					  ) :
					  <h1> No author info </h1>
					  }
                      <li><strong>Class Type:</strong> {acf.type}</li>
                      <li><strong>Group Size:</strong> {acf.capacity} </li>
                      <li><strong>Spots Left: </strong>
					  {acf.booked_by !=null && Number(acf.capacity) - Number(acf.booked_by.length)>0 
					  ? Number(acf.capacity) - Number(acf.booked_by.length) 
					  : acf.capacity}</li>
                      <li><strong>When:</strong> {acf.date}</li>
                      <li><strong>What time:</strong> {acf.start_time} - {acf.end_time}</li>
                    </ul>
                  </div>
                </div>
				{showBtns ? (
				<div className="sidebar-widget wow fadeInUp">
				{! isAuthor ? (
				<div className="guest-btns">
				{! hasBooked && ! acf.booked_by?.some(e => e['userId'] == currentUserID) ? (

					<>
					{SpecificButtons}
					</>
				) : (
					<h5>You have booked this class.</h5>
				) }

				</div>
				) : (
					<div className="author-btns">
					<button className="submit login details">
					{" "}
					<Link className="btn" to={{pathname: `/edit/${match.params.cardId}`, state: acf}}>EDIT</Link>
					</button>
					<button className="submit login details">
					{" "}
					<Link className="btn" to={{pathname: `/delete/${match.params.cardId}`, state: acf}}>DELETE</Link>{" "}
					</button>
					</div>
				)}

				</div>
					)
				: (<span><Link to="/login">Log in </Link>to Book, Edit or Delete class.</span>)
				}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (  
	<SinglePageHead
	  pageInfo={{ name: 'LOADING', slug: window.location.href }}
	/>);
};

export default ClassDetails;
