 let Person = require('./person')
// Write your code here
module.exports = Student
 //define a sub class
var Student = function(name,age,kclass){
    this.kclass = kclass;
    Person.prototype.constructor.call(this,name,age);
};
//Student.prototype = Object.create(Person.prototype);
Student.prototype = new Person(name,age) 
Student.prototype.constructor = Student;
Student.baseClass = Person;
//override the sayHello method
     Student.prototype.introduce  = function(){
    //call the method in the base class
     var a="My name is "+this.name+". I am "+this.age+" years old."+" I am at Class "+this.kclass+"."  
    return a;  
};
