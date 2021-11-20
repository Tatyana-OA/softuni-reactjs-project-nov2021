import { Link } from 'react-router-dom';

const SinglePageHead = ({pageInfo}) => {
	console.log(pageInfo.name)
	return (
		<div className="page-header">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h2>{pageInfo?.name}</h2>
				</div>
				<div className="col-12">
					<Link to="/">Home</Link>
					<Link to={`/${pageInfo.name!=="My Account" ? pageInfo.name?.toLowerCase() : 'profile'}`}>{pageInfo?.name}</Link>
				</div>
			</div>
		</div>
	</div>
	)
}

export default SinglePageHead;