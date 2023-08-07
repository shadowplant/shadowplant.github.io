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

function updateMenuDisplay() {

    if (screenWidth > 800 && menuItemsList.style.display == "none") {
        menuItemsList.style.display = "block";
    }

    else if (screenWidth <= 800 && menuItemsList.style.display == "block") {
        menuItemsList.style.display = "none";
    }
}

// add the event listener to update the list when display size
updateMenuDisplay();
window.addEventListener("resize", updateMenuDisplay);

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display == "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function () {
        character.classList.remove("animate");
    }, 500);
}

function restartgame() {
    // Remove the animation class from the character
    character.classList.remove("animate");
    
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

var checkdead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));

    var blockleft = 
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));

    if((blockleft<175 && blockleft>75) && characterTop >= 270)
    {
        block.style.animation = "none";
        block.style.display = "none";

    }
})


const restart= document.querySelector(".restartgame"); // Corrected selector
restart.addEventListener("click", restartgame); 
// Added event listener for click
