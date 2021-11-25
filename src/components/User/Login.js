import SinglePageHead from "../SinglePageHead";
import { Link } from 'react-router-dom';
import * as userService from '../../services/userService';


const Login =  ({history}) => {
	const userLogin = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const {username, password} = Object.fromEntries(formData)
		console.log( Object.fromEntries(formData));
		console.log('login')

		 userService.getBearerToken({username,password})

		console.log('logged in')

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