const sideBar = document.getElementById("sideBar");
const openButton = document.getElementById("openButton");
const closeBar = document.getElementById("close");
var sideBarState = false;

function sideBarFunction(){
    if(sideBarState == false){
        sideBar.style.right = "0";
        sideBarState = true;
    }else if(sideBarState == true){
        sideBar.style.right = "-220px";
        sideBarState = false;
    }
}

openButton.onclick = () => {
    sideBarFunction();
}

closeBar.onclick = () => {
    sideBarFunction();
}

// document.onclick = function(e){
//     if(e.target.id != "sideBar" && e.target.id != "openButton"){
//         sideBar.style.right = "-220px";
//         sideBarState = false;
//     }
// }