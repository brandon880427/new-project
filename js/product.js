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




//   按鈕
document.addEventListener("DOMContentLoaded", function () {

  let color = document.querySelector("h3#colortype")
  // console.log(color);
  document.querySelector("div.mainpic").style['background-image'] = 'url(./images/product/fender-midnight-stratocaster.png)';

  let btn1 = document.querySelector("button#btn1");
  console.log(btn1);
  btn1.addEventListener("click", function () {
    document.querySelector("div.mainpic").style['background-image'] = 'url(./images/product/fender-midnight-stratocaster.png)';
    color.innerHTML = "MIDNIGHT BLACK/PAU FERRO"
  })

  let btn2 = document.querySelector("button#btn2");
  btn2.addEventListener("click", function () {
    document.querySelector("div.mainpic").style['background-image'] = 'url(./images/product/ok.png)';
    color.innerHTML = "MIAMI BLUE/MAPLE WOOD";
  })
  let btn3 = document.querySelector("button#btn3");
  btn3.addEventListener("click", function () {
    document.querySelector("div.mainpic").style['background-image'] = 'url(./images/product/1_rr.png)';
    color.innerHTML = "FIESTA RED/MAPLE WOOD"
  })
  let btn4 = document.querySelector("button#btn4");
  btn4.addEventListener("click", function () {
    document.querySelector("div.mainpic").style['background-image'] = 'url(./images/product/yes.png)';
    color.innerHTML = "AUBERGINE RED/MAPLE WOOD"
  })

})