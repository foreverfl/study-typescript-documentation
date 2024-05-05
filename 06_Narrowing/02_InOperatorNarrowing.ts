namespace InOperatorNarrowing {
  interface Cat {
    meow(): void;
  }

  interface Dog {
    bark(): void;
  }

  function makeSound(animal: Cat | Dog) {
    if ("meow" in animal) {
      animal.meow(); // animal은 Cat 타입으로 좁혀짐
    } else {
      animal.bark(); // animal은 Dog 타입으로 좁혀짐
    }
  }

  // 객체 리터럴을 사용하여 Cat 타입의 객체 생성
  const cat: Cat = {
    meow() {
      console.log("Meow!");
    },
  };

  // 객체 리터럴을 사용하여 Dog 타입의 객체 생성
  const dog: Dog = {
    bark() {
      console.log("Woof!");
    },
  };

  makeSound(cat); // Cat 타입의 객체를 전달
  makeSound(dog); // Dog 타입의 객체를 전달
}
