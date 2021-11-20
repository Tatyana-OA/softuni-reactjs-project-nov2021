const SingleTeamMember = (props) => {
	console.log(props.style)
	return (
		<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.0s" style={props.style}>
		<div className="team-item">
			<div className="team-img">
				<img src="./img/team-1.jpg" alt="Person Image" />
			</div>
			<div className="team-text">
				<h2>Millie Harper</h2>
				<p>Yoga Teacher</p>
			</div>
		</div>
	</div>
	)
}

export default SingleTeamMember;