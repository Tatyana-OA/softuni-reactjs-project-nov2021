import SinglePageHead from "../SinglePageHead";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import * as classService from '../../services/classService';
import { isAuth } from "../../hoc/isAuth";
import {  validateUrl } from "../../services/userService";
import Notification from "../User/Notification/Notification";
import { useHistory } from 'react-router-dom';

let errors = []
let success = [`You have successfully created a class! Namaste!`]
const initialNotificationState = {type:'', message: []}



const CreateClass = () => {
	const history = useHistory();

	// Notifation handling
	const [notification, setNotification] = useState(initialNotificationState)
	const [showNotification, setShowNotification] = useState(false);
	const closeNotification = () => {
	setShowNotification(false)
	setNotification(initialNotificationState)

	}


	const { userInfo ,exposeUserInfo } = useContext(AuthContext)
	let userToken;
	if (!userInfo.isAuth) {
		console.log(JSON.parse(localStorage.getItem('user')))
		userToken = JSON.parse(localStorage.getItem('user')).token
	} else {
		userToken = userInfo.user.token
	}
	console.log(userInfo ,exposeUserInfo )

	// console.log(isNaN(Number('8')))

	async function submitCreate(e) {
		errors = []
		e.preventDefault();
		const formData = new FormData(e.target);
		const {name, type, imageUrl, capacity, description, start_time, end_time, date } = Object.fromEntries(formData)
		if (name.toString().length < 3 || name.toString().length > 50) {
			errors.push('Name must be between 3 and 50 characters')
		}
		if (description.toString().length < 10 || description.toString().length > 100) {
			errors.push('Description must be between 10 and 100 characters.')
		}

		if (Number(capacity.toString()) < 1 || Number(capacity.toString())>20) {

			errors.push('Capacity must be a number between 1 and 20.')
		}
		let imageUrlValid = validateUrl(imageUrl);

		if (! imageUrlValid) {
			errors.push('Image URL must be a valid URL.')
		} 
		if (start_time.toString() == '') {
			errors.push('Starting time of class is a mandatory field.')
		}
		if (end_time.toString() == '') {
			errors.push('Ending time of class is a mandatory field.')
		}
		if (date.toString() == '') {
			errors.push('Date of class is a mandatory field.')
		}

		if (errors.length > 0 ) {
			setShowNotification(true)
			setNotification({
				type:'error',
				message: errors
			})

			console.log(errors)
		}

	else {
		const cleanClassData = {
			"type": "yogac_classes",
			"title": name,
			"status": "publish",
			"acf": {
				name,
				description,
				type,
				imageUrl,
				capacity,
				date,
				start_time,
				end_time,
			}

		}
		console.log(userToken)

		await classService.createClass(cleanClassData, userToken);
		setShowNotification(true)
		setNotification({
			type:'success',
			message: success
		})
		setTimeout(() => {history.push("/")}, 4000)
	}
		
	}
	return (
		<>
		<SinglePageHead pageInfo={{name:"Create Class", slug: "create"}} />
		<div className="container-register">
    <div className="title sign">Create Yoga Class</div>
	{showNotification==true ? <Notification type={notification.type} message={notification.message} closeNotification={closeNotification} /> : '' }
    <div className="content">
      <form action="#" method="POST" onSubmit={submitCreate}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input type="text" name="name" placeholder="Enter class name" />
          </div>
          <div className="input-box">
            <span className="details">Type</span>
			<select name="type">
				<option value="body balance">Body Balance</option>
				<option value="hatha yoga">Hatha Yoga</option>
				<option value="children yoga">Children Yoga</option>
				<option value="yoga dance">Yoga Dance</option>
            </select>
          </div>

          <div className="input-box">
            <span className="details">Class Image</span>
            <input type="text" name="imageUrl" placeholder="Enter image URL for class" />
          </div>
		  <div className="input-box">
            <span className="details">Class Capacity</span>
            <input type="text" name="capacity" placeholder="Enter max class attendees" />
          </div>
		  <div className="input-box">
            <span className="details">Description</span>
            <textarea name="description" rows="4" cols="30" placeholder="Enter class description" />
          </div>
		  <div className="input-box">
            <span className="details">Date</span>
            <input type="date" name="date"  placeholder="Enter max class attendees" />
          </div>
		  <div className="input-box">
            <span className="details">Class Start Time</span>
            <input type="time" name="start_time" />
          </div>
		  <div className="input-box">
            <span className="details">Class End Time</span>
            <input type="time" name="end_time"  />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Create Class" />
        </div>
      </form>
    </div>
  </div>
		</>
	)
}
export default isAuth(CreateClass);