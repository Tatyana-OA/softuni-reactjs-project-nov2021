import SinglePageHead from "../SinglePageHead";
import SingleTeamMember from "../Team/TeamSingleCard";
import SingleClassCard from "../Classes/SingleClassCard";
import { useState, useEffect } from "react";
import { isAuth } from '../../hoc/isAuth'
import "./Profile.css"


import * as classService from '../../services/classService';
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import BookContext from "../../contexts/BookContext";

const Profile = () => {
	let userId;
	let user;
	
	let {userInfo} = useContext(AuthContext)
	let {bookingInfo} = useContext(BookContext)
	console.log(bookingInfo, 'bookingsInfo')
	console.log(userInfo,'Profile Context')
	if (userInfo.user !=='')  {
		userId = userInfo.user.user.id
		user = userInfo.user.user;
	} else {
	
			const localStorageUser = JSON.parse(localStorage.getItem('user'))
			console.log('Logged user persists on refresh')
			user = localStorageUser.user
			userId = localStorageUser.user.id || ''
		
	}

	let isAuth = userInfo.isAuth || localStorage.user

	console.log(user, 'tis user')
	console.log(user.acf.participates_in_classes, 'participates')
	const [userClasses, setuserClasses] = useState([]);
	useEffect( async ()=>{
		//TO FIX
		let classes = []
		if (user.acf.participates_in_classes != null && user.acf.user_type == "student") {

			for (let cl of user.acf.participates_in_classes) {
				console.log(cl, 'classId')
				let receivedClass = await classService.getClassById(cl['classId'])
				classes.push(receivedClass)
			}
		} else if (user.acf.user_type == "teacher") {
				classes = await classService.getAllbyPerson(userId);
				console.log('in teacher stuff')
		}
		console.log(classes, 'received classes')
		
		setuserClasses(classes.length > bookingInfo.length ? classes : bookingInfo);


	},[userInfo])






	// return (
	// 	<h1>PRofile</h1>
	// )
console.log('SET', new Set(userClasses))
	console.log(user)
  return isAuth ? (
    <>
      <SinglePageHead pageInfo={{ name: "My Account", slug:'profile' }} />
      <div className="team">
        <div className="container">
          <div className="row inf-content">
            <SingleTeamMember
				style={{ marginTop: "2em" }}
				userImage={user.acf.user_imageUrl}
				userFullName={`${user.acf.first_name} ${user.acf.last_name}`}
				userType = {user.acf.user_type}
			/>
            <div className="col-md-6 user-info">
              <strong>Information</strong>
              <br />
              <div className="table-responsive">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-bookmark text-primary"></span>
                          Username
                        </strong>
                      </td>
                      <td className="text-primary">{user.name || "Yoga User"}</td>
                    </tr>
					<tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-calendar text-primary"></span>
                          Full Name
                        </strong>
                      </td>
                      <td className="text-primary">{`${user.acf.first_name} ${user.acf.last_name}` || "Default User"}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-eye-open text-primary"></span>
                          Role
                        </strong>
                      </td>
                      <td className="text-primary">Yoga {user.acf.user_type || "User"}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          Email
                        </strong>
                      </td>
                      <td className="text-primary">{user.acf.email || "No email provided"}</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-calendar text-primary"></span>
                          Participates in
                        </strong>
                      </td>
                      <td className="text-primary">X Classes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p> {user.acf.first_name}'s Classes </p>

            <h2>{user.acf.user_type == "student" ? "Classes you have booked" : "Classes you teach"}</h2>
          </div>
        </div>
		{ userClasses.length > 0 ? 
		(    <div className="class">
          <div className="container">
            <div className="row class-container">
              {/* TO DO DYNAMIC  */}
			  { userClasses.map(c =>
			  <SingleClassCard
			  	key = {c.id}
				classData = {c}
				authorId={c.author}
				cardId = {c.id}
				/>) }
            </div>
          </div>
        </div>) 
		: 
		(<h4 className="no-classes-found">No classes found.</h4>)}

      </div>
    </>
  ): (
	  <>
	<SinglePageHead pageInfo={{ name: "My Account", slug:'profile' }} />
	<div className="team">
	  <div className="container">
		  Loading...
		  </div>
		  </div> 
		  </>
  );
};
export default isAuth(Profile);
