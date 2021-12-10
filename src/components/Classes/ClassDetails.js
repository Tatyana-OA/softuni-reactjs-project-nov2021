import { Link } from "react-router-dom";
import SinglePageHead from "../SinglePageHead";
import * as classService from '../../services/classService';
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../contexts/AuthContext";



const ClassDetails = ({
	location,
	history,
	match,
	
}) => {

const classAuthor = location.state
const authorId = location.state.authorId
const {userInfo: currentLoggedUser}= useContext(AuthContext)
const [classDetails, setClassDetails] = useState({})

useEffect(() => {
	//console.log(match.params)
	 async function getClass() {
		const result = await classService.getClassById(match.params.cardId)
		setClassDetails(result)
	 }
	 getClass()
}, [])

let {id, acf } = classDetails;
console.log(acf, 'class acf')

const showBtns = Boolean(currentLoggedUser.isAuth) || Boolean(localStorage.getItem('user'))
const localStorageUser = JSON.parse(localStorage.getItem('user'))
let currentUserID = '';
if (currentLoggedUser.user) {
	currentUserID = currentLoggedUser.user.user.id
} else if (localStorageUser.user) {
	currentUserID = localStorageUser.user.id
}
console.log(currentUserID)
let isAuthor = false;
let hasBooked = false;
if (currentLoggedUser.isAuth && currentLoggedUser.user_id === authorId
	|| localStorageUser && localStorageUser.user.id === authorId) {
	isAuthor = true;
}


    return acf ? (
    <>
      <SinglePageHead
        pageInfo={{ name: acf.name, slug: window.location.href }}
      />
	   {console.log(acf.booked_by)}
	  {acf.booked_by !=null && acf.booked_by.forEach(f=>f['userId'] == currentUserID ? hasBooked=true : "")}
	 
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
					  {classAuthor.first_name ? (
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
			
				{! hasBooked ? (
						<button className="submit login details">
					<Link className="btn" to={{pathname: `/book/${match.params.cardId}`, state: acf}} >Book Now</Link>{" "}
					</button>
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
