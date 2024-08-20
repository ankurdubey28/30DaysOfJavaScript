
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

//Pattern(5)