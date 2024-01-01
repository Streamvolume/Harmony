let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");
let IDU = document.getElementById("IDU")
let P = document.getElementById("P")

function set() {
    if (Object.keys(myName).length === 0) {
        a = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;
        anon = ("Anonymous" + a)
        anonPass = Math.floor(Math.random() * (999999 - 99999 + 1)) + 99999;
        anonUid = anon + anonPass
        localStorage.setItem("uid", anonUid);
        localStorage.setItem("name", anon);
        myHeading.textContent = "Frienship is magic, " + anon + "!"
        prompt("Password generated: " + anonPass + " Please take notes")
    } else {
        if (Object.keys(myPass).length !== 0) {
            localStorage.setItem("uid", myUid);
            localStorage.setItem("name", myName);
            myHeading.textContent = "Frienship is magic, " + myName + "!";
            prompt("Done")
        } else {
            prompt("Password is needed")
        }
    }
}



function verify() {
    if (myUid == savuid) {
        myHeading.textContent = "Frienship is magic, " + myName + "!";
        prompt("Logged in")
    } else {
        if (Object.keys(myPass).length == 0) {
            prompt("Please enter password!")
        } else {
            prompt("Wrong ID or Password")
        }

    }
}

myButton.onclick = function () {
    myName = IDU.value;
    myPass = P.value;
    myUid = myName + myPass
    savID = localStorage.getItem("name")
    savuid = localStorage.getItem("uid")
    if (myName != savID) {
        UC = prompt("Wish to register with this ID? Enter capital Y to continue")
        if (UC == "Y") {
            set();
        } else {
            prompt("Canceling...")
        }
    } else {
        verify();
    }
}