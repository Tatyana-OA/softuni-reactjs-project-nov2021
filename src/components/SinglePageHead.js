const SinglePageHead = ({pageInfo}) => {
	return (
		<div className="page-header">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h2>{pageInfo.name}</h2>
				</div>
				<div className="col-12">
					<a href="/">Home</a>
					<a href={`/${pageInfo.name.toLowerCase()}`}>{pageInfo.name}</a>
				</div>
			</div>
		</div>
	</div>
	)
}

export default SinglePageHead;