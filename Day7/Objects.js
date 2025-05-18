// Object creation and Access
//Object literal notation
let book = {
    title: "Psychology of Money",
    author: "Yuri Gagarin",
    year:""
};

//Object constructor
const obj1=new Object(); //same as {}
const bool=new Object(true) // same as new Boolean();

//Object.create(): construct objects from a given prototype
const proto = { greet() { return "hello"; } };
const obj2 = Object.create(proto);
obj2.name = "Alice";
console.log(obj2.greet()); // "hello"

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

//Object creation from entries
const entries=[["name","alice"],["Age",25]]
const obj=Object.fromEntries(entries)
console.log(obj);

//Object.assign(target,...sources)
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2, c: 3 }

//Object.freeze(obj): prevent any changes to object
const config = { debug: true };
Object.freeze(config);
config.debug = false;
console.log(config.debug); // true (unchanged)

//Object.seal(obj):prevent adding/removing properties but existing ones can be modified
const user = { name: "Alice" };
Object.seal(user);
user.name = "Bob";    // ✅ OK
user.age = 25;        // ❌ Not added
delete user.name;     // ❌ Not deleted
console.log(user);    // { name: "Bob" }

//Object.defineProperty(obj,prop,descriptor): add/change single property with fine gain control
const user = {};
Object.defineProperty(user, 'name', {
  value: 'Alice',
  writable: false,   // can't change the value
  enumerable: true,  // will show in for...in or Object.keys
  configurable: false // can't delete or reconfigure
});
console.log(user.name); // Alice
user.name = 'Bob';      // won't change because writable: false
console.log(user.name); // still Alice
user.name=undefined
console.log(user.name)


//Object.defineProperties(ob,descriptors): same as above method, just that multiple properties
// can be defined at once with descriptors.
const user = {};
Object.defineProperties(user, {
  name: {
    value: 'Alice',
    writable: true
  },
  age: {
    value: 30,
    writable: false
  }
});
console.log(user); // { name: 'Alice', age: 30 }

// Object.setPrototyepOf(obj,prototype): set prototype of existing object
const proto = {
  greet() {
    return 'Hello!';
  }
};
const user = { name: 'Alice' };
Object.setPrototypeOf(user, proto);
console.log(user.greet()); // Hello!

//Object.hasOwn(obj,prop): check if a property belongs to object directly and is not inherited
// modern and safer alternative
const user = { name: 'Alice' };
console.log(Object.hasOwn(user, 'name')); // true
console.log(Object.hasOwn(user, 'toString')); // false


