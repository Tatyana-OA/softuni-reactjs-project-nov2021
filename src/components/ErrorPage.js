import SinglePageHead from "./SinglePageHead";

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
                            %<img src="./img/errorimage.gif" alt="Image" style={{width: '70%'}} />

                   		 </div>
                            <a className="btn" href="/">Back to Website</a>
                        </div>

                </div>
            </div>
        </div> 
		</>
	)
}

export default ErrorPage;