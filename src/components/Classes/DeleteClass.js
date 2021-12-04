import SinglePageHead from "../SinglePageHead";
import * as classService from '../../services/classService'
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

import "./DeleteClass.css"



const DeleteClass = ({
	history,
	match,
	location
}) => {
	const classId = match.params.classId
	const classData = location.state;
	const { userInfo } = useContext(AuthContext)
	let userToken;
	if (!userInfo.isAuth) {
		console.log(JSON.parse(localStorage.getItem('user')))
		userToken = JSON.parse(localStorage.getItem('user')).token
	} else {
		userToken = userInfo.user.token
	}

	console.log(classData)
	console.log(userInfo)

	const submitDelete = async(e) => {
		e.preventDefault();

		await classService.deleteClassbyId(classId, userToken)
		history.push('/')
	}


	return (
		<>
		<SinglePageHead pageInfo={{name:"Delete Class", slug: `delete/${classId}`}} />
		<div className="container-register">
    <div className="title sign title-del">Are you sure you want to delete this class?</div>
    <div className="content">
      <form action="#" method="POST" onSubmit={submitDelete}>

	  <div className="class-del-wrap">
			<div className="delete-class-img">
				<img src={classData.imageUrl} alt="Class Image" className="delete-cat-img"/>
			</div>
			<div className="class-text">

				<h2>{classData.name}</h2>
				<div className="class-meta">
					<p><i className="far fa-calendar-alt del"></i>{classData.date}</p>
					<p><i className="far fa-clock del"></i>{classData.start_time} - {classData.end_time}</p>
				</div>
			</div>
		</div>
        <div className="button">
          <input type="submit" value="Yes, I would like to DELETE this class" />
        </div>
      </form>
    </div>
  </div>
		</>
	
	)
}

export default DeleteClass;