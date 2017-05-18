// Write your code here
module.exports = Person
/*
 * 定义一个类User,js中使用构造函数实现 
 */  
Person = function(sname,sage){  
    //定义属性  
    this.name = sname;  
    this.age = sage;  
 }  
  
// js通过prototype动态为类添加方法  
User.prototype.introduce = function(){  
  var a="My name is "+name+". I am "+age+" years old."
    return a;  
};  
