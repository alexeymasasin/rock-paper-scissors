"use strict";

const playBtn = document.querySelector(".play-btn");
const playerResultText = document.querySelector(".player-figure");
const botResultText = document.querySelector(".bot-figure");
const gameResult = document.querySelector(".game-result");
const playerScoreText = document.querySelector(".player-score");
const botScoreText = document.querySelector(".bot-score");
const resetScoresBtn = document.querySelector(".reset-scores-btn");
const gameoverScreen = document.querySelector(".gameover-window");
const gameoverResText = document.querySelector(".gameover-res-text");
const gameoverScores = document.querySelector(".end-scores");
const tryAgainBtn = document.querySelector(".try-again-btn");

let playerScore = 0;
let botScore = 0;

botScoreText.innerText = botScore;
playerScoreText.innerText = playerScore;

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
        playerScore++;
        playerScoreText.innerText = playerScore;
        if (botScore > playerScore + 2) {
            loose;
        } else if (playerScore > botScore + 2) {
            win();
            confetti({
                gravity: 0.7,
                startVelocity: 40,
                angle: 100,
                spread: 100,
                drift: 1,
                colors: ["#101820"],
                particleCount: 150,
                zIndex: 1000,
            });
        }
    } else {
        gameResult.innerText = "Поражение";
        gameResult.className = "game-result";
        gameResult.classList.add("red");
        botScore++;
        botScoreText.innerText = botScore;
        if (botScore > playerScore + 2) {
            loose();
        }
        // else if (playerScore > botScore + 2) {
        //     win();
        // }
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

function resetScores() {
    botScore = 0;
    playerScore = 0;
    botScoreText.innerText = botScore;
    playerScoreText.innerText = playerScore;
}

function loose() {
    gameoverResText.innerText = "проиграли";
    gameoverScores.innerText = `${botScoreText.innerText} - ${playerScoreText.innerText} в пользу противника`;
    gameoverScreen.classList.remove("hidden");
}

function win() {
    gameoverResText.innerText = "победили";
    gameoverScores.innerText = `${playerScoreText.innerText} - ${botScoreText.innerText} в вашу пользу`;
    gameoverScreen.classList.remove("hidden");
}

function reload() {
    window.location.reload();
}

playBtn.onclick = playAGame;
resetScoresBtn.onclick = resetScores;
tryAgainBtn.onclick = reload;
