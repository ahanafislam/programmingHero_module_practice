/*========================================
    All Function For Fetch Data From API
==========================================*/

// Fetch The PostList From API
function postList() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPostList(data));
}
postList();

// Fetch User List From API
function getUserName() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        // .then(data => )
        .then(data => {
            let userName = '';
            data.forEach(element => {
                if(element.id == 1){
                    userName = element.name;
                }
            });
            return userName;
        })
}

getUserName().then(res => {
    console.log(res);
})


/*===========================
    All Function For UI
=============================*/

// Display The Fetching PostList In UI
function displayPostList(posts) {
    const postDisplaySection = document.getElementById('post-display-section');
    for(const post of posts) {
        const article = document.createElement('article');
        article.classList.add('col');
        article.innerHTML = `
            <div class="bg-dark border border-2 border-success rounded-3">
                <div class="card-body">
                    <h5 class="card-title">${post.title.toUpperCase()}</h5>
                    <h6 class="card-subtitle mb-2 text-success"></h6>
                    <hr class="border border-success">
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="nav-link p-0 text-end text-success">Read more...</a>
                </div>
            </div>
        `;
        postDisplaySection.appendChild(article);
    }
}
