'use strict'

const url = "https://jsonplaceholder.typicode.com/todos";

function getData(url) {
  let result = fetch(url);
  const titles = [];

  result
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let item of data)
        if (item.title[0] === "a") {
          titles.push(item);
        }
    });

  console.log(titles);
}



async function getData(url) {
  let result = await fetch(url);
  let data = await result.json();
  const titles = [];

  for (let item of data)
    if (item.title[0] === "a") {
      titles.push(item);
    }
  console.log(titles);
}



const divA = document.querySelector(".user-a");
const divAB = document.querySelector(".user-ab");

async function getData(url) {
  let result = await fetch(url);
  let data = await result.json();
  divA.classList.add("active");
  divAB.classList.add("active");

  for (let item of data) {
    if (item.title[0] === "a") {
      let titleA = JSON.stringify(item) + "<br>";
      divA.innerHTML += titleA;
    }
    if (item.title[0] === "a" && item.title[1] === "b") {
      let titleAB = JSON.stringify(item) + "<br>";
      divAB.innerHTML += titleAB;
    }
  }
}

getData(url);



async function getData(url) {
  let result = await fetch(url);
  let data = await result.json();
  return data;
}

async function showA() {
  divA.innerHTML = "";
  divA.classList.add("active");
  divAB.classList.remove("active");

  const result = await getData(url);

  result
    .filter((data) => data.title[0] === "a")
    .forEach((data) => {
      divA.innerHTML += JSON.stringify(data) + "<br>";
    });
}

async function showAB() {
  divAB.innerHTML = "";
  divAB.classList.add("active");
  divA.classList.remove("active");

  const result = await getData(url);

  result
    .filter((data) => data.title[0] === "a" && data.title[1] === "b")
    .forEach((data) => {
      divAB.innerHTML += JSON.stringify(data) + "<br>";
    });
}

function showAll() {
  showA();
  showAB();
  divA.classList.add("active");
  divAB.classList.add("active");
}


let btnA = document.querySelector(".add-a");
btnA.addEventListener("click", showA);

let btnAB = document.querySelector(".add-ab");
btnAB.addEventListener("click", showAB);

let btnAll = document.querySelector(".add-all");
btnAll.addEventListener("click", showAll);
