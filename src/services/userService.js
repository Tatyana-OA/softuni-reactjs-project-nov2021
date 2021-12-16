
const apiUrl = 'https://nexxita.ephedratk.com';

// function UpdateUserContext(userInfo) {
// 	const [newUser, setNewUser] = useState(user);
// 	setNewUser

// }

export async function getBearerToken(currentUser) {
	
	let result;
	try {
		const settings = {
			method: 'POST',
		};
		let response = await fetch(`${apiUrl}/wp-json/jwt-auth/v1/token?username=${currentUser.username}&password=${currentUser.password}`, settings);
		result = await response.json()
		let user = await searchUserByEmail(result.user_email)
		result.user=user[0];
		user = user[0]
		console.log('login result',result.token)
		return result;

	}catch(err) {
		throw new Error(err.message);
		
	}


}
export async function searchUserByEmail(email) {
	console.log('in search')
	const settings = {
		method: 'GET',
		// headers: {
		// 	'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9uZXh4aXRhLmVwaGVkcmF0ay5jb20iLCJpYXQiOjE2Mzc3NjUzMTYsIm5iZiI6MTYzNzc2NTMxNiwiZXhwIjoxNjM4MzcwMTE2LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.gqll5FDn2TEHR0v2vL-RrS9xzz78bnjWTJB86zmY-Q4'
		// },
	};
	try {
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/users?search=${email}`, settings)
		let result = await response.json();
		console.log(await result, 'Search user by email')
		return result;
	}catch(err) {
		console.error(err)
	}

}


export async function createUser(userData) {
	const {token} = await getBearerToken({
		"username": "Nexxita",
		"password": "18071702TKteam"
	})
	console.log('token', token)
	
		const settings = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + token
			},
			body: JSON.stringify(userData)
		};

			let response = await fetch(`${apiUrl}/wp-json/wp/v2/users`, settings);
			if (response.status == 201) {
				return response.json();
			} else {
				throw ({message:'Registration failed. Try another email.'})
			}



}

export async function getUserById(id) {
	try {

		let response = await fetch(`${apiUrl}/wp-json/wp/v2/users/${id}`);
		console.log('route requested', `${apiUrl}/wp-json/wp/v2/users/${id}`)

		// console.log(await response, 'userbyid')
		return response.json();
	}catch(err) {
		console.error(err)
	}
}
export async function getTeachers() {
	try {
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/users?per_page=100`);

		// console.log(await response, 'userbyid')
		return response.json();
		
	}catch(err) {
		console.error(err)
	}
}

export async function addBookingToUser(userId, data, userToken) {

		const settings = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + userToken
			},
			body: JSON.stringify(data)
		};
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/users/${userId}`, settings);
		console.log(response)

		if (response.status == 200) {
			return response.json();
		} else {
			return ({message:'Booking failed.'})
		}
	
}


export function validateEmail(mail) {
	console.log('validating')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
		return false;
	}
  }

  export  function validateUrl(value) {
	return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }