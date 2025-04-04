import { favoriteModal } from "./main.js";
import { navAction } from "./main.js";
import { headModal } from "./main.js";
import { ulModal } from "./main.js";
import { textModal } from "./main.js";
import { favoriteCard } from "./main.js";
import { favoriteImg } from "./main.js";
import { favoriteTitle } from "./main.js";
import { liModal } from "./main.js";
import { buttonClear } from "./main.js";

import { grid } from "./main.js";

//
export const counterSpan = document.querySelector(".js-favorite-counter");
let counter = JSON.parse(localStorage.getItem("arrStorage")).length || 0;
counterSpan.textContent = counter;
export let arr = JSON.parse(localStorage.getItem("arrStorage")) || [];
let obj = {};
export let arrStorag = JSON.parse(localStorage.getItem("arrStorage")) || [];

export function createArrCards(e) {
  let fb = e.target;
  arr = [];
  if (fb.classList.contains("card-favorite")) {
    let qq = fb.parentElement.parentElement;
    qq.classList.toggle("is-favorite");
    if (qq.classList.contains("is-favorite")) {
      ++counter;
    } else {
      --counter;
    }
    counterSpan.textContent = counter;
  }
  let j = 0;
  for (let item of grid.children) {
    if (item.classList.contains("is-favorite")) {
      obj = {};
      obj.id = item.dataset.filmId;
      obj.title = item.children[1].children[0].innerHTML;
      obj.image = item.children[0].children[0].getAttribute("src");
      obj.counterObj = j++;
      arr.push(structuredClone(obj));
    }
  }
  localStorage.setItem("arrStorage", JSON.stringify(arr));
  return arr;
}

export function showFavCards() {
  // navAction.innerHTML = "";
  if (arr.length == 0) {
    favoriteModal.style.display = "block";
    navAction.append(favoriteModal);
    headModal.after(textModal);
    ulModal.innerHTML = "";
    textModal.style.display = "block";
    buttonClear.style.display = "none";
  }
  if (arr.length > 0) {
    favoriteModal.style.display = "block";
    navAction.append(favoriteModal);
    headModal.after(ulModal);
    ulModal.innerHTML = "";
    textModal.style.display = "none";
    for (let i = 0; i < arr.length; i++) {
      favoriteCard.setAttribute("data-film-id", `${arr[i].id}`);
      favoriteCard.setAttribute("counterObj", `${arr[i].counterObj}`);
      favoriteImg.setAttribute("src", `${arr[i].image}`);
      favoriteImg.setAttribute("title", `${arr[i].title}`);
      favoriteTitle.textContent = `${arr[i].title}`;
      ulModal.append(liModal.cloneNode(true));
    }
    buttonClear.style.display = "block";
    ulModal.after(buttonClear);
  }
  return arr;
}

export function cleanAllCards() {
  for (let i = 0; i < grid.children.length; i++) {
    grid.children[i].classList.remove("is-favorite");
  }
  arr = [];
  localStorage.setItem("arrStorage", JSON.stringify(arr));
  counter = 0;
  counterSpan.textContent = counter;
  return { arr, counter };
}

export function deleteCard(e) {
  let trg = e.target;
  if (trg.classList.contains("js-remove-from-favorite-btn")) {
    let nbr = 0;
    nbr = trg.parentElement.parentElement.dataset.filmId;
    for (let i = 0; i < arr.length; i++) {
      if (trg.parentElement.parentElement.dataset.filmId == arr[i].id) {
        arr.splice(i, 1);
        for (let i = 0; i < grid.children.length; i++) {
          if (grid.children[i].dataset.filmId == nbr) {
            grid.children[i].classList.remove("is-favorite");
          }
        }
      }
    }
  }
  --counter;
  counterSpan.textContent = counter;
  localStorage.setItem("arrStorage", JSON.stringify(arr));
  return { arr };
}
