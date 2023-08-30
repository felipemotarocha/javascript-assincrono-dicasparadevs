class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    console.log(`Nome completo: ${this.name} ${this.lastName}`);
  }

  // static -> Quando não precisamos de dados retornamos pelo cliente. 
  // Ele não tem acesso ao this e só pode ser executado direto da classe principal. 
  // Correto: Person.speak() | Errado: variavelPerson.speak()
  static speak() {
    console.log(`Saudação: Olá, ${this.getFullName()}`)
  }
}

const person = new Person("Rafaella", "Lopes", 20);
person.getFullName();
person.speak();

console.log(person);
