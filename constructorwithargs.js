class Student{
    constructor(name){
        this.name=name;
    }
    display1(){
        console.log("student name is : "+this.name);
    }
}
let s = new Student("amulya");
s.display1();