const Furnitures = [
    {
        "heading":"Discover innovative ways to decorate",
        "paragraph":`We provide unmatched quality, comfort, and style for property owners across the country. 
  Our experts combine form and function in bringing your vision to life. Create a room in your 
  own style with our collection and make your property a reflection of you and what you love.`,
        "deskImg":"./images/desktop-image-hero-1.jpg",
        "mobileImg": `./images/mobile-image-hero-1.jpg`,
    },
    {
        "heading":"We are available all across the globe",
        "paragraph": `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
  store locator. Any questions? Don't hesitate to contact us today.`,
        "deskImg":`./images/desktop-image-hero-2.jpg`,
        "mobileImg": `./images/mobile-image-hero-1.jpg`,
    },
    {
        "heading":"Manufactured with the best materials",
        "paragraph": `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
  to ensure that every product is made as perfect and as consistent as possible. With three decades of 
  experience in this industry, we understand what customers want for their home and office.`,
        "deskImg":"./images/desktop-image-hero-3.jpg" ,
        "mobileImg": `./images/mobile-image-hero-1.jpg`,
    },
]



const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const navbar = document.querySelector(".nav-center");


toggleBtn.addEventListener("click", function(){
    links.classList.toggle("show-links");
    navbar.classList.toggle("toggled");
    toggleBtn.classList.toggle("rotate");
})






const btnts = document.querySelectorAll("btn");

const mainImg = document.querySelector(".image-gallery");
const heading = document.querySelector(".heading");
const paragraph = document.querySelector(".paragraph");

// document.body.style.backgroundImage = "url(`./images/desktop-image-hero-2.jpg`)";

//document.querySelector("image-gallery").style.background="url(`./images/desktop-image-hero-2.jpg`)";

let i = 0;

function show(){
    heading.textContent = Furnitures[i].heading;
    paragraph.textContent = Furnitures[i].paragraph;
    //mainImg.style.background = "url(`./images/desktop-image-hero-1.jpg`) no-repeat ;";
    mainImg.style.background = "url('" + Furnitures[i].deskImg + "')";
    mainImg.style.backgroundPosition = "50% 80%";
    mainImg.style.backgroundSize = "cover";
    mainImg.style.backgroundRepeat = "no-repeat";
    mainImg.style.minHeight = "320px";
    mainImg.style.width = "100%";
}

show();


function slideNext(){
    i++;
    if(i > Furnitures.length -1){
        i=0;
    }
    show();
}
function slidePrev(){
    i--;
    if (i < 0){
        i = Furnitures.length -1;
    }
    show();
}