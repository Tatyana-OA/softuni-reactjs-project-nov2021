const apiUrl = 'https://nexxita.ephedratk.com';
const currentUser = {
	"username": "Nexxita",
	"password": "18071702TKteam"
}
async function getBearerToken() {
	try {
		const settings = {
			method: 'POST',
		};
		let response = await fetch(`${apiUrl}/wp-json/jwt-auth/v1/token?username=${currentUser.username}&password=${currentUser.password}`, settings);
		let result = await response.json()
		console.log("Retrieved access token")
		return result.token;
	}catch(err) {
		console.error(err)
	}

}



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
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes?per_page=4`);
		return response.json();
	}catch(err) {
		console.error(err)
	}

}

export async function createClass(classData) {
	const token = await getBearerToken();
	console.log('token', token)
	try {
		const settings = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			},
			body: JSON.stringify(classData)
		};
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes`, settings);

		return response.json();
	}catch(err) {
		console.error(err)
	}
}

