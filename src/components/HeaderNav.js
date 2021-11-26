import { NavLink } from 'react-router-dom';

const Header = ({
	isAuth,
	user,
	displayName,
	userLogout
}) => {

	console.log(user, 'Navigation')
	let userGreet = displayName || user.username
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

					{! isAuth ? (
						<div className="guest-navigation navbar-nav">
						<NavLink to="/login" className="nav-item nav-link" activeClassName="active">Login</NavLink>
						<NavLink to="/register" className="nav-item nav-link" activeClassName="active">Register</NavLink>
						</div>
					) :
					(
						<div className="user-navigation navbar-nav">
						<NavLink to="/create" className="nav-item nav-link" activeClassName="active">Create Class</NavLink>
						<NavLink to={`/profile/${localStorage.userId}`} className="nav-item nav-link user-profile" activeClassName="active">My Profile</NavLink>
						<NavLink to="/" className="nav-item nav-link" activeClassName="active" onClick={userLogout}>Logout</NavLink>

					</div>
					)

				}

				</div>
			</div>
		</div>
		{userGreet ? (<div className="welcome-user">Welcome, {userGreet}!</div>) : (<div className="welcome-user">Welcome, Guest!</div>)}
	</div>


	</>
	)
}

export default Header;
