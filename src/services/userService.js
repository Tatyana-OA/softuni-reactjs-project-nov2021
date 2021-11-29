
const apiUrl = 'http://nexxita.ephedratk.com';

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
		localStorage.setItem('userId', user.id)
		localStorage.setItem('username', user.name)
		localStorage.setItem('token', result.token)
		for (let key in user.acf) {
			localStorage.setItem(`${key}`, user.acf[key])
		}
		console.log('login result',result.token)
		return result;

	}catch(err) {
		console.error(err)
	}


}
export async function searchUserByEmail(email) {
	console.log('in search')
	const settings = {
		method: 'GET',
		headers: {
			'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9uZXh4aXRhLmVwaGVkcmF0ay5jb20iLCJpYXQiOjE2Mzc3NjUzMTYsIm5iZiI6MTYzNzc2NTMxNiwiZXhwIjoxNjM4MzcwMTE2LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.gqll5FDn2TEHR0v2vL-RrS9xzz78bnjWTJB86zmY-Q4'
		},
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
	localStorage.setItem('username', userData.username)
	localStorage.setItem('token', token)
	for (let key in userData.acf) {
		localStorage.setItem(`${key}`, userData.acf[key])
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


export function ValidateEmail(mail) {
	console.log('validating')
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
		return false;
	}
  }