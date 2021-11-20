import SinglePageHead from "../SinglePageHead";
import TeamSingleCard from "../Team/TeamSingleCard";

const TeamAll = () => {
	return (
		<>
		<SinglePageHead pageInfo={{name:'Teachers', slug:'teachers' }} />
		<div className="team">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Yoga Trainer</p>
                    <h2>Expert Yoga Trainer</h2>
                </div>
                <div className="row">
				<TeamSingleCard />
				<TeamSingleCard />
				<TeamSingleCard />
				<TeamSingleCard />
				<TeamSingleCard />
                </div>
            </div>
        </div>
		</>
	)
}

export default TeamAll;