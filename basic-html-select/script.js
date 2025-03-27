function hello() {
  console.log("hello world");
}

const hello2 = () => {
  console.log("hello world 2");
}

const button = document.getElementById("button");

const boxes = document.getElementsByClassName("box");

button.addEventListener("click", hello);

console.log("this is the boxes array: ", boxes);

// for (let i = 0; i < boxes.length; i++) {
//   const box = boxes[i];
//   box.addEventListener("click", hello2);
// }

const boxesArray = Array.from(boxes);

boxesArray.map((box) => {
  box.addEventListener("click", hello)
});

// let numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
