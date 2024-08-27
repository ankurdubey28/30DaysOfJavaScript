
class CustomError extends Error{
    name
    constructor(message) {
        super(message);
        this.name="Custom Error"
    }
    getMessage(){
        return `${this.message}`
    }
}

function divide(a,b){
    if(b===0){
        throw new CustomError("Division with 0 not allowed")
    }
    console.log(a/b)
}

try{
   divide(5,1)
}catch (err){
    console.log(err.getMessage())
}


function ValidateInput(str){
  if(str.length===0){
      throw new CustomError("invalidated")
  }
    console.log("Validated")
}

try{
    ValidateInput("1")
}catch (err){
    console.log(err.getMessage())
}