namespace unionType {
  function printId(id: number | string) {
    if (typeof id === "string") {
      // 이 분기에서 id는 'string' 타입을 가짐

      console.log(id.toUpperCase());
    } else {
      // 여기에서 id는 'number' 타입을 가짐
      console.log(id);
    }
  }

  printId("momona");
  printId(1234);
}
