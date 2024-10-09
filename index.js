console.log(7856);

//this keyword points to the object that is executing the method or function

// implicit binding vs explicit binding

// implicit : this keyword inside the method binds to the object while invoking the method using that object

const user1 = {
  firstName: "raj",
  getName() {
    const firstName = "taj";
    return this.firstName;
  },
};
console.log(user1.getName());

class user2 {
  constructor(n) {
    this.name = n;
  }
  getName() {
    console.log(this.name);
  }
}

const user = new user2("paaaaj");
console.log(user);

const sample = {
  name: "piu",
  getDetails() {
    const nestedArrow = () => console.log(this.name);
    nestedArrow();
  },
};

sample.getDetails();

//delete property of an object

const o1={
    roll:8,
    no:9

}
delete o1.no
console.log(o1)

//primitives are immutable

var y=5
var z=y
z=z+1
console.log(y)
console.log(z)


// explicit binding : we use methods  like call when the function is outside of the execution context of the object

function greet(arg){
    console.log(arg ,this.name)
}

const person={
    name:"olo"
}

greet.call(person,"hi ")