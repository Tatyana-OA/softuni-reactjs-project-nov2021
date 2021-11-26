import SinglePageHead from "../SinglePageHead";
import SingleTeamMember from "../Team/TeamSingleCard";
import SingleClassCard from "../Classes/SingleClassCard";
import { useState, useEffect } from "react";

import * as classService from '../../services/classService';

const Profile = (props) => {
	const [userClasses, setuserClasses] = useState([]);

	useEffect( async ()=>{
		//TO FIX
		const result = await classService.getAll();
		setuserClasses(result);
		console.log('USER', result)

	},[])
  return (
    <>
      <SinglePageHead pageInfo={{ name: "My Account", slug:'profile' }} />
      <div className="team">
        <div className="container">
          <div className="row inf-content">
            <SingleTeamMember style={{ marginTop: "2em" }} />
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
                      <td className="text-primary">bootnipets</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-eye-open text-primary"></span>
                          Role
                        </strong>
                      </td>
                      <td className="text-primary">Admin</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-envelope text-primary"></span>
                          Email
                        </strong>
                      </td>
                      <td className="text-primary">noreply@email.com</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          <span className="glyphicon glyphicon-calendar text-primary"></span>
                          Joined on
                        </strong>
                      </td>
                      <td className="text-primary">20 jul 20014</td>
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
			  { userClasses.map(c => <SingleClassCard key = {c.id} classData = {c}/>) }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
