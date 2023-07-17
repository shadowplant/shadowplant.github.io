//target all elements to save to constants
const CrabSection1 = document.querySelector("#Crab-Section-1");
const CrabSection2 = document.querySelector("#Crab-Section-2");
const CrabSection3 = document.querySelector("#Crab-Section-3");
const CrabSection4 = document.querySelector("#Crab-Section-4");
const CrabSection5 = document.querySelector("#Crab-Section-5");
const CrabSection6 = document.querySelector("#Crab-Section-6");
const CrabSection7 = document.querySelector("#Crab-Section-7");
var allCrabs = document.querySelectorAll(".Crab");
//select all subtopic pages
console.log(allCrabs);
hideall();
function hideall() { //function to hide all pages
    for (let onepage of allCrabs) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#Crab" + pgno);
    //show the page
    onepage.style.display = "block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
CrabSection1.addEventListener("click", function () {
    show(1);
});
CrabSection2.addEventListener("click", function () {
    show(2);
});
CrabSection3.addEventListener("click", function () {
    show(3);
});
CrabSection4.addEventListener("click", function () {
    show(4);
});
CrabSection5.addEventListener("click", function () {
    show(5);
});
CrabSection6.addEventListener("click", function () {
    show(6);
});
CrabSection7.addEventListener("click", function () {
    show(7);
});

const hamBtn = document.querySelector("#hamburger-menu");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");

function toggleMenus() {
    if (menuItemsList.style.display == "block")
        menuItemsList.style.display = "none";
    else menuItemsList.style.display = "block";
}
