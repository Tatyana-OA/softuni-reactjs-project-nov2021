

const apiUrl = 'https://nexxita.ephedratk.com';


export async function getAll()  {
	try {
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes?per_page=50`);
		return response.json();
	}catch(err) {
		console.error(err)
	}

}

export async function getLatest()  {
	try {
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes?per_page=6`);
		return response.json();
	}catch(err) {
		console.error(err)
	}

}

export async function createClass(classData, userToken) {
	//console.log(classData, userToken)


	try {
		const settings = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + userToken
			},
			body: JSON.stringify(classData)
		};
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes`, settings);
		console.log(response)

		return response.json();
	}catch(err) {
		console.error(err)
	}
}

export async function getClassById(id) {
	try {
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes/${id}`);
		
		return response.json();
	}catch(err) {
		console.error(err)
	}
}

export async function editClassbyId(classData, classId, userToken) {
	try {
		const settings = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + userToken
			},
			body: JSON.stringify(classData)
		};
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes/${classId}`, settings);
		console.log(response)

		return response.json();
	}catch(err) {
		console.error(err)
	}
}


export async function deleteClassbyId(classId, userToken) {
	
		const settings = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + userToken
			}
		};
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes/${classId}`, settings);
		console.log(response)
		if (response.status == "200") {
			return response.json();
		} 
	else {
		throw ({message:'Class Deletion failed. Try again or contact us.'})
	}
}


export async function getAllbyPerson(personId)  {
	try {
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes?author=${personId}&per_page=100`);
		return response.json();
	}catch(err) {
		console.error(err)
	}

}

export async function bookClassbyId(classData, classId, userToken) {
	
		const settings = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + userToken
			},
			body: JSON.stringify(classData)
		};
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes/${classId}`, settings);
		console.log(response)

	
		if (response.status == 200) {
			return response.json();
		} else {
			return ({message:'Booking failed.'})
		}
}

export async function getSeveralClassesByIds(classIds) {
	// https://nexxita.ephedratk.com/wp-json/wp/v2/yogac_classes/?include[]=46&include[]=54
	try {
	
		let createUrl = `${apiUrl}/wp-json/wp/v2/yogac_classes/?`;
		classIds.forEach(id => createUrl+=`include[]=${id}&`)
		let response = await fetch(createUrl);
		console.log(response)

		return response.json();
	}catch(err) {
		console.error(err)
	}
}




