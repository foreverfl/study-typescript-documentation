namespace PrototypExample {
  interface PersonInterface {
    name: string;
    age: number;
    sayHello(): void;
  }

  function Person(this: PersonInterface, name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.sayHello = function (this: PersonInterface) {
    console.log(`Hello, my name is ${this.name}`);
  };

  // Person as any는 Person 생성자 함수의 타입을 any로 단언(assertion). 이는 TypeScript의 타입 검사를 우회하기 위한 방법.
  // 마지막으로 as PersonInterface는 생성된 객체를 PersonInterface 타입으로 단언함. 이렇게 하면 생성된 객체가 PersonInterface를 만족한다고 명시적으로 선언하는 것.
  // 이를 통해 TypeScript 컴파일러는 해당 객체가 PersonInterface의 속성과 메서드를 가지고 있다고 인식하게 됨.
  const john = new (Person as any)("John", 30) as PersonInterface;
  john.sayHello(); // Output: Hello, my name is John
}
