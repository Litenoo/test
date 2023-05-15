let menuBtn = document.querySelectorAll(".btn");
let openStatus = false;
for (i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", openList)
}
function openList() {
    if (openStatus == false) {
        openStatus = true;
        console.log("visible");
        document.querySelector("#openMenu").style.opacity = "1";
        document.querySelector("#openMenu").style.zIndex = "+1";
        for (i = 0; i < 4; i++) {
            menuBtn[i].style.borderRadius = "0px 0px 0px 0px";
        }
    } else {
        for (i = 0; i < 4; i++) {
            menuBtn[i].style.borderRadius = "0px 0px 8px 2px";
        }
        console.log("not visible")
        openStatus = false;
        document.querySelector("#openMenu").style.opacity = "0";
        document.querySelector("#openMenu").style.zIndex = "-1";
    }
}