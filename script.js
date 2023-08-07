//target all elements to save to constants
const CrabSection1 = document.querySelector("#CrabSection1");
const CrabSection2 = document.querySelector("#CrabSection2");
const CrabSection3 = document.querySelector("#CrabSection3");
const CrabSection4 = document.querySelector("#CrabSection4");
const CrabSection5 = document.querySelector("#CrabSection5");
var allCrabs = document.querySelectorAll(".crab");
const screenWidth = window.innerWidth;
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
    let onepage = document.querySelector("#crab" + pgno);
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

const hamBtn = document.querySelector("#hamburgermenu");
hamBtn.addEventListener("click", toggleMenus);
const menuItemsList = document.querySelector("nav ul");


function toggleMenus() {
    if (menuItemsList.style.display == "block")
        menuItemsList.style.display = "none";
    else menuItemsList.style.display = "block";
}

function updateMenuDisplay() { /* a function to ensure that the menu glitch does not occur*/
    if (screenWidth > 800 && menuItemsList.style.display == "none") {
        menuItemsList.style.display = "block";
    }

    else if (screenWidth <= 800 && menuItemsList.style.display == "block") {
        menuItemsList.style.display = "none";
    }
}

// add the event listener to update the list when display size changes
updateMenuDisplay(); /* triggers it once*/
window.addEventListener("resize", updateMenuDisplay);/* triggers it each time window is resized*/

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg"); //get the expanding by the  id
    var imgText = document.getElementById("imgtext"); //get the imgtextby the  id
    expandImg.src = imgs.src; //get the img for the expanded img via the img.src
    imgText.innerHTML = imgs.alt; //get the text for the expanded img via the img.alt
    expandImg.parentElement.style.display = "block";
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () { 
        var content = this.nextElementSibling; //get the next div class which is content
        if (content.style.display == "block") { // if it is being displayed already then remove
            content.style.display = "none";
        } else {
            content.style.display = "block"; // otherwise display the content
        }
    });
}

var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() { // a jump function to let the character jump when triggered
    if (character.classList != "animate") { //to check if the animate class is not on the character already so that cannot spam the jump button
        character.classList.add("animate"); //add the animate class to the character when jump is not active
    }
    setTimeout(function () { // have a timeout function to trigger after 500ms, same as the animate class
        character.classList.remove("animate"); // removes the animate class once animation is complete such that it does not keep jumping infinitely
    }, 500);
}

function restartgame() {
    // Remove the animation class from the character
    character.classList.remove("animate"); //remove the animation from character 

    // Reset the block position and animation such that reset can trigger before game end
    block.style.animation = "none";
    block.style.display = "none";

    setTimeout(function () {
        block.style.animation = "block 3s infinite"; // Apply the animation, same as the one in the css file
        block.style.display = "block"; // Make the block visible
        block.style.left = "100%"; // Reset the block's left position
    }, 100);
}


const controls = document.querySelector(".controls"); // Corrected selector
controls.addEventListener("click", jump);
// Added event listener for click

var checkdead = setInterval(function () { //have it check whether character has touch the enemy 
    var characterTop =
        parseInt(window.getComputedStyle(character).
            getPropertyValue("top")); // get the top value of the character

    var blockleft =
        parseInt(window.getComputedStyle(block).
            getPropertyValue("left"));// get the left value of the enemy

    if ((blockleft < 175 && blockleft > 75) && characterTop >= 270) { // checks whether the enemy is touching the character
        block.style.animation = "none"; //remove animation
        block.style.display = "none";//remove block
    }
})


const restart = document.querySelector(".restartgame");
restart.addEventListener("click", restartgame);
