namespace func {
  const names = ["Rudeus", "Roxy", "Sylphiette", "Eris"];

  names.forEach(function (s) {
    console.log(s.toUpperCase());
  });

  console.log("======================");

  names.forEach((s) => {
    console.log(s.toUpperCase());
  });
}
