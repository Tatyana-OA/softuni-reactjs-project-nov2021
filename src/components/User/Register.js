import SinglePageHead from "../SinglePageHead";

const Register = (props) => {
	return (
		<>
	<SinglePageHead pageInfo={{name:'Register'}}/>

  <div className="container-register">
    <div className="title sign">Registration</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required />
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required />
          </div>
        </div>
        <div className="gender-details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span className="gender-title">Sign up as</span>
          <div className="category">
            <label htmlFor="dot-1">
            <span className="dot one"></span>
            <span className="gender">Yoga Teacher</span>
          </label>
          <label htmlFor="dot-2">
            <span className="dot two"></span>
            <span className="gender">Yoga Student</span>
          </label>
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