
import SingleClassCard from './SingleClassCard';

import { useState, useEffect } from "react";

import * as classService from '../../services/classService';


const LatestClasses = () => {
	const [latestClasses, setLatestClasses] = useState([]);

	useEffect( async ()=>{

		const result = await classService.getLatest();
		setLatestClasses(result);
		console.log('latest classes', latestClasses)

	},[])

	return (
		<>
			 <div className="class">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s" style={{marginTop:'50px'}}>
					<p> Trending classes </p>
                    <h2>Latest Yoga Classes</h2>
                </div>

                <div className="row class-container">
				{ latestClasses.map(c => <SingleClassCard key = {c.id} classData = {c} authorId={c.author} cardId={c.id}/>) }
                </div>
            </div>
        </div>
		</>
	)
}
export default LatestClasses;