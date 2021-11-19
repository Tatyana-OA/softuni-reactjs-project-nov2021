

const Header = (props) => {
	return (
		<>
		<div className="navbar navbar-expand-lg bg-dark navbar-dark">
		<div className="container-fluid">
			<a href="/" className="navbar-brand">Y<span>oo</span>ga</a>
			<div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
				<div className="navbar-nav ml-auto">
					<a href="/" className="nav-item nav-link active">Home</a>
					<a href="/classes" className="nav-item nav-link">Classes</a>
					<a href="/teachers" className="nav-item nav-link">Teachers</a>
					<a href="/contact" className="nav-item nav-link">Contact</a>
					<div className="nav-item dropdown">
						<a href="/join" className="nav-link dropdown-toggle" data-toggle="dropdown">Join us</a>
						<div className="dropdown-menu">
							<a href="/register" className="dropdown-item">Register</a>
							<a href="/login" className="dropdown-item">Login</a>
						</div>
					</div>

					<div className="nav-item dropdown">
						<a href="/my-account" className="nav-link dropdown-toggle" data-toggle="dropdown">My account</a>
						<div className="dropdown-menu">
							<a href="/profile" className="dropdown-item">Profile</a>
							<a href="/logout" className="dropdown-item">Logout</a>
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
