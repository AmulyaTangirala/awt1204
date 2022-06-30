class Parent{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("Student name from parent class : "+this.name);
    }
}
class Child{
    display1(){
        console.log(" hi from child class");
    }
}
let s = new Child();
s.display1();
//https://github.com/AmulyaTangirala/awtlabexternal.gitx