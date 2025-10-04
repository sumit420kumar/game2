let boxes = document.querySelectorAll(".btn");
let resetbtn = document.querySelector(".reset");
let newgamebtn = document.querySelector(".new-btn");
let winnercontainer = document.querySelector(".msg-container");
let msge = document.querySelector("#msg");
let container = document.querySelector(".container");

let turnO = true;
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetgame = () => {
    turnO = true;
    enableboxes();
    winnercontainer.classList.add("hide");
}
const newgame = () => {
    turnO = true;
    enableboxes();
    winnercontainer.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button clicked");
        if (turnO) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwin();
    });
});
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (Winner) => {
    msge.innerText = `Congratulation , Winner is ${Winner}`;
    winnercontainer.classList.remove("hide");
    container.classList.add("hide");
    disableboxes();
}
const checkwin = () => {
    for (let pattern of winpatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner!", pos1val);
                showwinner(pos1val);
            }
        }

    }
};
resetbtn.addEventListener("click", () => {
    console.log("reset")
});

resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", newgame);
