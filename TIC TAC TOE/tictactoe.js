boxes = document.querySelectorAll(".box");
resetGame = document.querySelector("#reset");
message = document.querySelector("#msg");
messageClass = document.querySelector(".messageCls");
newGame = document.querySelector("#newgame");
const win_seq = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

let turnX = true;
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {
      box.style.color = "#ba181b";
      turnX = false;
      box.innerText = "X";
    } else {
      box.style.color = "#31572c";
      box.innerText = "O";
      turnX = true;
    }
    count += 1;
    box.disabled = true;
    checkWinner();
  });
});

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function enableBoxes() {
  messageClass.classList.add("hide");
  turnX = true;
  count = 0;
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}

function printMessage(pos1_value) {
  messageClass.classList.remove("hide");
  message.innerText = `Congratulations, Winner is ${pos1_value}`;
}

function tie() {
  messageClass.classList.remove("hide");
  message.innerText = `It's a tie!!`;
}

function checkWinner() {
  let f = 0;
  for (let pattern of win_seq) {
    let pos1_value = boxes[pattern[0]].innerText;
    let pos2_value = boxes[pattern[1]].innerText;
    let pos3_value = boxes[pattern[2]].innerText;
    if (pos1_value != "" && pos2_value != "" && pos3_value != "") {
      if (pos1_value === pos2_value && pos2_value === pos3_value) {
        f = 1;
        printMessage(pos1_value);
        disableBoxes();
      }
    }
  }
  if (count == 9 && f !== 1) {
    count = 0;
    tie();
    disableBoxes();
  }
}

resetGame.addEventListener("click", enableBoxes);
newGame.addEventListener("click", enableBoxes);



