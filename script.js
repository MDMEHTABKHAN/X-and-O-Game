let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".rst-btn");
let newBtnGame = document.querySelector(".new-btn-game");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector(".message");

let turnOFO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
        if(turnOFO){
            box.innerText = "O";
            turnOFO = false;
        }else{
            box.innerText = "X";
            turnOFO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

let disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    message.innerText = `Congrats, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
let checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);

            }
        }
        
    }
}

let resetGame = () =>{
    turnOFO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

newBtnGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame)