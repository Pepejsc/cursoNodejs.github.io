const fs = require("node:fs/promises");

console.log("leyendo el 1er archivo........");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("primer texto: ", text);
});

console.log("Hacer cosas mientras lee el archivo....");

console.log("leyendo el 2do archivo........");
fs.readFile("./archivo2.txt", "utf-8").then((text) =>{
    console.log('segundo texto: ', text);
});
