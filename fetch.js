const fetch = require('node-fetch');

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        users.forEach(user => {
            console.log(`User: ${user.name}, Email: ${user.email}`);
        });
    } catch(err) {
        console.error(err);
    }
}

fetchUsers();