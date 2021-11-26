export const ClassTeacherInfo = (classAuthor) => {
	let authorObj = Object.values(classAuthor)[0]
	console.log(authorObj)
	let authorFullName = authorObj.acf.first_name + " " + authorObj.acf.last_name || "Ellen Reed"
	let authorImage = authorObj.acf.user_imageUrl || "./img/teacher-1.png"
return (
	<div className="class-teacher">
	<img src={authorImage} alt="Teacher Image" />
	<h3>{authorFullName}</h3>
	<a href="">Details</a>
</div>
)
}