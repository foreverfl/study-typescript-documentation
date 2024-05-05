namespace ObjectLiteral {
  const person = {
    name: "John",
    age: 30,
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };

  person.sayHello(); // Output: Hello, my name is John
}
