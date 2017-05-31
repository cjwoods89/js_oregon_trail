(function(){

  function Traveler(name, amount, health){

    var name = name;
    var amountOfFood = amount;
    var isHealth = health;

    this.getName = function(){
      return name;
    }

    this.getHealth = function(){
      return isHealth;
    }

    this.setHealth = function(x){
      isHealth = x;
    }

    this.getFood = function() {
      return amountOfFood;
    }

    this.setFood = function(x){
      amountOfFood = amountOfFood + x;
    }

  }

  function Wagon(capacity){

    this.passengers = [];
    this.capacity = capacity;

    this.addPassengers = function(travelerName){
      this.passengers.push(travelerName);
    }


  }

  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function makeTraveler(name) {

    let amountOfFood = getRandomInt(0,10)
    let isHealthy = true;
    return new Traveler(name, amountOfFood, isHealthy);

  }

  function makeWagon(capacity){

    return new Wagon(capacity)

  }

  function hunt(traveler) {
    let foodChance = getRandomInt(0,10);

    if (foodChance >= 5) {
      traveler.setFood(100);
    }

  }

  function eat(traveler) {

    traveler.setFood(-20);

    if (traveler.getFood() < 20) {
      
     traveler.setHealth(false);
    }

  }

  function join(wagon, traveler){

    if (wagon.passengers.length < wagon.capacity) {

      wagon.addPassengers(traveler);

    }
  }

  function quarantine(wagon){

    let wagonHealth = true;

    for (var i = 0; i < wagon.passengers.length; i++) {

      if (!wagon.passengers[i].getHealth()) {
        wagonHealth = false;
        break;
      }

    }

    return wagonHealth;

  }

  function food(wagon){

    let wagonFood = 0;

    for (var i = 0; i < wagon.passengers.length; i++) {
      wagonFood = wagonFood + wagon.passengers[i].getFood();
    }

    return wagonFood;
  }

  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');

  hunt(traveler); // maybe get more food
  eat(traveler2);
  eat(traveler2); // juan is hungry
  join(wagon, traveler);
  join(wagon, traveler2);

  console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
  console.log(food(wagon)); // print juan's food + henrietta's food

})();
