import videos from "./_video.js";

// 1

const grid = document.getElementsByClassName("grid")[0];

const article = document.createElement("article");
article.className = "card";

const cardWrap = document.createElement("div");
cardWrap.className = "card-wrap";

const img = document.createElement("img");
img.src = `images/films/nyad.webp`;
img.className = "card-img";
img.width = 200;
img.height = 300;

const mark = document.createElement("span");
mark.className = "card-mark";

const time = document.createElement("span");
time.className = "card-time";
time.title = "хронометраж";
time.textContent;

const favoriteButton = document.createElement("button");
favoriteButton.className = "card-favorite added js-btn-add-to-favorite";
favoriteButton.title = "додати в обране";

const playButton = document.createElement("button");
playButton.className = "card-play js-btn-open-film-modal";
playButton.title = "подивитись трейлер";

cardWrap.appendChild(img);
cardWrap.appendChild(mark);
cardWrap.appendChild(time);
cardWrap.appendChild(favoriteButton);
cardWrap.appendChild(playButton);

const cardContent = document.createElement("div");
cardContent.className = "card-content";

const title = document.createElement("p");
title.className = "card-title";

const details = document.createElement("div");
details.className = "card-details";

const year = document.createElement("span");
year.className = "card-year";

const genresList = document.createElement("ul");
genresList.className = "card-genres";
// film.genres.forEach((genre) => {
//   const li = document.createElement("li");
//   li.textContent = genre;
//   genresList.appendChild(li);
// });

details.appendChild(year);
details.appendChild(genresList);
cardContent.appendChild(title);
cardContent.appendChild(details);
article.appendChild(cardWrap);
article.appendChild(cardContent);

const hOne = document.querySelector("h1");

function convertTime(timeo = "50") {
  let newTime = 2;
  newTime = `${Math.floor(+timeo / 60)} год. ${+timeo % 60} хв.`;
  return newTime;
}

function createGenres(list) {
  genresList.innerHTML = "";
  list.split(",").forEach((genre) => {
    const li = document.createElement("li");
    li.textContent = genre;
    genresList.appendChild(li);
  });
}

function showAllCards(videos) {
  grid.innerHTML = "";
  for (let i = 0; i < videos.length; i++) {
    article.setAttribute("data-film-id", videos[i].id);
    img.alt = videos[i].title;
    img.title = videos[i].title;
    title.textContent = videos[i].title;
    img.src = `images/films/${videos[i].image}`;
    mark.title = videos[i].mark;
    mark.textContent = videos[i].mark;
    time.textContent = convertTime(videos[i].time);
    year.textContent = videos[i].year;
    createGenres(videos[i].genres);
    grid.append(article.cloneNode(true));
  }
}

showAllCards(videos);

/* 2 */

// розблоковуємо пошук кнопку
const jsSearchInput = document.querySelector(".js-search-input");
const searchBtn = document.querySelector(".search-btn");

let searchValue = "";

function unblockBtn() {
  searchValue = jsSearchInput.value;
  searchValue.length > 2
    ? searchBtn.removeAttribute("disabled")
    : searchBtn.setAttribute("disabled", "disabled");
  return searchValue;
}

jsSearchInput.addEventListener("input", function () {
  unblockBtn();
  if (searchValue === "") {
    showAllCards(videos);
  }
});

// функція виводу карт з пошуку
// і розмітка для неї
const searchResult = document.createElement("div");
searchResult.className = "search-result";
const paragraph = document.createElement("p");
paragraph.textContent = "На жаль, за вашим запитом нічого не знайдено";
const button = document.createElement("button");
button.className = "btn-clear js-clear-search-results";
button.textContent = "Показати усі фільми";
searchResult.appendChild(paragraph);
searchResult.appendChild(button);

function showFilterCards(jsSearchInpTextCont) {
  grid.innerHTML = "";
  for (let i = 0; i < videos.length; i++) {
    let srch = "";
    srch = jsSearchInpTextCont.toLocaleUpperCase();
    if (videos[i].title.toLocaleUpperCase().includes(srch)) {
      article.setAttribute("data-film-id", videos[i].id);
      img.alt = videos[i].title;
      img.title = videos[i].title;
      title.textContent = videos[i].title;
      img.src = `images/films/${videos[i].image}`;
      mark.title = `${videos[i].mark}`;
      mark.textContent = videos[i].mark;
      time.textContent = convertTime(videos[i].time);
      year.textContent = videos[i].year;
      createGenres(videos[i].genres);
      grid.append(article.cloneNode(true));
    }
  }
  if (grid.children.length == 0) {
    grid.append(searchResult);
  }
  hOne.textContent = "";
  hOne.insertAdjacentHTML(
    "afterBegin",
    `Результати за запитом <span> ${jsSearchInpTextCont}</span>:`
  );
}
// показати відфільтровані картки
searchBtn.addEventListener("click", function () {
  showFilterCards(searchValue);
});

button.addEventListener("click", function () {
  showAllCards(videos);
  hOne.textContent = "Останні новинки";
});

if (searchValue === "") {
  showAllCards(videos);
}

/* 3 */
const counterSpan = document.querySelector(".js-favorite-counter");
let counter = JSON.parse(localStorage.getItem("arrStorage")).length || 0;
counterSpan.textContent = counter;
let arr = JSON.parse(localStorage.getItem("arrStorage")) || [];
let obj = {};
let arrStorag = JSON.parse(localStorage.getItem("arrStorage")) || [];
for (let i = 0; i < grid.children.length; i++) {
  if (arrStorag.length > 0) {
    for (let j = 0; j < arrStorag.length; j++) {
      if (+arrStorag[j].id == +grid.children[i].dataset.filmId) {
        grid.children[i].classList.add("is-favorite");
      }
    }
  }
}

grid.addEventListener("click", function (e) {
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
});

/* 4 */

const favoriteModal = document.createElement("div");
favoriteModal.className = "favorite-modal open";
const headModal = document.createElement("div");
headModal.classList.add("head");
favoriteModal.insertAdjacentElement("afterbegin", headModal);
const titleModal = document.createElement("div");
titleModal.classList.add("title");
titleModal.textContent = "Обране";
headModal.insertAdjacentElement("afterbegin", titleModal);
const buttonModal = document.createElement("button");
buttonModal.className = "btn-close js-close-modal";
buttonModal.setAttribute("type", "button");
buttonModal.setAttribute("title", "закрити");
titleModal.after(buttonModal);

const textModal = document.createElement("p");
textModal.classList.add("text");
textModal.textContent = "Список обраного порожній";

const ulModal = document.createElement("ul");

const buttonClear = document.createElement("button");
buttonClear.className = "btn-clear js-clear-modal";
buttonClear.setAttribute("type", "button");
buttonClear.setAttribute("title", "очистити список");
buttonClear.textContent = "Очистити обране";
ulModal.after(buttonClear);

const liModal = document.createElement("li");
const favoriteCard = document.createElement("div");
favoriteCard.classList.add("favorite-card");
favoriteCard.setAttribute("data-film-id", "підставити id"); // зміни мають бути
liModal.prepend(favoriteCard);
const favoriteImg = document.createElement("img");
favoriteImg.setAttribute(
  "src",
  "/images/films/підставити назву зображення з форматом"
); // зміни мають бути
favoriteImg.setAttribute("width", "50");
favoriteImg.setAttribute("height", "75");
favoriteImg.setAttribute("title", "підставити назву фільму"); //зміни мають бути
favoriteCard.prepend(favoriteImg);
const favoriteTitle = document.createElement("div");
favoriteTitle.className = "favorite-card-title";
favoriteTitle.textContent = " підставити назву фільму"; //зміни мають бути
favoriteImg.after(favoriteTitle);
const favoriteAction = document.createElement("div");
favoriteAction.classList.add("favorite-actions");
favoriteTitle.after(favoriteAction);
const buttonWatch = document.createElement("button");
buttonWatch.className = " btn-watch js-btn-open-film-modal";
buttonWatch.setAttribute("title", "переглянути трейлер");
favoriteAction.insertAdjacentElement("afterbegin", buttonWatch);
const buttonRemove = document.createElement("button");
buttonRemove.className = "btn-remove js-remove-from-favorite-btn";
buttonRemove.setAttribute("title", "видалити з обраного");
buttonWatch.after(buttonRemove);

// виводимо список з юлюблених фільмів поряд із лічильником
const favBtn = document.querySelector(".js-favorite-btn");
const navAction = document.querySelector(".nav-actions");

function showFavCards() {
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

favBtn.addEventListener("click", function () {
  showFavCards();
});

// закриваємо список з юлюблених фільмів поряд із лічильником
buttonModal.addEventListener("click", function () {
  favoriteModal.style.display = "none";
});

// запрограмовуємо кнопку очистити все
function cleanAllCards() {
  for (let i = 0; i < grid.children.length; i++) {
    grid.children[i].classList.remove("is-favorite");
  }
  arr = [];
  localStorage.setItem("arrStorage", JSON.stringify(arr));
  counter = 0;
  counterSpan.textContent = counter;
  return { arr, counter };
}

buttonClear.addEventListener("click", function (e) {
  e.stopPropagation();
  cleanAllCards();
  showFavCards();
});

/* 5 */

// функція по видаленю окремої картки з улюбленого
function deleteCard(e) {
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

ulModal.addEventListener("click", function (e) {
  deleteCard(e);
  showFavCards();
});

/* 5.1 */

let youModal = document.createElement("div");
youModal.className = "youtube-modal";
let youcontent = document.createElement("div");
youcontent.className = "content";
youModal.prepend(youcontent);
const youhead = document.createElement("head");
youhead.className = "head";
youcontent.prepend(youhead);
const youTitle = document.createElement("div");
youTitle.className = "title";
youTitle.textContent = "підставити назву фільму"; // назва фільму
youhead.prepend(youTitle);
const youButton = document.createElement("button");
youButton.className = "btn-close js-close-youtube-modal";
youButton.setAttribute("type", "button");
youButton.setAttribute("title", "закрити");
youhead.append(youButton);
const youBody = document.createElement("div");
youBody.className = "body";
youcontent.append(youBody);
const youType = document.createElement("div");
youType.className = "type";
youType.textContent = "підставити назву фільму"; // назва фільму
youBody.prepend(youType);
const youTime = document.createElement("div");
youTime.textContent = "підставити час фільму у форматі __ год. __ хв"; // час
youType.after(youTime);
const youIframe = document.createElement("iframe");
youIframe.setAttribute("width", "560");
youIframe.setAttribute("height", "315");
youIframe.setAttribute(
  "src",
  "https://www.youtube.com/embed/підставити трейлер фільму?si=SOj9kFsaxSjIIVEu" // підставити
);
youIframe.setAttribute("title", "YouTube video player");
youIframe.setAttribute("frameborder", "0");
youIframe.setAttribute(
  "allow",
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
);
youIframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
youIframe.setAttribute("allowfullscreen", "allowfullscreen");
youType.after(youIframe);

grid.addEventListener("click", function (e) {
  let trg = e.target;
  if (trg.classList.contains("js-btn-open-film-modal")) {
    youTitle.textContent =
      trg.parentElement.parentElement.children[1].children[0].innerText;
    youType.textContent =
      trg.parentElement.parentElement.children[1].children[0].innerText;
    youTime.textContent = trg.parentElement.children[2].innerText;
    let index = 0;
    index = trg.parentElement.parentElement.dataset.filmId - 1;
    youIframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${
        videos[index].trailer.split("=")[1]
      }?si=SOj9kFsaxSjIIVEu`
    );
    e.target.after(youModal);
  }
  if (trg.classList.contains("js-close-youtube-modal")) {
    trg.parentElement.parentElement.parentElement.parentElement.children[5].remove();
  }
});
