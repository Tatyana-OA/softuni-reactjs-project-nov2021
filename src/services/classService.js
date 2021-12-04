

const apiUrl = 'https://nexxita.ephedratk.com';


export async function getAll()  {
	try {
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes`);
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