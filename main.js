let optinos = document.querySelectorAll(".sidebar .option");
let minMenu = document.querySelector(".lettel-menu");
let sidebar = document.getElementsByClassName("sidebar")[0];
let next_g = document.getElementsByClassName("move-for")[0];
let prev_g = document.getElementsByClassName("move-back")[0];
let photos = document.querySelector(".gallery .container .holder .photos");

let firstImg = document.querySelector(".gallery .holder .photos img"),
firstImgWidth = firstImg.clientWidth + 15,
scrollWidth = photos.scrollWidth - photos.clientWidth;
//

next_g.addEventListener("click",function(){
    photos.scrollLeft +=  firstImgWidth;
    setInterval(function(){
    if(Math.ceil(photos.scrollLeft) == scrollWidth ){
        next_g.classList.add("hd");
    }
    else{
        next_g.classList.remove("hd");
    }
    },60)
})
prev_g.addEventListener("click",function(){
    photos.scrollLeft +=  -firstImgWidth;
    setInterval(function(){
    if(photos.scrollLeft == 0 ){
        prev_g.classList.add("hd");
    }
    else{
        prev_g.classList.remove("hd");
    }
    },60)
})


optinos.forEach(function(ele){
    ele.addEventListener("click",function(){
        for(let i=0;i<optinos.length;i++){
            optinos[i].classList.remove("ac");
        }
        ele.classList.add("ac");
    })
})

minMenu.addEventListener("click",function(){
    minMenu.classList.toggle("open");
    sidebar.classList.toggle("open");
    
})
document.querySelectorAll(".sidebar .option").forEach(function(op){
    op.addEventListener("click",function(){
    minMenu.classList.remove("open");
    sidebar.classList.remove("open");
    })
})
// 
window.onscroll = function(){
    if(scrollY <= 600){
        for(let i=0;i<optinos.length;i++){
        optinos[i].classList.remove("ac");
        }
        optinos[0].classList.add("ac");
    }
    if(scrollY > 600){
        for(let i=0;i<optinos.length;i++){
        optinos[i].classList.remove("ac");
        }
        optinos[1].classList.add("ac");
    }
    if(scrollY >= 1200){
        for(let i=0;i<optinos.length;i++){
        optinos[i].classList.remove("ac");
        }
        optinos[2].classList.add("ac");
    }
    if(scrollY >= 1799){
        for(let i=0;i<optinos.length;i++){
        optinos[i].classList.remove("ac");
        }
        optinos[3].classList.add("ac");
    }
}