namespace InstanceNarrowing {
  class Cat {
    meow() {
      console.log("Meow!");
    }
  }

  class Dog {
    bark() {
      console.log("Woof!");
    }
  }

  function makeSound(animal: Cat | Dog) {
    if (animal instanceof Cat) {
      animal.meow(); // animal은 Cat 타입으로 좁혀짐
    } else {
      animal.bark(); // animal은 Dog 타입으로 좁혀짐
    }
  }

  const cat = new Cat(); // Cat 클래스의 인스턴스 생성
  const dog = new Dog(); // Dog 클래스의 인스턴스 생성

  makeSound(cat);
  makeSound(dog);
}
