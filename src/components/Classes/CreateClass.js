import SinglePageHead from "../SinglePageHead";

const CreateClass = (props) => {
	return (
		<>
		<SinglePageHead pageInfo={{name:"Create Class", slug: "create"}} />
		<div className="container-register">
    <div className="title sign">Create Yoga Class</div>
    <div className="content">
      <form action="#">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Title</span>
            <input type="text" placeholder="Enter class name" required />
          </div>
          <div className="input-box">
            <span className="details">Type</span>
			<select>
				<option value="body balance">Body Balance</option>
				<option value="hatha yoga">Hatha Yoga</option>
				<option value="children yoga">Children Yoga</option>
				<option value="yoga dance">Yoga Dance</option>
            </select>
          </div>

          <div className="input-box">
            <span className="details">Class Image</span>
            <input type="text" placeholder="Enter image URL for class" required />
          </div>
		  <div className="input-box">
            <span className="details">Class Capacity</span>
            <input type="text" placeholder="Enter max class attendees" required />
          </div>
		  <div className="input-box">
            <span className="details">Description</span>
            <textarea rows="4" cols="30" placeholder="Enter class description" required />
          </div>
		  <div className="input-box">
            <span className="details">Date</span>
            <input type="date" placeholder="Enter max class attendees" required />
          </div>
		  <div className="input-box">
            <span className="details">Class Start Time</span>
            <input type="time" placeholder="Enter max class attendees" required />
          </div>
		  <div className="input-box">
            <span className="details">Class End Time</span>
            <input type="time" placeholder="Enter max class attendees" required />
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