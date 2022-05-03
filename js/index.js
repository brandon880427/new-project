

// 圖片延展
function accordion() {
    //alert("ttt");

    let acc = document.getElementsByClassName("accordion")
    // console.log(acc);
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }

}

document.addEventListener("DOMContentLoaded", function () {
    accordion();
});



// carousel

let slidePosition = 0
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length
// console.log(slides);
// document.getElementById('dot').addEventListener('click',function(){
// })









// 第二大部份


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("span.sg").style['background-image'] = 'url(./images/homepage/reverend_flatroc_rock-orange_guitar_front.png)';
    // document.querySelector("gi h1").style.color = 'black';
    // let guitar1 = document.querySelector("span.sg");
    let g1 = document.querySelector("li.g1")
    g1.addEventListener("mouseover", function () {
        console.log("ttt");
        document.querySelector("span.sg").style['background-image'] = 'url(./images/homepage/reverend_flatroc_rock-orange_guitar_front.png)';
    })
    let g2 = document.querySelector("li.g2")
    console.log(g2);
    g2.addEventListener("mouseover", function () {
        document.querySelector("span.sg").style['background-image'] = 'url(./images/homepage/teletwo.png)';
    })
    let g3 = document.querySelector("li.g3")
    // console.log(g2);
    g3.addEventListener("mouseover", function () {
        document.querySelector("span.sg").style['background-image'] = 'url(./images/homepage/lespual.png)';
    })
    let g4 = document.querySelector("li.g4")
    // console.log(g2);
    g4.addEventListener("mouseover", function () {
        document.querySelector("span.sg").style['background-image'] = 'url(./images/homepage/star.png)';
    })
    let g5 = document.querySelector("li.g5")
    // console.log(g2);
    g5.addEventListener("mouseover", function () {
        document.querySelector("span.sg").style['background-image'] = 'url(./images/homepage/reverend_jenn-wasner-signature-guitar_optic-interruption-front.png)';
    })
    let g6 = document.querySelector("li.g6")
    // console.log(g2);
    g6.addEventListener("mouseover", function () {
        document.querySelector("span.sg").style['background-image'] = 'url(./images/homepage/good.png)';
    })
})



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



