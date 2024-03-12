const playBtn = document.querySelector(".play-btn");
const playerResultText = document.querySelector(".player-figure");
const botResultText = document.querySelector(".bot-figure");
const gameResult = document.querySelector(".game-result");

// камень (2) > ножницы (1) > бумага (0)

function playAGame() {
    const playerResult = Math.floor(Math.random() * 3);
    const botResult = Math.floor(Math.random() * 3);

    if (playerResult === botResult) {
        gameResult.innerText = "Ничья";
        gameResult.className = "game-result";
        gameResult.classList.add("gray");
    } else if (playerResult > botResult) {
        gameResult.innerText = "Победа!";
        gameResult.className = "game-result";
        gameResult.classList.add("green");
        confetti({
            gravity: 0.7,
            startVelocity: 40,
            angle: 100,
            spread: 100,
            drift: 1,
            colors: ["#fee715", "#fee715", "#fee715", "#101820"],
            particleCount: 200,
        });
    } else {
        gameResult.innerText = "Поражение";
        gameResult.className = "game-result";
        gameResult.classList.add("red");
    }

    switch (botResult) {
        case 0:
            botResultText.innerText = "бумага";
            break;
        case 1:
            botResultText.innerText = "ножницы";
            break;
        case 2:
            botResultText.innerText = "камень";
            break;
    }

    switch (playerResult) {
        case 0:
            playerResultText.innerText = "бумага";
            break;
        case 1:
            playerResultText.innerText = "ножницы";
            break;
        case 2:
            playerResultText.innerText = "камень";
            break;
    }
}

playBtn.onclick = playAGame;
