class student{
    static display(){
        console.log("hi from parent class");
    }
}
class student1 extends student{
    display1(){
        console.log("hi from child class");
    }
}
let s=new student1();
s.display1();
student1.display();