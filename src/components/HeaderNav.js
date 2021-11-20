import { NavLink } from 'react-router-dom';

const Header = (props) => {
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
					<div className="nav-item dropdown">
						<NavLink to="/join" className="nav-link dropdown-toggle" activeClassName="active" data-toggle="dropdown">Join us</NavLink>
						<div className="dropdown-menu">
							<NavLink to="/register" className="dropdown-item" activeClassName="active">Register</NavLink>
							<NavLink to="/login" className="dropdown-item" activeClassName="active">Login</NavLink>
						</div>
					</div>

					<div className="nav-item dropdown">
						<NavLink to="/my-account" className="nav-link dropdown-toggle" data-toggle="dropdown" activeClassName="active">My account</NavLink>
						<div className="dropdown-menu">
							<NavLink to="/profile" className="dropdown-item" activeClassName="active">Profile</NavLink>
							<NavLink to="/logout" className="dropdown-item" activeClassName="active">Logout</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

        

       


		

    
	</>
	)
}

export default Header;
