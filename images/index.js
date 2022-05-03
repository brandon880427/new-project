
// 吉他更換紐(目前無使用)
// function changeImg(temp) {
//     if(temp == 1){
//         document.getElementById('guitar').src = './images/g1.jpg';
//     }else if(temp == 2){
//         document.getElementById('guitar').src = './images/g2.jpg';
//     }else if(temp == 3){
//         document.getElementById('guitar').src = './images/g3.jpg';
//     }else if(temp == 4){
//         document.getElementById('guitar').src = './images/g4.jpg';
//     }else if(temp == 5){
//         document.getElementById('guitar').src = './images/g5.jpg';
//     }
// }
// 圖片延展
function accordion(){
    //alert("ttt");
    
    let acc = document.getElementsByClassName("accordion")
    // console.log(acc);
    for (i=0;i<acc.length;i++){
        acc[i].addEventListener("click",function(){
         this.classList.toggle("active");
         let panel = this.nextElementSibling;
         if(panel.style.maxHeight){
             panel.style.maxHeight=null;
         } else{
             panel.style.maxHeight=panel.scrollHeight+'px';
         }
        });
    }
    
}

document.addEventListener("DOMContentLoaded", function(){
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


document.addEventListener("DOMContentLoaded",function(){
    // let guitar1 = document.querySelector("span.sg");
    let g1 = document.querySelector("li.g1")
    console.log(g1);
    // console.log(guitar1);
    g1.addEventListener("mouseover",function(){
        console.log("ttt");
        document.querySelector("span.sg").style['background-image']  = 'url(./images/homepage/reverend_bob-balch-signature-guitar_violin_brown_front.png)';
    })
    let g2 = document.querySelector("li.g2")
    console.log(g2);
    document.querySelector("span.sg").style['background-image']  = 'url(./images/homepage/teletwo)';
})

// function changeGuiter(temp){


//     if(temp == 1){
//         document.querySelector("span.sg").style['background-image'] = 'url(./images/homepage/reverend_bob-balch-signature-guitar_violin_brown_front.png)';

//         //document.getElementsByClassName('sg')[0].style['background-image'] = 'url(./images/homepage/reverend_bob-balch-signature-guitar_violin_brown_front.png)';
        
//     }else if(temp == 2){
//         document.querySelector("span.sg").style['background-image']  = "url(./images/homepage/reverend_flatroc_rock-orange_guitar_front.png)";
//         //document.getElementsByClassName('sg')[0].style['background-image']  = "url(./images/homepage/reverend_flatroc_rock-orange_guitar_front.png)";
//     }else if(temp == 3){
//         document.getElementsByClassName('sg')[0].style['background-image']  = "url('./images/homepage/reverend_greg-koch-gristle-90_venetian_gold-signature-guitar-front.png')";
//     }else if(temp == 4){
//         document.getElementsByClassName('sg')[0].style['background-image']  = "url('./images/homepage/reverend_greg-koch-gristle-90_venetian_gold-signature-guitar-front.png')";
//     }else if(temp == 5){
//         document.getElementsByClassName('sg')[0].style['background-image']  = "url('./images/homepage/reverend_greg-koch-gristle-90_venetian_gold-signature-guitar-front.png')";
//     }else if(temp == 6){
//         document.getElementsByClassName('sg')[0].style['background-image']  = "url('./images/homepage/reverend_greg-koch-gristle-90_venetian_gold-signature-guitar-front.png')";
//     }
// }

