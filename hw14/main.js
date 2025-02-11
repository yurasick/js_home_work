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

let arrResult = [];

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
divClick.addEventListener("click", function () {
  localStorageData();
});

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
  if (event.target.classList.contains("cell")) {
    mathScore(event);
    mathResult();
  }
});

btnStart.addEventListener("click", function (event) {
  event.stopPropagation();
  starGame();
  showBtnResult();
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
  ++divClick.textContent;
  score += +cell.textContent;
  divScore.textContent = score;
  cell.style.pointerEvents = "none";
  divClick.textContent === "0" ? (score = 0) : null;
  divClick.textContent === "0" ? (divScore.textContent = 0) : null;
  if (score == 1000) {
    grid.classList.add("win");
    const title = document.querySelector("title");
    title.textContent = "Виграш!!!";
  }
  if (score > 1000) {
    grid.classList.add("lost");
    const title = document.querySelector("title");
    title.textContent = "Невдача";
  }
}

// 7 part

function replayGame(event) {
  const title = document.querySelector("title");
  title.textContent = "Гра почалась";
  divClick.textContent = "0";
  divScore.textContent = "0";
  [...allCell].forEach((item) => {
    item.classList.remove("clicked");
    item.style.pointerEvents = "auto";
    item.style.backgroundColor = "rgba(255, 255, 255, 0.10)";
  });
  grid.classList.contains("win") ? grid.classList.remove("win") : null;
  grid.classList.contains("lost") ? grid.classList.remove("lost") : null;
  score = 0;
  return score;
}

// 1 функція отримання результатів
function mathResult() {
  let obj = {};
  if (grid.classList.contains("win") || grid.classList.contains("lost")) {
    obj["clicks"] = divClick.textContent;
    obj["score"] = divScore.textContent;
    arrResult.push(obj);
  }
  return arrResult;
}

// 3 створюємо кнопку з результатами
const divTop = document.querySelector(".top");
const btnResult = document.createElement("div");
btnResult.className = "btn btn-result btn-purple";

function showBtnResult() {
  btnReplay.after(btnResult);
}

const elem = document.createElement("div");
elem.classList.add("results");
const resultHead = document.createElement("div");
resultHead.classList.add("results-head");
elem.append(resultHead);
const divrs = document.createElement("div");
divrs.textContent = "Результати";
resultHead.prepend(divrs);
const btnClose = document.createElement("button");
btnClose.className = "btn btn-close btn-transparent";
resultHead.append(btnClose);
const resultsText = document.createElement("div");
resultsText.textContent = "Немає результатів";
elem.append(resultsText);
const ulres = document.createElement("ul");
ulres.classList.add("results-list");
elem.append(ulres);
const resultList = document.createElement("button");
resultList.className = "results-clear btn-disabled";
resultList.textContent = "Очистити результати";
elem.append(resultList);

function createRes() {
  wrapper.prepend(elem);
  if (arrResult.length > 0) {
    resultsText.remove();
  }
}

btnResult.addEventListener("click", function () {
  createRes();
  showListResult(arrResult);
  saveToLocalStorage(arrResult);
});

btnClose.addEventListener("click", function () {
  elem.remove();
});

const resultItem = document.createElement("li");
resultItem.className = "results-item";

function showListResult(arrResult, arr = "") {
  arrResult.length === 0 ? ((arrResult = null), (arrResult = arr)) : null;
  if (grid.classList.contains("win") || grid.classList.contains("lost")) {
    ulres.innerHTML = "";
    for (let i = 0; i < arrResult.length; i++) {
      let ternOperator = "";
      ternOperator = `${arrResult[i]["score"]}` > 1000 ? "Невдача" : "Виграш";
      resultItem.innerHTML = `<span>Кліків: ${arrResult[i]["clicks"]}</span>
      <span>Балів: ${arrResult[i]["score"]}</span>
      <span>${ternOperator}</span>`;
      ulres.prepend(resultItem.cloneNode(true));
    }
    resultList.classList.remove("btn-disabled");
  }
}

// 4
resultList.addEventListener("click", function () {
  clearAllResults(arrResult);
});

function clearAllResults(arrResult) {
  arrResult.length = 0;
  ulres.innerHTML = "";
  resultList.classList.add("btn-disabled");
  resultHead.after(resultsText);
}

// 5 збереження інформації в localStorage

function saveToLocalStorage(arrResult) {
  if (
    resultList.classList.contains("btn-disabled") ||
    grid.classList.contains("win") ||
    grid.classList.contains("lost")
  ) {
    localStorage.setItem("arr", JSON.stringify(arrResult));
    console.log(JSON.parse(localStorage.getItem("arr")));
  }
}

// функція повернення результатів після перезагрузки сторінки

function localStorageData() {
  let arr = JSON.parse(localStorage.getItem("arr"));
  return arr;
}

// єдине тільки я не знаю к зробити в 5 пункті 4 підпункт
