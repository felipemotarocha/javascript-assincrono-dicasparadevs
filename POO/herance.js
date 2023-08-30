class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} made some noise!`);
  }
}

// super -> Ele é necessário para que possamos acessar as propriedades do construtor da classe mãe (Animal)
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  // É possível sobescrever funções da classe mãe (Animal)
  speak() {
    console.log(`${this.name} barked!`);
  }
}

const leon = new Animal("Simba");
const dog = new Dog("Doug");

leon.speak();
dog.speak();
