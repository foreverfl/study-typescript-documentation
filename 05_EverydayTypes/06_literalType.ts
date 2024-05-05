namespace literalType {
  function printText(s: string, alignment: "left" | "right" | "center") {
    switch (alignment) {
      case "left":
        console.log(`Left aligned text: ${s}`);
        break;
      case "right":
        console.log(`Right aligned text: ${s}`);
        break;
      case "center":
        console.log(`Center aligned text: ${s}`);
        break;
      default:
        console.error(`Invalid alignment value: ${alignment}`);
        break;
    }
  }

  printText("Hello, world", "left");
  printText("お腹がペコペコする。", "center");
}
