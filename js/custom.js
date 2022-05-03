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
let button = document.querySelectorAll(".dotc");
for (let i of button) {
  i.addEventListener('click', (e) => {
    // console.log(e.target.nextElementSibling);
    let text = document.querySelectorAll(".text");
    e.target.nextElementSibling.classList.toggle('block');
  })
}







// 漢堡開關
document.addEventListener("DOMContentLoaded", function () {
  let y = document.querySelector("div.container");
  let x1 = document.querySelector("div.bar1");
  let x3 = document.querySelector("div.bar3");
  console.log(y);
  y.addEventListener("click", function () {
    x1.style["background-color"] = "rgb(191,113,7)"
    x3.style["background-color"] = "rgb(191,113,7)"
    // y.style["background-color"]="red"
    if (document.querySelector("ul.head").style.display === "inline-block") {
      document.querySelector("ul.head").style.display = "none";
      x1.style["background-color"] = "white"
      x3.style["background-color"] = "white"
    }
    else {
      document.querySelector("ul.head").style.display = "inline-block";
    }
  })

})




// footer
document.addEventListener("DOMContentLoaded", function () {
  let plus1 = document.querySelector("a.t1title");
  plus1.addEventListener("click", function () {
    if (document.querySelector("ul.open1").style.display === "inline-block") {
      document.querySelector("ul.open1").style.display = "none";
    }
    else {
      document.querySelector("ul.open1").style.display = "inline-block"
    }
  })
})


document.addEventListener("DOMContentLoaded", function () {
  let plus2 = document.querySelector("a.t2title");
  plus2.addEventListener("click", function () {
    if (document.querySelector("ul.open2").style.display === "inline-block") {
      document.querySelector("ul.open2").style.display = "none";
    }
    else {
      document.querySelector("ul.open2").style.display = "inline-block"
    }
  })
})









