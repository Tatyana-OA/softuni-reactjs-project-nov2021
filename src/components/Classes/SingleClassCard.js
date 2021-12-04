import * as userService from '../../services/userService'
import { useState, useEffect } from 'react';
import { ClassTeacherInfo } from './ClassTeacherInfo';



const SingleClassCard = ({classData, authorId, cardId}) => {
	const [classAuthor, setClassAuthor] = useState({})
		const exposeAuthorInfo = (author) => {
		setClassAuthor(author)
	}
	useEffect( async () => {
		const result = await userService.getUserById(authorId)
		setClassAuthor(result["acf"])
		
	}, [])
	
	// console.log(classAuthor, 'author')
	console.log(classData)
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
		<div className="class-wrap">
			<div className="class-img">
				<img src={classData.acf.imageUrl} alt="Class Image" />
			</div>
			<div className="class-text">

			<ClassTeacherInfo classAuthor={classAuthor} cardId={cardId} authorId={authorId}/>

				<h2>{classData.acf.name}</h2>
				<div className="class-meta">
					<p><i className="far fa-calendar-alt"></i>{classData.acf.date}</p>
					<p><i className="far fa-clock"></i>{classData.acf.start_time} - {classData.acf.end_time}</p>
				</div>
			</div>
		</div>
	</div>
	)
}
export default SingleClassCard;