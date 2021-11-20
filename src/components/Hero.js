
import LatestClasses from "./Classes/LatestClasses";
import { Link } from 'react-router-dom';

const Hero = (props) => {
	return (
		<>
		<div className="hero">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className="hero-text">
                            <h1>Yoga Practice For Good Health</h1>
                            <p>
                                Lorem ipsum dolor sit amet elit. Phasell nec pretum mi. Curabi ornare velit non. Aliqua metus tortor auctor quis sem.
                            </p>
                            <div className="hero-btn">
                                <Link className="btn" to="/register">Join Now</Link>
                                <Link className="btn" to="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-none d-md-block">
                        <div className="hero-image">
                            <img src="./img/hero.png" alt="Hero Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


		<LatestClasses />
		</>
	)
}

export default Hero;
