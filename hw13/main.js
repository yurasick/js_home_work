/* --- 01 --- */

// document.head.insertAdjacentHTML("beforeEnd", '<link rel="stylesheet" href="./dark-theme.css">');

/* --- 02 --- */

// document.head.insertAdjacentHTML("beforeEnd", '<link rel="stylesheet" href="./themes.css">');

/* --- 03 --- */

function addCSS(nameFile) {
  let file = nameFile; // змінна для функції повідомлень
  document.head.insertAdjacentHTML("beforeEnd", `<link rel="stylesheet" href="./${nameFile}">`);
  const wrapper = document.querySelector(".wrapper");
  createMsg("додано на сторінку", file);
}

addCSS("dark-theme.css");
addCSS("themes.css");

/* --- 04 --- */

document.body.classList.remove("theme-gold");
document.body.classList.add("theme-pink");

document.body.classList.remove("theme-pink");
document.body.classList.add("theme-dark");

function cheangeClassBody(nameClass) {
  let nameLastClass = document.body.className.split(" ").at(1);
  document.body.classList.remove(`${nameLastClass}`);
  document.body.classList.add(`${nameClass}`);
}

/* --- 05 --- */

// const js = document.querySelector(`[src="./main.js"]`);
// const checkers = document.createElement("script");
// checkers.setAttribute("src", "./checkers.js");
// js.before(checkers);

// addCSS("checkers");
cheangeClassBody("theme-pink");

// const newscripts = document.createElement("script");
// newscripts.setAttribute("src", "./new-scripts.js");
// js.after(newscripts);

function createScript(nameFile, position) {
  let file = nameFile; // змінна для функції повідомлень
  const js = document.querySelector(`[src="./main.js"]`);
  const wrapper = document.querySelector(".wrapper");
  const newJs = document.createElement("script");
  if (position == "перед") {
    newJs.setAttribute("src", `./${nameFile}`);
    js.before(newJs);
    createMsg("додано на сторінку", file);
    if (nameFile === "checkers.js") {
      addCSS("checkers.css");
    }
  }

  if (position == "після") {
    newJs.setAttribute("src", `./${nameFile}`);
    js.after(newJs);
    createMsg("додано на сторінку", file);
  }
}

createScript("checkers.js", "перед");
// createScript("new-scripts", "після");
addCSS("stylers.css");

/* --- 06 ---
  Задача 06 виконується у файлі new-scripts.js 
*/

/* --- 07 --- */

createScript("stylers.js", "перед");
createScript("new-scripts.js", "після");

// функція для повідомлень
function createMsg(msg, file) {
  const wrapper = document.querySelector(".wrapper");
  wrapper.insertAdjacentHTML("afterBegin", `<div class="msg">  ${file} ${msg} </div>`);
}

/* --- 08 ---
  Задача 08 виконується у файлі new-scripts.js 
*/

/* --- 09 ---
  Задача 09 виконується у файлі new-scripts.js 
*/

/* --- 10 ---
  Задача 10 виконується у файлі new-scripts.js 
*/
