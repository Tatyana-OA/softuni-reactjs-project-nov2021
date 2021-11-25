import SinglePageHead from "../SinglePageHead";

import * as classService from '../../services/classService';

const CreateClass = () => {

	function submitCreate(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const {name, type, imageUrl, capacity, description, start_time, end_time, date } = Object.fromEntries(formData)
		console.log( Object.fromEntries(formData));
		console.log('create form')

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

		classService.createClass(cleanClassData);

	}
	return (
		<>
		<SinglePageHead pageInfo={{name:"Create Class", slug: "create"}} />
		<div className="container-register">
    <div className="title sign">Create Yoga Class</div>
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
export default CreateClass;