// Object creation and Access
let book = {
    title: "Psychology of Money",
    author: "Yuri Gagarin",
    year:""
};

book.details = function() {
    console.log(this.title + " " + this.author + " " + this.year);
};

for (let key in book) {
    console.log(book[key]);
}



// this keyword
// remember you cannot add more keys once object has already been defined
let newBook={
    ...book,
    updateBook:function(year){
        this.year=year
    },

}
newBook.updateBook(2022)
newBook.details()


// Object methods
console.log(Object.keys(newBook))
console.log(Object.values(newBook))
console.log(Object.entries(newBook))


// miscellaneous
console.log("title" in book)
