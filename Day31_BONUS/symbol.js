// Symbol - one of the 7 primitive data type in JS
// 1. Symbol is used to represent unique and immutable identifier, every time
//    we create symbol it is guaranteed to be unique.
// 2. It is used as key in objects to avoid property name collision.
// 3. Notably new keyword does not work with Symbol cause Symbol() is not constructor but a function.
// 4. There is no symbol literal syntax in Js which means to create Symbol we need to use
//    factory methods and other utilities.

const id1=Symbol("id");
const id2=Symbol("id");
console.log(id1===id2) // false
console.log(typeof id1)

// Symbol wrapper Object
const sym=Symbol("foo");
const symObj= Object(sym)  // with Object() always prefer not to use new keyword does not matter
                           // how appealing it may appear


// 5. Global Symbol Registry - pseudo shared storage concept for symbols that allow
//                             different parts of you program to use same symbol if they
//                             know its key.



const token=Symbol.for("myKey") // if symbol exists for key then returned else new symbol is created and returned.
const key=Symbol.keyFor(token)  // returns key string fo symbol
console.log(key)


// Symbol() vs Symbol.for()
// 1. Symbol() creates a new unique symbol every time, even if descriptions match.
// 2. Symbols from Symbol() are private and not registered globally.
// 3. Symbol.for(key) looks up symbol in global registry by key:
//    - If exists, returns existing symbol.
//    - Else creates new symbol, stores it globally, and returns it.
// 4. Symbol.for() symbols are shared across code/modules.
// 5. Symbol.keyFor(symbol) returns the key for symbols in global registry; returns undefined for symbols created via Symbol().
// 6. Use Symbol() for unique, private IDs; use Symbol.for() for shared, global symbols.

// Some Points
// 1. Symbols are not enumerable
// 2. Symbol keyed properties are completely ignore when used with JSON.stringify();
// 3. Symbol wrapper objects behave like their primitive Symbol when used as object keys.




// console.log(typeof new Object())
// console.log(typeof Object())
// console.log(typeof {})