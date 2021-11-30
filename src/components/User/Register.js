import SinglePageHead from "../SinglePageHead";

import * as userService from '../../services/userService';
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useHistory } from "react-router";


const Register = () => {
	let history = useHistory()
	const { exposeUserInfo } = useContext(AuthContext)
	const onRegister = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const {username, email, first_name, last_name, password, re_password, user_imageUrl, user_type} = Object.fromEntries(formData)

		// TO DO: VALIDATION

		const cleanUserData = {
			username,
			email,
			password,
			"name": username,
   			 "acf": {
				user_type,
				user_imageUrl,
				first_name,
				last_name,
				email
    		},

		}

		const createdUser = userService.createUser(cleanUserData);
		// username = username.substring(0,1).toUpperCase() + username.substring(1)
		// onLoginCall(username);
		history.push("/login")



	}
	return (
		<>
	<SinglePageHead pageInfo={{name:'Register', slug:'register'}}/>

  <div className="container-register">
    <div className="title sign">Registration</div>
    <div className="content">
      <form method="POST" onSubmit={onRegister}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" name="username" placeholder="Enter your username" required />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" name="email" placeholder="Enter your email" required />
          </div>
		  <div className="input-box">
            <span className="details">First Name</span>
            <input type="text" name="first_name" placeholder="Enter your first name" required />
          </div>
		  <div className="input-box">
            <span className="details">Last Name</span>
            <input type="text" name="last_name" placeholder="Enter your last name" required />
          </div>

          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" name="password" placeholder="Enter your password" required />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" name="re_password" placeholder="Confirm your password" required />
          </div>
		  <div className="input-box">
            <span className="details">Avatar Url</span>
            <input type="text" name="user_imageUrl" placeholder="Avatar Image Url" required />
          </div>
		  <div className="input-box">
		  <span className="details">Sign up as</span>
			<select name="user_type">
				<option value="teacher">Yoga Teacher</option>
				<option value="student">Yoga Student</option>
            </select>
          </div>
        </div>

        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  </div>


		</>
	)
}
export default Register;