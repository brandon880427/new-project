// modal box

// Get the modal
var modal = document.getElementById("modalout");
// console.log(modal);
// Get the button that opens the modal
var btnmodalbox = document.getElementById("mymodalboxBtn");
// console.log(btnmodalbox);
var span = document.getElementsByClassName("close")[0];
// console.log(span);
// When the user clicks the button, open the modal 

btnmodalbox.onclick = function () {
    modal.style.display = "block";
    // console.log("ttt")
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//  按鈕展開
// document.addEventListener("DOMContentLoaded", function () {
//     let btn1 = document.querySelector("button.dotc.one");
//     btn1.addEventListener("click", function () {
//         if (document.querySelector("div.text.one").style.display === "none") {
//             document.querySelector("div.text.one").style.display = "block";
//         }
//         else {
//             document.querySelector("div.text.one").style.display = "none"
//         }
//     })
//     let btn2 = document.querySelector("button.dotc.two");
//     btn2.addEventListener("click", function () {
//         if (document.querySelector("div.word.two").style.display === "none") {
//             document.querySelector("div.word.two").style.display = "block";
//         }
//         else {
//             document.querySelector("div.word.two").style.display = "none"
//         }
//     })
//     let btn3 = document.querySelector("button.dotc.three");
//     btn3.addEventListener("click", function () {
//         if (document.querySelector("div.text.three").style.display === "none") {
//             document.querySelector("div.text.three").style.display = "block";
//         }
//         else {
//             document.querySelector("div.text.three").style.display = "none"
//         }
//     })
//     let btn4 = document.querySelector("button.dotc.four");
//     btn4.addEventListener("click", function () {
//         if (document.querySelector("div.word.four").style.display === "none") {
//             document.querySelector("div.word.four").style.display = "block";
//         }
//         else {
//             document.querySelector("div.word.four").style.display = "none"
//         }
//     })
//     let btn5 = document.querySelector("button.dotc.five");
//     btn5.addEventListener("click", function () {
//         if (document.querySelector("div.text.five").style.display === "none") {
//             document.querySelector("div.text.five").style.display = "block";
//         }
//         else {
//             document.querySelector("div.text.five").style.display = "none"
//         }
//     })
// })


