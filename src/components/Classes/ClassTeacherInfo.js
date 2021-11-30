import { Link } from 'react-router-dom';

export const ClassTeacherInfo = ({classAuthor, cardId}) => {
	// console.log(classAuthor, 'prop')
	console.log(cardId, 'infocard')

return (
	<div className="class-teacher">
	<img src={classAuthor.user_imageUrl || "./img/teacher-1.png"} alt="Teacher Image" />
	<h3>{`${classAuthor.first_name} ${classAuthor.last_name}` || "Ellen Reed"}</h3>
	<Link to={`/details/${cardId}`}>Details</Link>
</div>
)
}