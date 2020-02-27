let a;
a = 6;

{
    let a = 7;

}

console.log(a);

const v = 7;

const anArray = [1, "hasan", 30, "book", 15];
anArray.push("computer");
//console.log(anArray)

let aName = "Joe";
let aNumber = 55;
let aString = "55";

// console.log(aNumber + aString);

// if (aNumber === aString) {
//     console.log("Similar")
// } else {
//     console.log("NOT similar")
// }

let aNewString = `His name is ${aName}
He is ${aNumber-5} year old`;
// console.log(aNewString)
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 7));

const sum = (a, b) => a + b;
// console.log(sum(5, 7));

let aStringArray = anArray.filter(el => typeof el === "string")
console.log(aStringArray)
const aNumberArray = [1, 5, 10, 13, 18, 29, 30];
let aDifArray = aNumberArray.filter(el => el > 15);
console.log(aDifArray)
let aMapArray = aNumberArray.map(el => el * 2);
console.log(aMapArray)
let aDifNum = aNumberArray.find(el => el > 15);
console.log(aDifNum)
let aDifInd = aNumberArray.findIndex(el => el > 15);
console.log(aDifInd)
aNumberArray.forEach((element, ind) => {
    console.log(element * ind)
})

// let section4 = document.getElementById("sect4");
// let section4 = document.querySelector("#sect4");
// let section4 = document.querySelector(".sec4");
// let allClassesWithSec = document.querySelectorAll(".sec");
let pageSections = document.querySelectorAll("section");
console.log(pageSections)
let parentUL = document.querySelector(".navbar");
let posArray = [];

pageSections.forEach((el, ind) => {
    let secInfo = el.getAttribute("data-info");
    console.log(secInfo);
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#sect${ind+1}" id="s${ind+1}">${secInfo}</a>`
    parentUL.appendChild(listItem)
    console.log(el.getBoundingClientRect().top)
})

let upperHalf = window.innerHeight / 2;

parentUL.addEventListener("click", (evt) => {
    evt.preventDefault();
    //console.log(evt.target)
    let elmId = evt.target.getAttribute("href");
    //console.log(elmId)
    document.querySelector(elmId).scrollIntoView({
        behavior: "smooth"
    })
})

document.addEventListener("scroll", () => {
    posArray = [];
    pageSections.forEach((el, ind) => {
        let pos = el.getBoundingClientRect().top
        posArray.push(pos);
    })
    //console.log(posArray);
    let posValue = posArray.find(el => el > 0);
    let posIndex = posArray.findIndex(el => el > 0);
    console.log(posValue, posIndex)

    for (let j = 0; j < pageSections.length; j++) {
        if (j === posIndex && posValue < upperHalf) {
            document.getElementById(`s${j+1}`).classList.add("highlighted");
            document.getElementById(`sect${j+1}`).classList.add("active-class");
        } else {
            document.getElementById(`s${j+1}`).classList.remove("highlighted");
            document.getElementById(`sect${j+1}`).classList.remove("active-class");
        }
    }

})