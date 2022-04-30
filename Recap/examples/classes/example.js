function Animal(name, color, legs) {
  this.name = name;
  this.color = color;
  this.legs = legs;
}

Object.assign(Animal.prototype, {
  run: function() {
    console.log('Running');
  },
  communicate: function(language) {
    console.log(language);
  }
});

function Dog(name, color, legs) {
  Animal.call(this, name, color, legs);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.shakeTheTail = function() {
  picky.communicate('Shaking my tail and barking');
};

Dog.prototype.fetch = function() {
  this.run();
  console.log('Bringing the stick');
};

var picky = new Dog('Picky', 'black', 4);
picky.shakeTheTail();
picky.fetch();


function Duck(name, color, legs) {
  Animal.call(this, name, color, legs);
}

Duck.prototype = Object.create(Animal.prototype);

Duck.prototype.swim = function() {
  console.log('Swimming');
};

var donald = new Duck('Donald', 'alb', 2);
console.log(donald);
donald.communicate('Quack', 'Quack', 'Quack');
donald.swim();
