const fetch = require('node-fetch');

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log("Very good");
        users.forEach(user => {
            console.log(`User: ${user.name}, Email: ${user.email}`);
        });
    } catch(err) {
        console.error(err);
    }

    console.log("nice nice nice nice");
    console.log("pretty good bomba");

}

fetchUsers();