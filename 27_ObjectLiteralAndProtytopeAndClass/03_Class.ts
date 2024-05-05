namespace classExample {
  class Person {
    constructor(public name: string, public age: number) {}

    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  const john = new Person("John", 30);
  john.sayHello(); // Output: Hello, my name is John
}
