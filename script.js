const grid = document.querySelectorAll(".grid-box");
const player1 = document.querySelector(".p-one");
const player2 = document.querySelector(".p-two");
const circleChoice = document.querySelector(".circleBtn");
const crossChoice = document.querySelector(".crossBtn");
const signChoice = document.querySelectorAll(".signChoice");
signChoice.forEach((btn) => {
  btn.addEventListener("click", function handleClick(e) {
    if (e.target.classList.contains("circleBtn")) {
      circleChoice.classList.add("choice-border");
      circleChoice.style.cursor = "context-menu";
      crossChoice.style.cursor = "context-menu";
    } else if (e.target.classList.contains("crossBtn")) {
      crossChoice.classList.add("choice-border");
      crossChoice.style.cursor = "context-menu";
      circleChoice.style.cursor = "context-menu";
    }
    btn.removeEventListener("click", handleClick);
  });
});

grid.forEach((cell) => {
  cell.addEventListener("click", function handleClick(e) {
    if (crossChoice.classList.contains("choice-border")) {
      console.log(crossChoice.classList);
      e.target.classList.add("cross");
    } else if (circleChoice.classList.contains("choice-border")) {
      e.target.classList.add("circle");
    }
  });
});

let num;
const random = (min, max) => {
  num = Math.trunc(Math.random() * (max - min) + min);
};
random(1, 10);


// let counter = 0;
// grid.forEach((btn) => {
//   btn.addEventListener("click", function handleClick(e) {
//     if (counter < 9) counter++;
//     const sign = e.currentTarget;
//     // console.log(btn.dataset.value);
//     if (
//       counter % 2 === 0 &&
//       !sign.classList.contains("circle") &&
//       !sign.classList.contains("cross")
//     ) {
//       sign.classList.add("circle");
//     } else if (
//       counter % 2 === 1 &&
//       !sign.classList.contains("circle") &&
//       !sign.classList.contains("cross")
//     ) {
//       sign.classList.add("cross");
//     }
//     player1.classList.toggle("active-player");
//     // random(1, 10);
//     // console.log(num);
//     // console.log(sign.dataset.value);
//     // if (Number(sign.dataset.value) === num) {
//     //   sign.classList.add("circle");
//     // }
//   });
// });

// setTimeout(function () {
//   console.log(1);
// }, 1000);
