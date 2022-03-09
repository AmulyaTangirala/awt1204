class Student{
    display(){
        console.log("hi from parent class");
    }
}
class Student1 extends Student{
    display1(){
        console.log("hi from child class");
    }
}
let s = new Student1();
s.display();
s.display1();