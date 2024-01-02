let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/m6.png") {
        myImage.setAttribute("src", "images/2151820.png");
    } else {
        myImage.setAttribute("src", "images/m6.png");
    }
};

