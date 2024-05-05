namespace EqualityNarrowing {
  function printAnimal(animal: "cat" | "dog" | "bird") {
    if (animal === "cat") {
      console.log("Meow!"); // animal은 'cat' 타입으로 좁혀짐
    } else if (animal === "dog") {
      console.log("Woof!"); // animal은 'dog' 타입으로 좁혀짐
    } else {
      console.log("Chirp!"); // animal은 'bird' 타입으로 좁혀짐
    }
  }
  printAnimal("cat");
}
