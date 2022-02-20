function paperRequirements(pageBook1, pageBook2, pageBook3){
    let books = {
        book1 : 100 * pageBook1,
        book2 : 200 * pageBook2,
        book3 : 300 * pageBook3,
    };
    let totalPage = books.book1 + books.book2 + books.book3;
    return totalPage;
}

let book1 = 5;
let book2 = 6;
let book3 = 3;

console.log(paperRequirements(book1, book2, book3));
