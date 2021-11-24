const apiUrl = 'https://nexxita.ephedratk.com/';


export async function getAll()  {
	try {
		let response = await fetch(`${apiUrl}/wp-json/wp/v2/yogac_classes`);
		return response.json();
	}catch(err) {
		console.error(err)
	}

}


