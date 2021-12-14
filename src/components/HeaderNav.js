import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const Header = ({
	userLogout
}) => {

	//console.log(user, 'Navigation')
	let {userInfo, exposeUserInfo} = useContext(AuthContext);
	let displayName = '';
	let userId = ''
	let locallyAuth=false;
	let currentUser; 
	let userType;

	if (userInfo.isAuth && userInfo.user.user) {
		console.log('After login')
		 displayName = userInfo.user.user_display_name || ''
		 userId = userInfo.user.user.id || ''
		 currentUser = userInfo.user.user || ''
	} 

	console.log(JSON.parse(localStorage.getItem('user')))
	
	if (localStorage.getItem('user')) {
		const localStorageUser = JSON.parse(localStorage.getItem('user'))
		console.log('Logged user persists on refresh')
		currentUser = localStorageUser || ''
		displayName = localStorageUser.user_display_name || ''
		userId = localStorageUser.user?.id || ''
		locallyAuth = !locallyAuth
		console.log(locallyAuth)

	}
	if (currentUser) {
		 userType = currentUser.acf?.user_type || currentUser.user?.acf?.user_type
	}

	console.log(userType)
	console.log(currentUser, 'currentUser hello')

	const isAuth = locallyAuth || userInfo.isAuth

	// 	// id -> 
	//  console.log(displayName,'context')
	// //  console.log(userId, 'ID')
	//  console.log(userInfo, 'userInfo')
	// //  console.log(userInfo.user.user.id)
	return (
		<>
		<div className="navbar navbar-expand-lg bg-dark navbar-dark">
		<div className="container-fluid">
			<NavLink to="/" className="navbar-brand">Y<span>oo</span>ga</NavLink>
			<div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
				<div className="navbar-nav ml-auto">
					<NavLink to="/" exact={true} className="nav-item nav-link" activeClassName="active">Home</NavLink>
					<NavLink to="/classes" className="nav-item nav-link" activeClassName="active">Classes</NavLink>
					<NavLink to="/teachers" className="nav-item nav-link" activeClassName="active">Teachers</NavLink>
					<NavLink to="/contact" className="nav-item nav-link" activeClassName="active">Contact</NavLink>

					{! isAuth  ? (
						<div className="guest-navigation navbar-nav">
						<NavLink to="/login" className="nav-item nav-link" activeClassName="active">Login</NavLink>
						<NavLink to="/register" className="nav-item nav-link" activeClassName="active">Register</NavLink>
						</div>
					) :
					(
						<div className="user-navigation navbar-nav">
					{userType=="teacher" ? (
						<NavLink to="/create" className="nav-item nav-link" activeClassName="active">Create Class</NavLink>
					) : ""}

						<NavLink to={`/profile/${userId}`} className="nav-item nav-link user-profile" activeClassName="active">My Profile</NavLink>
						<NavLink to="/logout" className="nav-item nav-link" activeClassName="active" onClick={userLogout}>Logout</NavLink>

					</div>
					)

				}

				</div>
			</div>
		</div>
		{displayName ? (<div className="welcome-user">Welcome, {displayName}!</div>) : (<div className="welcome-user">Welcome, Guest!</div>)}
	</div>


	</>
	)
}

export default Header;
