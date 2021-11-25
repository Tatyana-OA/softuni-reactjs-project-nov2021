import {getBearerToken} from './classService';

const apiUrl = 'https://nexxita.ephedratk.com';
const currentUser = {
	"username": "Nexxita",
	"password": "18071702TKteam"
}

export async function createUser(userData) {
	const token = await getBearerToken(currentUser)
	console.log('token', token)
	try {
		const settings = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			},
			body: JSON.stringify(userData)
		};
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/users`, settings);

		return response.json();
	}catch(err) {
		console.error(err)
	}
}