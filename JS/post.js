function LoadingPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

LoadingPosts()


function displayPosts(posts) {
    const postsContainer = document.getElementById('display-posts')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('posts')
        div.innerHTML = `
        <h3>Title: ${post.title}</h3>
        <p>${post.body}</p>
        `;
        postsContainer.appendChild(div)
    }
}
