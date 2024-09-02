let rectangle = document.querySelectorAll(".board-rectangle");
let msg = document.querySelector(".message");
let resetBtn = document.querySelector(".reset");
let winningMessage = document.querySelector(".winner-text");
let themeChanger = document.querySelector(".theme-changer");

let arr = []
let options = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
  


themeChanger.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains('dark') ? themeChanger.textContent = '🌞' : themeChanger.textContent = '🌚';
});


rectangle.forEach((rectangle, index) => {
    rectangle.addEventListener("click", (e) => {
        if(e.target.textContent === '') {
            if(arr[arr.length - 1] == 'X') {
                e.target.textContent = 'O'
                arr.push('O');
                options[index] = 'O';
                msg.textContent = 'X turn'
            }else {
                e.target.textContent = 'X'
                arr.push('X');
                options[index] = 'X';
                msg.textContent = 'O turn'
            };
        }
        checkWin()
    });
});


resetBtn.addEventListener("click", () => {
    arr = [];
    rectangle.forEach((rectangle) => {
        rectangle.textContent = '';
    });
    msg.textContent = 'X turn'
});


const checkWin = () => {
    for (const combination of winningCombinations) {
        if (options[combination[0]] === options[combination[1]] && options[combination[1]] === options[combination[2]] && options[combination[0]] !== '') {
          winningMessage.style.display = 'flex';
          winningMessage.textContent = `${options[combination[0]]} won`;
          break;
        }
    }
}
