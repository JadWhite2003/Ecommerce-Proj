// //Make the DIV element draggagle:
// dragElement(document.getElementById("clockdiv"));

// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     if (document.getElementById(elmnt.id + "header")) {
//         /* if present, the header is where you move the DIV from:*/
//         document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//     } else {
//         /* otherwise, move the DIV from anywhere inside the DIV:*/
//         elmnt.onmousedown = dragMouseDown;
//     }

//     function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//     }

//     function closeDragElement() {
//         /* stop moving when mouse button is released:*/
//         document.onmouseup = null;
//         document.onmousemove = null;
//     }
// }

// var currentSec = getSecondsToday();

// var seconds = (currentSec / 60) % 1;
// var minutes = (currentSec / 3600) % 1;
// var hours = (currentSec / 43200) % 1;

// setTime(60 * seconds, "second");
// setTime(3600 * minutes, "minute");
// setTime(43200 * hours, "hour");

// function setTime(left, hand) {
//   $(".clock__" + hand).css("animation-delay", "" + left * -1 + "s");
// }

// function getSecondsToday() {
//   let now = new Date();

//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; 
//   return Math.round(diff / 1000);
// }


const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if(bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener("click", ()=>{
        nav.classList.remove('active')
    })
}
