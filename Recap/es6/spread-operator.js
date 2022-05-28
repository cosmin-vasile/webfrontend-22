console.log('--------SPREAD OPERATOR-------');

function test(param1, param2, param3) {
  console.log(param1, param2, param3);
}

test('1', '2', '3');
test.apply(null, ['1', '2', '3']);
test(...['1', '2', '3']);

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr4 = arr1.concat(arr2);
arr4.push(6);

var arr3 = [
  ...arr1,
  6
];

console.log(arr3);

function test1(arr) {
  var newArr = [
    ...arr,
    4
  ];
  console.log(newArr);
  arr.push(44);
}

var myArray = [1, 2, 3];
test1(myArray);
console.log('myArray', myArray);


var obj1 = { foo: 'bar from OBJ1', x: 42 };
var obj2 = { foo: 'baz from OBJ2', y: 13 };
var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// Object { foo: "baz", x: 42, y: 13 }


console.log('--------REST OPERATOR-------');
function test1(type, title, ...otherParams) {
  console.log(type, title);
  console.log(otherParams);
}

test1('type', 'My Title', '1', '2', '3', '4');

const myVehicle = {
  title: 'Dacia',
  type: 'car',
  fuel: 'gas',
  wheels: '4',
  color: 'gray'
};

console.log(myVehicle.title, myVehicle.type);

const { type, title, lights, ...otherProps } = myVehicle;
console.log(type, title, lights, otherProps);

const myArr1 = [1, 2, 3, 4, 5];
const myArr2 = ['a', 'b', 'c', 'd', 'e'];
const myArr3 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}];
const [firstItem1, secondItem1, ...otherItems1] = myArr1;
console.log(firstItem1, secondItem1, otherItems1);
const [firstItem2, secondItem2, ...otherItems2] = myArr2;
console.log(firstItem2, secondItem2, otherItems2);
const [firstItem3, secondItem3, ...otherItems3] = myArr3;
console.log(firstItem3, secondItem3, otherItems3);
const [, , secondItem33] = myArr3;


let i = 0;
const intervalId = setInterval(() => {
  console.log('internval running', ++i);
}, 1000);

const timeoutId = setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

//clearTimeout(timeoutId);
