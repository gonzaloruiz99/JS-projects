
const gallery = [
    {
        "id":"n1",
        "type": "thumbnail",
        "img": "./images/image-product-1.jpg",
        "imgThumbnail": "./images/image-product-1-thumbnail.jpg",
    },
    {
        "id":"n2",
        "type": "thumbnail",
        "img": "./images/image-product-2.jpg",
        "imgThumbnail": "./images/image-product-2-thumbnail.jpg",
    },
    {
        "id":"n3",
        "type": "thumbnail",
        "img": "./images/image-product-3.jpg",
        "imgThumbnail": "./images/image-product-3-thumbnail.jpg",
    },
    {
        "id":"n4",
        "type": "thumbnail",
        "img": "./images/image-product-4.jpg",
        "imgThumbnail": "./images/image-product-4-thumbnail.jpg",
    }
]



/* Gallery */
const thumbnails = document.querySelectorAll(".thumbnail-img");
const mainImage = document.getElementById("main_img");
const modalMainImage = document.getElementById("modal-main_img");

const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");


/* Cart */
const input = document.getElementById("enter");
const btns = document.querySelectorAll(".btn");
let count = 0;

const cartCounter = document.querySelector(".cart-num");
const quanity = document.querySelector(".quantity");


/* Modal */
const overlay = document.querySelector(".modal-overlay"); 
const close_btn = document.querySelector(".close-btn");



/* --------------- NAV TOGGLE---------------*/

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
/* --------------- NAV TOGGLE end---------------*/








/* --------------- FORM COUNTER ---------------*/


const handleSubmit = (event) =>{
    event.preventDefault();

    if(count >= 1){
        cartCounter.style.visibility = "visible";
        cartCounter.textContent = count;
    }
}
const handleChange = (value) =>{
    
    if (isNaN(value)) 
    {
        alert("Must input numbers");
        return false;
    }
    else if(value > 20){
        count = 20;
        return
    }
    else{
        count = value;
    }
}

btns.forEach( function (btn){
    btn.addEventListener("click",function(e){
        const sign = e.currentTarget.classList;

        if (sign.contains("plus")){
            console.log("plus button");
            count++;
        }
        else if (sign.contains("minus") && count>0 ){
            console.log("minus button");
            count--;
        }
        input.value = count; 

    })
})
/* --------------- FORM COUNTER end ---------------*/









/* --------------- images GALLERY ---------------*/

thumbnails.forEach(function(indiv, index){
    indiv.addEventListener('click',function(){

        thumbnails.forEach(function(item){
            if (item !== indiv) {
                item.classList.remove("selected");
            } 
        });
        indiv.classList.toggle("selected");
        

        mainImage.src = gallery[index].img
        modalMainImage.src = gallery[index].img

        
        // gallery.map((item)=>{ // sets image with same ID as clicked
        //     if(item.id === e.currentTarget.id){
        //         mainImage.src = item.img
        //     }
        // })
    });

});
/* --------------- images GALLERY end ---------------*/













/* --------------- images MODAL---------------*/

mainImage.addEventListener('click',function(){
    //console.log(overlay.classList);
    overlay.classList.add("open-modal");

    document.addEventListener("keyup",function(e){
        if (e.key === "Escape") { // escape key maps to keycode `27`
            overlay.classList.remove("open-modal");
        }
    })
});

close_btn.addEventListener('click',function(){
    overlay.classList.remove("open-modal");
});



