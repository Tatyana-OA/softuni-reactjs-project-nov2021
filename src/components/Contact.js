import SinglePageHead from "./SinglePageHead";
import { send } from 'emailjs-com';
import  * as userService from "../services/userService";
import { useState } from "react";

const Contact = () => {
	const [toSend, setToSend] = useState({
		"from_name": '',
		"to_name": 'Admin',
		"message": '',
		"reply_to": '',
	  });
	  const [success, setSuccesss] = useState('');
	 let userData = []

	  const getName = (e) => {
		userData.push(e.target.value)
		setToSend(prevState => ({
			...prevState,
			["from_name"]: e.target.value
		}));
		console.log(e.target.value)
	  }
	  const getEmail = (e) => {
		setToSend(prevState => ({
			...prevState,
			["reply_to"]: e.target.value
		}));
		console.log(e.target.value)
	  }
	  const getMessage = (e) => {
		setToSend(prevState => ({
			...prevState,
			["message"]: e.target.value
		}));
		console.log(e.target.value)
	  }


	function submitContact(e) {
		e.preventDefault();
	
		send(
			'service_odjm2ae',
			'template_82tmqgn',
			toSend,
			'user_ASUFZV4633Wfp9UfdzYfX'
		  )
			.then((response) => {
			  console.log('SUCCESS!', response.status, response.text);
			  setSuccesss('Message Successfully Sent.')
			  console.log(toSend)
			  e.target.reset();
			  hideSuccessError()
			})
			.catch((err) => {
			  console.log('FAILED...', err);
			  setSuccesss('Error. Message was not sent.')
			  hideSuccessError()
			});
		//invalidEmail = userService.ValidateEmail(email)

	}

		function hideSuccessError() {
			setTimeout(() => {
				setSuccesss('')
			}, 3000)
		}
	return (
		<>
		<SinglePageHead pageInfo={{name:'Contact', slug:'contact'}} />
		<div className="contact">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Get In Touch</p>
                    <h2>For Any Query</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.2s">
                                <i className="fa fa-map-marker-alt"></i>
                                <div className="contact-text">
                                    <h2>Location</h2>
                                    <p>Sofia, Bulgaria</p>
                                </div>
                            </div>
                            <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.4s">
                                <i className="fa fa-phone-alt"></i>
                                <div className="contact-text">
                                    <h2>Phone</h2>
                                    <p>+012 345 67890</p>
                                </div>
                            </div>
                            <div className="col-md-4 contact-item wow zoomIn" data-wow-delay="0.6s">
                                <i className="far fa-envelope"></i>
                                <div className="contact-text">
                                    <h2>Email</h2>
                                    <p>tatyanaolegasenova97@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="contact-form">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" onSubmit={submitContact}> 
							<div>{success !== '' ? success : ''}</div>
                                <div className="control-group">
                                    <input onBlur={getName} type="text" name="name" className="form-control" id="name" placeholder="Your Name" required="required"  data-validation-required-message="Please enter your name" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input onBlur={getEmail} type="email" name="email" className="form-control" id="email" placeholder="Your Email" required="required"  data-validation-required-message="Please enter your email" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea onBlur={getMessage}  name="message" className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button className="btn" type="submit" id="sendMessageButton" >Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		</>
	)
}

export default Contact;