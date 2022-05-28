// function Timer() {
//   let oThis = this;
//   console.log(this);
//   this.value = 0;
//   console.log(this.value);
//   setInterval(function incr() {
//     console.log(oThis);
//     //this.value++;
//   }, 1000);
// }

// function Timer() {
//   this.value = 0;
//   console.log(this);
//   setInterval(() => {
//     console.log(this);
//     this.value++;
//   }, 1000);
// }

// const sum = (x, y) => {
//   return x + y;
// }

const Person = class {
  static defaultFullName() {
    return 'John Doe';
  }

  constructor() {
    this.firstName = 'Jimmy';
    this.lastName = 'Smith';
  }

  get fullName() {
    return this.firstName + ' ---- ' + this.lastName;
  }

  set fullName(name) {
    var words = name.toString().split(' ');
    this.firstName = words[0] || '';
    this.lastName = words[1] || '';
  }
}

const p = new Person();
p.fullName = 'Jack Franklin';

console.log(p);
console.log(Person);

//console.log(p.firstName); // Jack
//console.log(p.lastName) // Franklin

