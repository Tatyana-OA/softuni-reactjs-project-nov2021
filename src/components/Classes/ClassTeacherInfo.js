export const ClassTeacherInfo = ({classAuthor}) => {
	// console.log(classAuthor, 'prop')

return (
	<div className="class-teacher">
	<img src={classAuthor.user_imageUrl || "./img/teacher-1.png"} alt="Teacher Image" />
	<h3>{`${classAuthor.first_name} ${classAuthor.last_name}` || "Ellen Reed"}</h3>
	<a href="">Details</a>
</div>
)
}