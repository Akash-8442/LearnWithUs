
// Code for Dark Mode in HomePage!

var html = document.getElementsByTagName("html")[0];
var courseBorder = document.getElementsByClassName("new-message-forhtml");
var headerH1 = document.getElementById("learn-with-us");
var courseText = document.getElementById("courses");
var navbar = document.getElementById("navbar");
var navbarText = document.getElementsByClassName("navbarA");
var mode1 = document.getElementById("mode1");
var mode2 = document.getElementById("mode2");
var learnButton = document.getElementsByClassName("buttons");
var team = document.getElementById("team");
var copyright = document.getElementById("copyright");


mode1.style.display = "none"

// Changing as the border was white in color previously
copyright.style.border = '1.5px solid black';
// team.parentElement.style.border = '2px solid white';

function toggleModeLight(){
    // html.style.background = "blue"
    html.style.background = "rgb(170, 231, 255)"
    html.style.color = "black"
    mode2.style.display = "block"
    headerH1.style.background = "rgb(20, 97, 164)";
    courseText.style.background = "rgb(91, 174, 245)";
    navbar.style.background = "rgb(74, 182, 250)";

    for (let index = 0; index < navbarText.length; index++) {
        const element = navbarText[index];
        element.style.color = "black"  
    }

    for (let index = 0; index < courseBorder.length; index++) {
        const element = courseBorder[index];
        element.style.border = "1px solid black";   
    }

    for (let index = 0; index < learnButton.length; index++) {
        const element = learnButton[index];
        // element.childNodes.color = 'rgb(74, 182, 250)';
        // element.border = '1px solid white'
        for (let i = 0; i < element.children.length; i++) {
            const el = element.children[i].children[0];
            el.style.color = 'black';
            el.style.border = '1px solid black'
        }
        
    }


    courseText.style.color = "white";
    headerH1.style.color = "white";
    headerH1.style.borderLeft = "0.6rem solid white";
    headerH1.style.borderRight = "0.6rem solid white";
    headerH1.style.borderBottom = "0.6rem solid white";
    team.style.color = 'black';
    team.parentElement.style.border = "1.5px solid black";
    copyright.style.border = '1.5px solid black';
    
}


function toggleModeDark(){
    html.style.background = "rgb(22, 33, 62)";
    html.style.color = "rgb(74, 182, 250)";
    
    for (let index = 0; index < courseBorder.length; index++) {
        const element = courseBorder[index];
        element.style.border = "1px solid rgb(74, 182, 250)";  
    }
    
    for (let index = 0; index < navbarText.length; index++) {
        const element = navbarText[index];
        element.style.color = "rgb(74, 182, 250)"  
    }

    for (let index = 0; index < learnButton.length; index++) {
        const element = learnButton[index];
        // element.childNodes.color = 'rgb(74, 182, 250)';
        // element.border = '1px solid white'
        for (let i = 0; i < element.children.length; i++) {
            const el = element.children[i].children[0];
            el.style.color = 'rgb(74, 182, 250)';
            el.style.border = '2px solid rgb(74, 182, 250)'
        }
        
    }
    // You forgot to change it back when user return to light mode
    // Do that and then only remove this comment !
    
    headerH1.style.background = "rgb(22, 33, 62)";
    headerH1.style.color = "rgb(74, 182, 250)";
    headerH1.style.borderLeft = "0.6rem solid rgb(74, 182, 250)";
    headerH1.style.borderRight = "0.6rem solid rgb(74, 182, 250)";
    headerH1.style.borderBottom = "0.6rem solid rgb(74, 182, 250)";
    navbar.style.background = "rgb(22, 33, 62)";
    navbar.style.color = "rgb(74, 182, 250)";
    courseText.style.background = "rgb(22, 33, 62)";
    courseText.style.color = "rgb(74, 182, 250)";
    team.style.color = 'rgb(74, 182, 250)';
    team.parentElement.style.border = '3px solid rgb(74, 182, 250)';
    
    copyright.style.border = '2px solid rgb(74, 182, 250)';

    mode2.style.display = "none";
    mode1.style.display = "block";
}

mode1.addEventListener("click" , toggleModeLight)
mode2.addEventListener("click" , toggleModeDark)