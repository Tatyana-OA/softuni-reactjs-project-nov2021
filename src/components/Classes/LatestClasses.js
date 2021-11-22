
import SingleClassCard from './SingleClassCard';

const LatestClasses = () => {

	return (
		<>
			 <div className="class">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s" style={{marginTop:'50px'}}>
					<p> Trending classes </p>
                    <h2>Latest Yoga Classes</h2>
                </div>

                <div className="row class-container">
                   <SingleClassCard />
				   <SingleClassCard />
				   <SingleClassCard />
				   <SingleClassCard />
				   <SingleClassCard />
                </div>
            </div>
        </div>
		</>
	)
}
export default LatestClasses;