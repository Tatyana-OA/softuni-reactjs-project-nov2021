import SinglePageHead from "../SinglePageHead";
import { Link } from 'react-router-dom';
import * as userService from '../../services/userService';
import { useHistory } from "react-router";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";




const Login =  ({}) => {
	const { exposeUserInfo } = useContext(AuthContext)
	let history = useHistory();
	let userLogin = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		let {username, password} = Object.fromEntries(formData)
	
		const result = await userService.getBearerToken({username,password})
		const user = {...result, token:result.token}
		exposeUserInfo(user);
		// username = username.substring(0,1).toUpperCase() + username.substring(1)
		// onLoginCall(username);
		history.push("/")
	}
	return (
		<>
		<SinglePageHead pageInfo={{name:'Login', slug:'login' }}/>
		<div className="main">
		<p className="sign" align="center">Sign in</p>
		<form className="form1" method="POST" onSubmit={userLogin}>
		  <input className="un " type="text" name="username" align="center" placeholder="Username" />
		  <input className="pass" type="password" name="password" align="center" placeholder="Password" />
		  <button type="submit" className="submit login" align="center">Sign in</button>
		  <p className="forgot" align="center"></p>
		  </form>
		  <Link to="/register" className="register-link-log" align="center">Not registered yet? <strong>Click here!</strong></Link>
		</div>
		</>
	)
}
export default Login;
