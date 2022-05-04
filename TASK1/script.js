var isOpened = false;
var funFacts = ["It can be used both in the front-end and back-end of web development.", "Serves everyone from beginners to intermediate and even advanced developers.", "Can run on all devices.", "It does not need an environment setup.", "Standardized and gets frequently updated with new versions."];
function myFunction() {
    var c = document.getElementById("close");
    if (!isOpened) {
        c.style.display = "block";
        isOpened = true;
    } else {
        c.style.display = "none";
        isOpened = false;
    }

}


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbardesktop").style.backgroundColor = "#424242";
        document.getElementById("navbar").style.backgroundColor = "#424242";
    } else {
        document.getElementById("navbardesktop").style.backgroundColor = "#3f3e3e";
        document.getElementById("navbar").style.backgroundColor = "#3f3e3e";
    }
}


function callFunctionsHere() {
    loadFunFact();
}


function loadFunFact() {
    var item = funFacts[Math.floor(Math.random() * funFacts.length)];
    document.getElementById("funfact").innerText = item;
}
