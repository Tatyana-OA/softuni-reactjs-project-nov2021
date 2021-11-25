const apiUrl = 'https://nexxita.ephedratk.com';
async function getBearerToken() {
	try {
		const settings = {
			method: 'POST',
		};
		let response = await fetch(`${apiUrl}/wp-json/jwt-auth/v1/token?username=Nexxita&password=18071702TKteam`, settings);
		let result = await response.json()
		console.log("Retrieved access token")
		return result.token;
	}catch(err) {
		console.error(err)
	}

}
const bearerToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9uZXh4aXRhLmVwaGVkcmF0ay5jb20iLCJpYXQiOjE2Mzc3NjUzMTYsIm5iZiI6MTYzNzc2NTMxNiwiZXhwIjoxNjM4MzcwMTE2LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.gqll5FDn2TEHR0v2vL-RrS9xzz78bnjWTJB86zmY-Q4"


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

