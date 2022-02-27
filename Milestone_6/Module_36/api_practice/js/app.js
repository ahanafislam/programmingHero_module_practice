// Get Tag name 
const getTagName = id => document.getElementById(id);

const showLoding = () => {
    getTagName('spinner').style.display = 'block';

    // To stop loding
    setTimeout(() => {
        getTagName('spinner').style.display = 'none';
    },2000);
}

// Featch Api Photo
const loadImage = () => {
    showLoding();
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayImage(data));
}

loadImage();

// Load Photo details
const loadImgDetailes = id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayImageDetailes(data));
}

// Display Image
const displayImage = images => {
    const imgDisplay = getTagName('img-display');
    images.forEach(img => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick='loadImgDetailes(${img.id})' class="card border border-danger radious-3" style="width: 18rem;">
                <img src="${img.url}" class="card-img-top" alt="Food Picture">
                <div class="card-body">
                    <h5 class="card-title">${img.title}</h5>
                </div>
            </div>
        `;
        imgDisplay.appendChild(div);
    });
}

// display image detail
const displayImageDetailes = (img) => {
    const imgDisplay = getTagName('img-details');
    imgDisplay.textContent = ``;

    const div = document.createElement('div');

    div.innerHTML = `
        <div class="border border-3 border-danger radious-3 row row-cols-1 row-cols-md-3 mb-5">
            <div class="col bd-success">
                <img src="${img.url}" class="w-75" alt="Food Picture">
            </div>
            <div class="col">
                <img src="${img.thumbnailUrl}" class="w-75" alt="Food Picture">
            </div>
            <div class="col">
                <div class="card-body">
                        <p class="card-text">${img.title}</p>
                </div>
            </div>
        </div>
    `;
    imgDisplay.appendChild(div);

}
