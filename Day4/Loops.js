
function forLoop(num){
    for(let i=0;i<11;i++){
        console.log(num*i)
    }
}
forLoop(5)

function whileLoop(){
    let sum=0;
    let i=0;
    while (i<=10){
        sum+=0;
    }
    console.log(sum)
}
whileLoop()

function DoWhileLoop(){
    let i=0;
    do{
        console.log(i)
    }while (i<5)
}
DoWhileLoop()

function Pattern(num){
    for(let i=0;i<=num;i++){
        for(let j=0;j<i;j++){
            process.stdout.write("*")
        }
        console.log(" ")
    }
}

// Destructuring:
// 1.Binding vs assignment
const[a=1]=[]; // default value
const[a,,b]=[1,2,3] // ignoring values
const[c:d]=[1] // renaming

// variable swapping
let a=1;
let b=2;
[a,b]=[b,a]
console.log(a)
console.log(b)


// setting function parameter default value:
// allows better handling of cases which can throw error
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
