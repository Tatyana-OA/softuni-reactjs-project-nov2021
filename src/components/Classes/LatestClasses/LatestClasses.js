
import SingleClassCard from '../SingleClassCard/SingleClassCard';

import { useState, useEffect } from "react";

import * as classService from '../../../services/classService';
import "./LatestClasses.css"


const LatestClasses = () => {
	const [latestClasses, setLatestClasses] = useState([]);

	useEffect( async ()=>{

		const result = await classService.getLatest();
		setLatestClasses(result);

	},[])

	return (
		<>
			 <div className="class">
            <div className="container">
                <div className="section-header text-center wow zoomIn latest-classes-roaster" data-wow-delay="0.1s">
					<p> Trending classes </p>
                    <h2>Latest Yoga Classes</h2>
                </div>
				{latestClasses.length > 0 ? (
					 <div className="row class-container">
					 { latestClasses.map(c => <SingleClassCard key = {c.id} classData = {c} authorId={c.author} cardId={c.id}/>) }
					 </div>
				) :  <h4 className="no-classes-found">No classes found.</h4>}

            </div>
        </div>
		</>
	)
}
export default LatestClasses;