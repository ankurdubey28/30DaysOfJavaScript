var integer=1
console.log(integer)


let float="india"
console.log(float)
float="russia"
console.log(float)


const num=false
console.log(num)
// num=true         //error
// console.log(true)


function logDataTypes(){

    // non primitive data types
    console.log(typeof [])
    console.log(typeof {})
    console.log(typeof function (){})

    // primitive data types
    console.log(typeof "ankur")
    console.log(typeof true)
    console.log(typeof 11.11)
    console.log(Symbol(1))
    console.log(typeof null)
    console.log(typeof undefined)
    console.log(typeof BigInt(1))

}

logDataTypes()


function var_vs_let(val){
    if(val){
        var one=val
        let two=val
    }
    console.log(one)
    //console.log(two)
}

var_vs_let(25)

// var makes global/function scoped variables.
// let/const make block scoped variables.
// var also allows overriding the same variable again and again without any issues.
// if var/let/const is not used to declare a variable it becomes global variable
// irrespective of in which scope is it declared.

function func(){
    name="ankur"
}
func()
console.log(name)   // pitfall in js