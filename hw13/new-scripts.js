/* --- 06 --- */
const chekPink = document.querySelector("button.theme-pink");
chekPink.classList.add("active");
cheangeClassBody("theme-gold");
chekPink.classList.remove("active");

const chekGold = document.querySelector("button.theme-gold");
chekGold.classList.add("active");
cheangeClassBody("theme-dark");
chekGold.classList.remove("active");

const chekDark = document.querySelector("button.theme-dark");
chekDark.classList.add("active");

// функція яка робить активну кнопку залежно від теми на body

function createActiveTheme() {
  const chekPink = document.querySelector("button.theme-pink");
  const chekGold = document.querySelector("button.theme-gold");
  const chekDark = document.querySelector("button.theme-dark");
  let nameLastClass = document.body.className.split(" ").at(1);
  if (nameLastClass === "theme-pink") {
    chekGold.classList.remove("active");
    chekDark.classList.remove("active");
    chekPink.classList.add("active");
  }
  if ("theme-gold" === nameLastClass) {
    chekPink.classList.remove("active");
    chekDark.classList.remove("active");
    chekGold.classList.add("active");
  }
  if (nameLastClass === "theme-dark") {
    chekPink.classList.remove("active");
    chekGold.classList.remove("active");
    chekDark.classList.add("active");
  }
}

cheangeClassBody("theme-pink");
createActiveTheme();

cheangeClassBody("theme-gold");
createActiveTheme();

cheangeClassBody("theme-pink");
createActiveTheme();

cheangeClassBody("theme-gold");
createActiveTheme();

cheangeClassBody("theme-dark");
createActiveTheme();

cheangeClassBody("theme-gold");
createActiveTheme();

/* --- 08 --- */

document.body.classList.add("styler-80");

function cheangeClassBodyBg(nameClass) {
  let nameLastClass = document.body.className.split(" ").at(2);
  document.body.classList.remove(`${nameLastClass}`);
  document.body.classList.add(`${nameClass}`);
}

cheangeClassBodyBg("styler-00");

/* --- 09 --- */

function changeAllClassBody(nameClassFirst, nameClassSecond) {
  let nameClass = document.body.className.split(" ").at(1);
  document.body.classList.replace(`${nameClass}`, nameClassFirst);
  let nameLastClass = document.body.className.split(" ").at(2);
  document.body.classList.replace(`${nameLastClass}`, nameClassSecond);
}

changeAllClassBody("theme-pink", "styler-90");
createActiveTheme();

/* --- 10 --- */
// функція яка робить активну фотографію на фоні залежно від теми на body
function createActiveFonSite() {
  const styler80 = document.querySelector("button.styler-80");
  const styler90 = document.querySelector("button.styler-90");
  const styler00 = document.querySelector("button.styler-00");
  let nameLastClass = document.body.className.split(" ").at(2);
  if (nameLastClass === "styler-80") {
    styler90.classList.remove("active");
    styler00.classList.remove("active");
    styler80.classList.add("active");
  }
  if ("styler-90" === nameLastClass) {
    styler80.classList.remove("active");
    styler00.classList.remove("active");
    styler90.classList.add("active");
  }
  if (nameLastClass === "styler-00") {
    styler80.classList.remove("active");
    styler90.classList.remove("active");
    styler00.classList.add("active");
  }
}

// одна функція для  всіх стилів і кнопок

function allFunction(nameClass, nameStyler) {
  let a = nameClass;
  let b = nameStyler;
  changeAllClassBody(a, b);
  createActiveTheme();
  createActiveFonSite();
}

allFunction("theme-dark", "styler-90");

changeAllClassBody("theme-dark", "styler-00");

allFunction("theme-dark", "styler-00");

console.log(document.body.className);
