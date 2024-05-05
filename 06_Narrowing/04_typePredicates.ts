namespace typePredicates {
  function isString(value: any): value is string {
    return typeof value === "string";
  }

  function printLength(value: string | number) {
    if (isString(value)) {
      console.log(value.length); // value는 string 타입으로 좁혀짐
    } else {
      console.log(value.toFixed(2)); // value는 number 타입으로 좁혀짐
    }
  }
  printLength("4");
  printLength(40);
}
