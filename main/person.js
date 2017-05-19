// Write your code here
module.exports = Person
/*
 * 定义一个类User,js中使用构造函数实现 
 */  
var Person = function(name,age){  
    //定义属性  
    this.name = name;  
    this.age = age;  
 };  
  
// js通过prototype动态为类添加方法  
Person.prototype.introduce = function(){  
  var a="My name is "+this.name+". I am "+this.age+" years old."
    return a;  
};  
 
