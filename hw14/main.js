"use strict";
const colorsArray = [
  "#090979",
  "#0a087a",
  "#0c087b",
  "#0e087d",
  "#10087e",
  "#12087f",
  "#140881",
  "#150882",
  "#170883",
  "#190885",
  "#1b0886",
  "#1d0887",
  "#1f0889",
  "#21088a",
  "#22088b",
  "#24088d",
  "#26088e",
  "#28088f",
  "#2a0891",
  "#2c0892",
  "#2e0893",
  "#300895",
  "#310896",
  "#330897",
  "#350899",
  "#37089a",
  "#39089b",
  "#3b089d",
  "#3d089e",
  "#3f089f",
  "#4108a1",
  "#4208a2",
  "#4408a3",
  "#4608a5",
  "#4808a6",
  "#4a08a7",
  "#4c08a9",
  "#4e08aa",
  "#5008ab",
  "#5208ad",
  "#5308ae",
  "#5508af",
  "#5708b1",
  "#5908b2",
  "#5b08b3",
  "#5d08b5",
  "#5f08b6",
  "#6108b7",
  "#6308b9",
  "#6408ba",
  "#6608bb",
  "#6808bd",
  "#6a08be",
  "#6c08bf",
  "#6e08c1",
  "#7008c2",
  "#7208c3",
  "#7408c5",
  "#7508c6",
  "#7708c7",
  "#7908c9",
  "#7b08ca",
  "#7d08cb",
  "#7f08cd",
  "#8108ce",
  "#8308cf",
  "#8508d1",
  "#8608d2",
  "#8808d3",
  "#8a08d5",
  "#8c08d6",
  "#8e08d7",
  "#9008d9",
  "#9208da",
  "#9408db",
  "#9608dd",
  "#9708de",
  "#9908df",
  "#9b08e1",
  "#9d08e2",
  "#9f08e3",
  "#a108e5",
  "#a308e6",
  "#a508e7",
  "#a708e9",
  "#a908ea",
  "#ab08eb",
  "#ac08ed",
  "#ae08ee",
  "#b008ef",
  "#b208f1",
  "#b408f2",
  "#b608f3",
  "#b808f5",
  "#ba08f6",
  "#bc08f7",
  "#be08f9",
  "#bf08fa",
  "#c108fb",
  "#c308fd",
  "#c508fe",
  "#c708ff",
];

const grid = document.createElement("div");
grid.classList.add("grid");
let wrapper = document.getElementsByClassName("wrapper")[0];
wrapper.prepend(grid);
const cell = document.createElement("div");
cell.classList.add("cell");
for (let i = 0; i <= 99; i++) {
  let clonCell = cell.cloneNode(true);
  clonCell.textContent = `${i}`;
  grid.append(clonCell);
}
grid.classList.add("start");

// 2 part

wrapper.insertAdjacentHTML(
  "afterbegin",
  `<div class="top">
  <button class="btn btn-start btn-blue" title="Перемішати"></button>
</div>`
);

const divClick = document.createElement("div");
divClick.className = "counter click-counter";
divClick.textContent = "0";

const divScore = document.createElement("div");
divScore.className = "counter score-counter";
divScore.textContent = "0";

const btnReplay = document.createElement("button");
btnReplay.className = "btn btn-replay btn-violet";

// 3 part

let allCell = document.querySelectorAll(".cell");

function sortedCell(obj) {
  let sortedObj = [...obj];
  sortedObj.sort(() => Math.random() - 0.5);

  grid.innerHTML = "";

  for (let item of sortedObj) {
    grid.append(item);
  }
}

// 4 part

const btnStart = document.querySelector(".btn-start");

function starGame() {
  const title = document.querySelector("title");
  title.textContent = "Гра почалась";
  sortedCell(allCell);
  grid.classList.remove("start");
  btnStart.classList.add("btn-disabled");
  const top = document.querySelector(".top");
  top.append(btnReplay);
  top.append(divClick);
  top.append(divScore);
}

// 5 part

wrapper.addEventListener("click", function (event) {
  event.stopPropagation();
  mathScore(event);
});

btnStart.addEventListener("click", function (event) {
  event.stopPropagation();
  starGame();
});

btnReplay.addEventListener("click", function (event) {
  event.stopPropagation();
  replayGame(event);
  sortedCell(allCell);
});

// 6 part

let click = 0;
let score = 0;

function mathScore(event) {
  let cell = event.target;
  cell.classList.contains("clicked") ? null : cell.classList.add("clicked");
  let celltext = cell.innerText;
  let index;
  for (let i = 0; i < allCell.length; i++) {
    if (allCell[i].textContent == celltext) {
      index = i;
    }
  }
  cell.style.backgroundColor = `${colorsArray[index]}`;
  ++click;
  divClick.textContent = click;
  score += +cell.textContent;
  divScore.textContent = score;
  cell.style.pointerEvents = "none";
  cell.style.cursor = "not-allowed";
  if (score == 1000) {
    grid.classList.add("win");
    const title = document.querySelector("title");
    title.textContent = "Виграш!!!";
  }
  if (score > 1000) {
    grid.classList.add("lost");
    title.textContent = "Невдача";
  }
}

// 7 part

function replayGame(event) {
  const title = document.querySelector("title");
  title.textContent = "Гра почалась";
  divClick.textContent = 0;
  divScore.textContent = 0;
  [...allCell].forEach((item) => {
    item.classList.remove("clicked");
    item.style.pointerEvents = "auto";
    item.style.backgroundColor = "rgba(255, 255, 255, 0.10)";
  });
}
