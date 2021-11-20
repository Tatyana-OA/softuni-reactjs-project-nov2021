import SinglePageHead from "../SinglePageHead";
import { Link } from 'react-router-dom';

const Login = (props) => {
	return (
		<>
		<SinglePageHead pageInfo={{name:'Login'}}/>
		<div className="main">
		<p className="sign" align="center">Sign in</p>
		<form className="form1">
		  <input className="un " type="text" align="center" placeholder="Username" />
		  <input className="pass" type="password" align="center" placeholder="Password" />
		  <button type="submit" className="submit login" align="center">Sign in</button>
		  <p className="forgot" align="center"></p>
		  </form>
		  <Link to="/register" className="register-link-log" align="center">Not registered yet? <strong>Click here!</strong></Link>
		</div>
		</>
	)
}
export default Login;