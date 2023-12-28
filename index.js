var html = document.getElementsByTagName("html")[0];
var courseBorder = document.getElementsByClassName("new-message-forhtml");
var headerH1 = document.getElementById("learn-with-us");
var courseText = document.getElementById("courses");
var navbar = document.getElementById("navbar");
var navbarText = document.getElementsByClassName("navbarA");



var mode1 = document.getElementById("mode1");
var mode2 = document.getElementById("mode2");

mode1.style.display = "none"

function toggleModeLight(){
    // html.style.background = "blue"
    html.style.background = "rgb(170, 231, 255)"
    html.style.color = "black"
    mode2.style.display = "block"
    headerH1.style.background = "rgb(20, 97, 164)";
    courseText.style.background = "rgb(91, 174, 245)";
    navbar.style.background = "rgb(74, 182, 250)";
}

function toggleModeDark(){
    html.style.background = "black";
    html.style.color = "white";
    
    for (let index = 0; index < courseBorder.length; index++) {
        const element = courseBorder[index];
        element.style.border = "1px solid white";   
    }
    
    for (let index = 0; index < navbarText.length; index++) {
        const element = navbarText[index];
        element.style.color = "white"
        
    }
    
    headerH1.style.background = "black";
    navbar.style.background = "black";
    navbar.style.color = "white";
    courseText.style.background = "black";

    mode2.style.display = "none";
    mode1.style.display = "block";
}


mode1.addEventListener("click" , toggleModeLight)
mode2.addEventListener("click" , toggleModeDark)