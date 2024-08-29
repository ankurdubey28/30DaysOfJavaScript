// Basic of classes (static methods and properties)
class Person{
    constructor(name,age) {
        this.name=name
        this.age=age
    }
    greet(){
        console.log(`hello ${this.name} whose age is ${this.age}`)
    }
    updateAge(age){
        this.age=age
    }
    static Greet(){
        console.log("Generic greet method")
    }
}

const person= new Person("ankur",11)
person.greet()
person.updateAge(32)
person.greet()

Person.Greet()


// Inheritance and method overriding
class Student extends Person{
    static count=0
    constructor(name,age,id) {
        super(name,age);
        this.id=id
        Student.count++;
    }
    getID(){
        console.log(this.id)
    }
    greet() {
        console.log(`hello student with id :${this.id}`)
    }
}

const student=new Student('aman',33,1)
student.getID()
console.log(Student.count)



// Getters and Setters
class Employee{
    constructor(name) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }

    set Name(value) {
        this.name = value;
    }
}

const emp=new Employee('alice')
console.log(emp.Name)  // this actually calls teh Name() getter method
emp.Name="Momos"
console.log(emp.Name)

// Note - 1.Getters and setters use specific 'get' and 'set' keywords to distinguish
//        them from constructor and normal methods.
//        2.Getters are accessed like properties, getter method is called under the hood




// Private Fields
class Teacher{
    #name
    constructor(name,age) {
        this.#name=name
        this._age=age
    }
    #privateMethod(){
        console.log("this is a private method")
    }
    get age(){
        return this._age
    }
}

const teacher=new Teacher('Bob',99)
// console.log(teacher.name) gives error cause private property
console.log(teacher.age)


// Public: Default in JavaScript; accessible from anywhere.
// Private: Achieved using the # prefix or closures; not accessible outside the class. Introduced in ES2022
// Protected: Not natively supported; conventionally indicated by an underscore _ prefix.
//            Just a convention to label properties as protected, does not actually make the property protected
