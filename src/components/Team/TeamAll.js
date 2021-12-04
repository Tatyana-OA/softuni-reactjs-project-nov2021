import SinglePageHead from "../SinglePageHead";
import TeamSingleCard from "../Team/TeamSingleCard";
import * as userService from '../../services/userService'
import { useEffect, useState } from "react";

const TeamAll = () => {
	const [teachers, setTeachers] = useState([])

	useEffect(()=> {
		async function getUsers() {
			const result = await userService.getTeachers();
			setTeachers(result)
		}
		getUsers()
	}, [])

	console.log(teachers)
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
				{teachers.map(t => <TeamSingleCard  userFullName = {t['acf'].first_name + ' ' + t['acf'].last_name} userImage={t['acf'].user_imageUrl} userType={t['acf'].user_type} />)}
                </div>
            </div>
        </div>
		</>
	)
}

export default TeamAll;