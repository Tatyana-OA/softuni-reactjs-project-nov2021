import SinglePageHead from "../SinglePageHead";
import * as classService from '../../services/classService'
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { isAuth } from "../../hoc/isAuth";


const EditClass = ({
	history,
	match,
	location
}) => {
	const classId = match.params.classId
	const classInfo = location.state;
	const { userInfo ,exposeUserInfo } = useContext(AuthContext)
	let userToken;
	if (!userInfo.isAuth) {
		console.log(JSON.parse(localStorage.getItem('user')))
		userToken = JSON.parse(localStorage.getItem('user')).token
	} else {
		userToken = userInfo.user.token
	}

	console.log(classInfo)

	const submitEdit = async(e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const {name, type, imageUrl, capacity, description, start_time, end_time, date } = Object.fromEntries(formData)
		console.log( Object.fromEntries(formData));
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

		await classService.editClassbyId(cleanClassData,classId, userToken)

		history.push('/')
	}

	return (
		<>
		<SinglePageHead pageInfo={{name:"Edit Class", slug: `edit/${classId}`}} />
		<div className="container-register">
    <div className="title sign">Edit Yoga Class</div>
    <div className="content">
      <form action="#" method="POST" onSubmit={submitEdit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">Name</span>
            <input type="text" name="name" placeholder="Enter class name" defaultValue={classInfo.name} />
          </div>
          <div className="input-box">
            <span className="details">Type</span>
			<select name="type" defaultValue={classInfo.type}>
				<option value="body balance">Body Balance</option>
				<option value="hatha yoga">Hatha Yoga</option>
				<option value="children yoga">Children Yoga</option>
				<option value="yoga dance">Yoga Dance</option>
            </select>
          </div>

          <div className="input-box">
            <span className="details">Class Image</span>
            <input type="text" name="imageUrl" placeholder="Enter image URL for class" defaultValue={classInfo.imageUrl || ''}/>
          </div>
		  <div className="input-box">
            <span className="details">Class Capacity</span>
            <input type="text" name="capacity" placeholder="Enter max class attendees" defaultValue={classInfo.capacity || ''}/>
          </div>
		  <div className="input-box">
            <span className="details">Description</span>
            <textarea name="description" rows="4" cols="30" placeholder="Enter class description" defaultValue={classInfo.description || ''}/>
          </div>
		  <div className="input-box">
            <span className="details">Date</span>
            <input type="date" name="date"  placeholder="Enter max class attendees" defaultValue={classInfo.date || ''}/>
          </div>
		  <div className="input-box">
            <span className="details">Class Start Time</span>
            <input type="time" name="start_time" defaultValue={classInfo.start_time || ''}/>
          </div>
		  <div className="input-box">
            <span className="details">Class End Time</span>
            <input type="time" name="end_time" defaultValue={classInfo.end_time || ''} />
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Edit Class" />
        </div>
      </form>
    </div>
  </div>
		</>
	
	)
}

export default isAuth(EditClass);