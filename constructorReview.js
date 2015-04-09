//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here

var Animal = function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here

var person = function(name, age, height, gender) {
  var obj = {
    name: name,
    age: age,
    height: height,
    gender: gender,
  }
  return obj
}

//Create a animal array and a person array.

  //code here

var animals = [];
var persons = [];

//Create two instances of Animal and push those into your animal array

  //code here

var animal1 = new Animal("canine", "dog", 4, "brown", ["cat", "roadkill", "dog food"]);
var animal2 = new Animal("feline", "cat", 4, "black", ["mice", "cat food", "ghosts"]);
animals.push(animal1, animal2);


//Create two instances of person and push those into your person array.

  //code here
var person1 = person("Frank", 47, "5'6", "female");
var person2 = person("Caden", 18, "5'8", "male");
persons.push(person1, person2);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

Animal.prototype.eat = function(arr) {
  return this[Math.floor(Math.random() * arr.length)];
  alert(arr.name + " ate " + arr.food)
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

//Not without adding it to each individual instance separately. Also wouldn't add it to future instances.


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/