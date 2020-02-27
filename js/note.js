const a = 5;
let b = "5";

const anArray = [1, "hasan", 2, "computer", 3];
anArray.push("JS");

let anotherArray = anArray.filter(elm => typeof elm === "string");

let numberArray = [1, 3, 5, 8, 11, 15];

let mappedarray = numberArray.map(el => el * el);

let findArray = numberArray.findIndex(el => el > 25)

// numberArray.forEach((el, ind) => {
//     console.log(el + ind);
// });

let pageSection = document.querySelectorAll(".sec");

//
// I need to know how many sections I have

let length = pageSection.length;

//

let parentUL = document.querySelector(".navbar")

// pageSection is a NodeList and NodeList has forEach method
let someArray = [];
pageSection.forEach((el, ind) => {
    let explanation = el.getAttribute("data-info");
    let listIt = document.createElement('li');

    //
    // Add id or class to a elements
    listIt.innerHTML = `<a id="sc${ind}" href="#sect${ind+1}">${explanation}</a>`
    //

    parentUL.appendChild(listIt);
})

let aFunction = () => {
    someArray = [];
    pageSection.forEach((el, ind) => {
        someArray.push(el.getBoundingClientRect().top)
    })
    console.log(someArray);
    let firstElement = someArray.findIndex(el => el > 0)

    //
    // Check which one to make active and which one passive
    if (firstElement !== -1) {
        // document.getElementById("sc" + firstElement).classList.add('highlighted');
        // // Because I do not know scroll direction, I clear both neighbours
        // // if I am at the end, no neighbout afterwards
        // if (firstElement < length - 1) {
        //     document.getElementById("sc" + (firstElement + 1)).classList.remove("highlighted");
        // }
        // //if I am in the beginning no neighbour before
        // if (firstElement > 0) {
        //     document.getElementById("sc" + (firstElement - 1)).classList.remove("highlighted");
        // }
        for (let j = 0; j < length; j++) {
            if (firstElement === j) {
                document.getElementById("sc" + j).classList.add('highlighted');
            } else {
                document.getElementById("sc" + j).classList.remove('highlighted');
            }
        }

    }
    //


}
document.addEventListener('scroll', aFunction);