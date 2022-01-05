function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}
loadComments()

const displayComments = comments => {
    const commentsContainer = document.getElementById('comments-container')
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comments')
        div.innerHTML = `
        <h2>${comment.name}</h2>
        <h3>${comment.email}</h3>
        <p>${comment.body}</p>
        `;
        commentsContainer.appendChild(div)
    })
}