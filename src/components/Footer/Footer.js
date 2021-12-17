import "./Footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		
		<div className="footer wow fadeIn" data-wow-delay="0.3s">
            <div className="container-fluid">
                <div className="container">
                    <div className="footer-info">
                        <span className="footer-logo">Y<span>oo</span>ga</span>
                        <h3>Sofia, Bulgaria</h3>
                        <div className="footer-menu">
                            <p>+012 345 67890</p>
                            <p>tatyanaolegasenova97@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; YooGa React.js Project, All Right Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Designed By <a href="https://github.com/Tatyana-OA/softuni-reactjs-project-nov2021">Tatyana Asenova, Nexxita</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}

export default Footer;
