class Person{
  constructor(name, age){
    this.name = name; // When we use "new" a new object is created, that's thy we use this, to define the properties of that object using the constructor function.
    this.age = age;
  }

  sayHelloPerson(){
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  }
}

const person1 = new Person('Frank', 22);

person1.sayHelloPerson();

class Student extends Person {
  constructor(name, age, semester, career, school){
    super(name, age);
    this.semester = semester;
    this.career = career;
    this.school = school;
  }

  sayHelloStudent(){
    super.sayHelloPerson(); //We inherit the method so we don't repeat code.
    console.log(`I'm currently at ${this.semester} semester of ${this.career} at ${this.school}`);
    //console.log(this); //Context --> Current object.
  }
}

const student1 = new Student('Frank', 22, 6, 'Computer Science', 'ITESM Campus Cuernavaca');

student1.sayHelloStudent();