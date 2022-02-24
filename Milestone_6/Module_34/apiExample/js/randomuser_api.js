const loadUserList = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUserList(data.results))
}

loadUserList();

const displayUserList = data => {
    const sectionTag = document.querySelector('section');
    data.forEach(user => {
        const article = document.createElement('article');
        article.classList.add('col');
        article.innerHTML = `
            <div class="bg-dark border border-2 border-danger rounded-3">
                <div class="card-body">
                    <img src="${user.picture.medium}" class="img-thumbnail mb-2" alt="User Profile Picture">
                    <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                    <h6 class="card-subtitle mb-2 text-danger">From ${user.location.country}</h6>
                    <hr class="border border-danger">
                    <ul class="list-group">
                        <li style="background: none;" class="list-group-item text-danger">Email: ${user.email}</li>
                        <li style="background: none;" class="list-group-item text-danger">Phone: ${user.phone}</li>
                    </ul>
                </div>
            </div>
        `;
        sectionTag.appendChild(article);
    });
}
