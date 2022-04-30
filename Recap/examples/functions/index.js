function createCar(name, type, color) {
  if (name === 'Dacia') {
    console.log('Masina mea este o', name);
  } else {
    return false;
  }

  if (type === 'Spring') {
    console.log('Tipul masinii este: ', type);
  } else {
    console.log('Tipul masinii, ', type, ' nu exista');
    return false;
  }

  if (color === 'White') {
    console.log('Culoarea masinii este: ', color);
  } else {
    return false;
  }

  return true;
}


var hasChildChair = false;
//null, 0,3,4, 'string', bool, 10 > 11, {a: 'a'} ['a', 'b'],
//() => {}
var myCar = createCar('Dacia', '1300', 'White');

if (myCar) {
  //console.log('Masina a fost creata');
} else {
  //console.log('Masina NU a fost creata');
}


function myFunc(my_int, my_string, my_obj, my_array) {
  // console.log('func param', my_int);
  // console.log('func param', my_string);
  // console.log('func param', my_obj);
  // console.log('func param', my_array);

  var copy = Object.assign({}, my_obj);

  my_int = 2;
  my_string = 'another string';
  copy.key = 'other-value-string';
}


var myInt = 1;
var myString = 'some string';
var myObject = {
  key: 'value-string'
};
var myArray = ['a', 'b', 'c'];

myFunc(myInt, myString, myObject, myArray);


// console.log('var', myInt);
// console.log('var', myString);
// console.log('var', myObject);
// console.log('var', myArray);

var y = '20'
x = '10';
//console.log('var x', x);
//console.log('window', window.x);

//console.log('var y', y);
//console.log('window', window.y);

// function myFunc() {
//   //instructiunile
//   //scope local
//   z = '30'; //scopul global
//   var q = '30'; //scopul local
//   var w = '40';
//   var obj = {
//     key: 'value'
//   };

//   console.log('initial', obj);
//   innerFunction('other-value1');


//   function innerFunction(newKeyValue) {
//     console.log('inner function w', w);
//     obj.key = newKeyValue;
//   }
// }
// myFunc();

// console.log('var z', z);
// console.log('window', window.z);


function createCar() {
  //creat masina
  var car = {
    name: 'Dacia',
    type: 'Spring'
  };

  function drive() {
    //console.log('Masina', car.name, ' a pornit');
  }

  function stopDrive() {
    //console.log('Masina', car.name, ' s-a oprit');
  }

  return function() {
    drive();
    stopDrive();
  };
}

var innerFunc = createCar();
innerFunc();
innerFunc();
innerFunc();

function createInc() {
  var i = 0;

  return function() {
    return i++;
  };
}

var inc1 = createInc();
inc1();
inc1();
//console.log(inc1());


let elem;
let index2 = 0;
let myAArray = [];

function test(index) {
  let index2 = index;
  elem = document.querySelector(`li:nth-child(${index})`);
  let button = elem.querySelector('button');


  button.addEventListener('click', function() {
    index2 = 99;
  });
  elem.addEventListener('click', function () {
    console.log(index2);
  });
}

for (let j = 1; j <= 5; j++) {
  test(j);
}

console.log(elem);

