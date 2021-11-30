import SinglePageHead from "../SinglePageHead";
import SingleClassCard from "../../components/Classes/SingleClassCard";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import * as classService from '../../services/classService';

const AllClasses = () => {
	const [allClasses, setAllClasses] = useState([]);

	useEffect( async ()=>{

		const result = await classService.getAll();
		setAllClasses(result);


	},[])

	console.log('all classes', allClasses)
	return (
		<>
		<SinglePageHead pageInfo={{name:'Classes', slug:'classes' }} />
		<div className="about wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="about-img">
                            <img src="./img/about.png" alt="About Image" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="section-header text-left">
                            <p>Learn About Us</p>
                            <h2>Welcome to Yooga</h2>
                        </div>
                        <div className="about-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.
                            </p>
                            <Link className="btn" to="/teachers">Meet the Teachers</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
		 <div className="class" style={{marginTop: '100px'}}>
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>Our Classes</p>
                    <h2>Yoga Class Shedule</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul id="class-filter">
                            <li data-filter="*" className="filter-active">All Classes</li>
                            <li data-filter=".filter-1">Body Balance</li>
                            <li data-filter=".filter-2">Hatha Yoga</li>
                            <li data-filter=".filter-3">Children Yoga</li>
                            <li data-filter=".filter-4">Yoga Dance</li>
                        </ul>
                    </div>
                </div>
                <div className="row class-container">
					{ allClasses.map(c => <SingleClassCard key = {c.id} classData = {c} authorId={c.author} cardId={c.id}/>) }

                </div>
            </div>
        </div>
		</>
	)
}

export default AllClasses;