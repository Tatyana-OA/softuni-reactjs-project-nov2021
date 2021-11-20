const SingleClassCard = (props) => {
	return (
		<div className="col-lg-4 col-md-6 col-sm-12 class-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
		<div className="class-wrap">
			<div className="class-img">
				<img src="./img/class-1.jpg" alt="Class Image" />
			</div>
			<div className="class-text">
				<div className="class-teacher">
					<img src="./img/teacher-1.png" alt="Teacher Image" />
					<h3>Elise Moran</h3>
					<a href="">+</a>
				</div>
				<h2>Pilates Yoga</h2>
				<div className="class-meta">
					<p><i className="far fa-calendar-alt"></i>Sun, Tue, Thu</p>
					<p><i className="far fa-clock"></i>9:00 - 10:00</p>
				</div>
			</div>
		</div>
	</div>
	)
}
export default SingleClassCard;