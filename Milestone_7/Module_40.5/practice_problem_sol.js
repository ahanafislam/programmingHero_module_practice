// Solution of problem no: 1
// setTimeout(() => console.log("Hello"),3000);

// Solutin of problem NO: 2
const sum200 = () => {
    const number = prompt('Enter Your Number');
    alert(`${number} + 200 = ${parseInt(number) + 200}`);
}

// sum200();

// Solution of problem NO: 3
const urlLocation = () => {
    const conVal = confirm("Are you want to see your location?");
    let message = '';

    if(conVal) {
        message = location.href;
    }

    return message;
}

// console.log(urlLocation());

/*===================================
    Solution of problem No: 9 & 10
=====================================*/

// Get HTML Element by id
const getElement = id => document.getElementById(id);

// Display Product in ui after user submit
const displayProduct = () => {
    const productForm = getElement('product-form');

    productForm.addEventListener('submit', e => {
        const productName = productForm['product-name'].value;
        const productPrice = productForm['product-price'].value;
        const productList = getElement('product-list');
        const li = document.createElement('li');
        li.innerText = `${productName} => ${productPrice}`;
        productList.appendChild(li);
        saveInLocalStore(productName, productPrice)
        productForm['product-name'].value = '';
        productForm['product-price'].value = '';
        e.preventDefault();
    } );
}

// Get product object
const getProduct = () => {
    let products;

    !localStorage.getItem('products') ? products = [] : products = JSON.parse(localStorage.getItem('products')); 
    
    return products;
}

// Save Product in local storage
const saveInLocalStore = (productName, productPrice) => {
    let products = getProduct();

    products.push({name: productName, price: productPrice});
    
    localStorage.setItem('products', JSON.stringify(products));
}

// Display Product From Local Store
const displayProductFromLocal = () => {
    let products = getProduct();
    const productList = getElement('product-list');
    products.forEach(element => {
        const li = document.createElement('li');
        li.innerText = `${element.name} => ${element.price}`;
        productList.appendChild(li);
    });
}

displayProductFromLocal();
displayProduct();

