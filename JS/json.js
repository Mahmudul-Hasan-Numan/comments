const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

const displayUsers = users => {
    const div = document.getElementById('load-users')
    users.forEach(user => {
        div.classList.add('users')
        const h3 = document.createElement('h3');
        h3.innerText = `${user.name}`;
        div.appendChild(h3)
        const p = document.createElement('p');
        p.innerText = `${user.email}`;
        div.appendChild(p)

    })
}