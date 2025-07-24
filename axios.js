const axios = require('axios');

async function fetchUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        console.log("Hello");

        users.forEach(user => {
           console.log(`User: ${user.name}, Email: ${user.email}`); 
        });

    } catch(err) {
        console.error(err);
    }

    console.log("good");
}

fetchUsers();