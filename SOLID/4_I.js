// Interface Segregation Principle

class Animal {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(`${this.name} can walk long time`);
  }
  swim() {
    console.log(`${this.name} can swim well`);
  }
  fly() {
    console.log(`${this.name} can fly well`);
  }
}

class Dog extends Animal {
  fly() {
    return console.log(
      "Flying would a true 🦄 miracle for that type of animal"
    );
  }
}

class Eagle extends Animal {
  swim() {
    return console.log(
      "Swimming would a true 🦄 miracle for that type of animal"
    );
  }
}

class Dolphin extends Animal {
  fly() {
    return console.log(
      "Flying would a true 🦄 miracle for that type of animal"
    );
  }
}

const dog = new Dog("Charlie");

dog.walk();
dog.swim();
dog.fly();

const monty = new Eagle("Monty");

monty.swim();
