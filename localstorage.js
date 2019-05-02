var linkTag = document.getElementsByTagName('link');

document.getElementById("light").addEventListener("click",displayLight);
document.getElementById("dark").addEventListener("click",displayDark);

function displayLight(){
    localStorage.setItem("theme", "style.css");
    linkTag[0].href = localStorage.getItem("theme");
}

function displayDark(){
    localStorage.setItem("theme", "style2.css");
    linkTag[0].href = localStorage.getItem("theme");
}

if(localStorage.getItem("theme")){
linkTag[0].href = localStorage.getItem("theme");
};