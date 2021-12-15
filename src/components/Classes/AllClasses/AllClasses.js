import SinglePageHead from "../../SinglePageHead/SinglePageHead";
import SingleClassCard from "../SingleClassCard/SingleClassCard";
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect} from "react";
import './AllClasses.css'

import * as classService from '../../../services/classService';
let initialState = []

const AllClasses = () => {
	const [allClasses, setAllClasses] = useState([]);
	const [activeFilter, setActiveFilter] = useState('');

	useEffect( async ()=>{

		const result = await classService.getAll();
		initialState = [...result]
		setAllClasses(result);


	},[])

	function showAllClasses(e) {
		e.preventDefault();
		setAllClasses(initialState)
		setActiveFilter('filter-active-class')
		
	}
	function getBodyBalance(e) {
		e.preventDefault();
		const balance = initialState.filter( cl => cl.acf.type=="body balance")

	
		setAllClasses(balance)
	}
	function getChildren(e) {
		e.preventDefault();
		const children = initialState.filter( cl => cl.acf.type=="children yoga")

		setAllClasses(children)
	}
	function getHatha(e) {
		e.preventDefault();
		const hatha = initialState.filter( cl => cl.acf.type=="hatha yoga")

		setAllClasses(hatha)
	}
	function getDance(e) {
		e.preventDefault();
		const dance = initialState.filter( cl => cl.acf.type=="yoga dance")

		setAllClasses(dance)
	}

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
							Dear friends, we created Yooga with the desire to make a special place where the feeling of ease, elegance, comfort and space is complemented by attention, understanding and love for anyone who comes to our yoga family. 
                            </p>
                            <p>
							We collaborate with highly accredited instructors as part of our team. We believe that they will make each one of you feel special and we look forward to introducing them to you. 
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
                       <li>	<NavLink exact={true} to="/all" data-filter="*"  className="filter-classes-navlink" onClick = {showAllClasses} >All Classes</NavLink> </li>
                            <li> <NavLink to="/balance" data-filter=".filter-1"  className="filter-classes-navlink" onClick={getBodyBalance} >Body Balance </NavLink></li>
                            <li> <NavLink to="/hatha" data-filter=".filter-2"  className="filter-classes-navlink" onClick={getHatha} >Hatha Yoga </NavLink></li>
                            <li> <NavLink to="/children" data-filter=".filter-3"  className="filter-classes-navlink" onClick={getChildren} >Children Yoga </NavLink></li>
                            <li> <NavLink to="/dance" data-filter=".filter-4" className="filter-classes-navlink" onClick={getDance} >Yoga Dance </NavLink></li>
                        </ul>
                    </div>
                </div>
				{allClasses.length > 0 ? (
                <div className="row class-container">
				{ allClasses.map(c => <SingleClassCard key = {c.id} classData = {c} authorId={c.author} cardId={c.id}/>) }

			 </div> )
			 : 
			 <h4 className="no-classes-found">No classes found.</h4>}

            </div>
        </div>
		</>
	)
}

export default AllClasses;