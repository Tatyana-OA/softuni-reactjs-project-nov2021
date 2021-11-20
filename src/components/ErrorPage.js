import SinglePageHead from "./SinglePageHead";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<>
		<SinglePageHead pageInfo={{name:'Error'}} />
		<div className="about wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
    

                    <div className="error-page-info">
                        <div className="section-header text-left" style={{margin:'0 auto'}}>
                            <h2>You've encountered an error!</h2>
                        </div>
                        <div className="about-text" style={{textAlign:'center'}}>
                        <div className="about-img">
                            %<img src="./img/errorimage.gif" alt="Error Image" style={{width: '70%'}} />

                   		 </div>
                            <Link className="btn" to="/">Back to Website</Link>
                        </div>

                </div>
            </div>
        </div>
		</>
	)
}

export default ErrorPage;