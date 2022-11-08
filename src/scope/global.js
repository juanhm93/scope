var hello = "Hello";
let world = "Hello world";
const helloWord = "hello world!";

console.log(hello);

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWord);
};

anotherFunction();

const helloWord = () => {
  globalVar = "im global";
};

helloWord();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = (globalVar = "Im global");
};

anotherFunction();
console.log(globalVar);
