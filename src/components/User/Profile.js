import SinglePageHead from "../SinglePageHead";
import SingleTeamMember from "../Team/TeamSingleCard";
import SingleClassCard from "../Classes/SingleClassCard";
import { useState, useEffect } from "react";

import * as classService from '../../services/classService';
import { getUserById } from "../../services/userService";

const Profile = ({
	location,
	history,
	match
}) => {
	const [userClasses, setuserClasses] = useState([]);
	useEffect( async ()=>{
		//TO FIX
		const result = await classService.getAll();
		setuserClasses(result);


	},[])

	const [currentUser, setCurrentUser] = useState([]);
	useEffect( async () => {
		const result = await getUserById(match.params.userId)
		setCurrentUser(result)

	}, [])
	console.log(currentUser)
  return currentUser.name ? (
    <>
      <SinglePageHead pageInfo={{ name: "My Account", slug:'profile' }} />
      <div className="team">
        <div className="container">
          <div className="row inf-content">
            <SingleTeamMember
				style={{ marginTop: "2em" }}
				userImage={currentUser.acf.user_imageUrl}
				userFullName={`${currentUser.acf.first_name} ${currentUser.acf.last_name}`}
				userType = {currentUser.acf.user_type}
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
                      <td className="text-primary">{currentUser.name || "Yoga User"}</td>
                    </tr>
					<tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-calendar text-primary"></span>
                          Full Name
                        </strong>
                      </td>
                      <td className="text-primary">{`${currentUser.acf.first_name} ${currentUser.acf.last_name}` || "Default User"}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-eye-open text-primary"></span>
                          Role
                        </strong>
                      </td>
                      <td className="text-primary">Yoga {currentUser.acf.user_type || "User"}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          Email
                        </strong>
                      </td>
                      <td className="text-primary">{currentUser.acf.email || "No email provided"}</td>
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
            <p> Someone's Classes </p>
            <h2>Classes you've booked</h2>
          </div>
        </div>
        <div className="class">
          <div className="container">
            <div className="row class-container">
              {/* TO DO DYNAMIC  */}
			  { userClasses.map(c =>
			  <SingleClassCard
			  	key = {c.id}
				classData = {c}
				authorId={c.author}
				/>) }
            </div>
          </div>
        </div>
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
export default Profile;
