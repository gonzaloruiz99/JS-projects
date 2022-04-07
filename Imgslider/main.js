


// items
const title = document.getElementById("title");
const text = document.getElementById("text");

const checkBtn = document.querySelector(".btn-check");
const container = document.querySelector(".main-container");
const images = document.querySelectorAll(".image");


const views = [
    {
        id:1,
        title: "I'm the first Box",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. 
                Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.`,
        btnColor:"var(--first-box)",
        imageColor: "var(--first-box)",
        backgroundColor: `  linear-gradient(85deg, var(--pink-one) 45%, transparent 0),
                         linear-gradient(95deg, var(--pink-two) 45%, var(--pink-three) 0) 0 0`,
    },
    {
        id:2,
        title: "I'm the second Box",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. 
                Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.`,
        btnColor:"var(--second-box)",
        imageColor: "var(--second-box)",
        backgroundColor: `  linear-gradient(85deg, var(--blue-one) 45%, transparent 0),
                         linear-gradient(95deg, var(--blue-two) 45%, var(--blue-three) 0) 0 0`,
    },
    {
        id:3,
        title: "I'm the third Box",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. 
                Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.`,
        btnColor:"var(--third-box)",
        imageColor: "var(--third-box)",
        backgroundColor: `  linear-gradient(85deg, var(--green-one) 45%, transparent 0),
                         linear-gradient(95deg, var(--green-two) 45%, var(--green-three) 0) 0 0`,
    },
    {
        id:4,
        title: "I'm the fourth Box",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. 
                Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.`,
        btnColor:"var(--fourth-box)",
        imageColor: "var(--fourth-box)",
        backgroundColor: `  linear-gradient(85deg, var(--pink-one) 45%, transparent 0),
                         linear-gradient(95deg, var(--pink-two) 45%, var(--pink-three) 0) 0 0`,
    },
    {
        id:5,
        title: "I'm the fifth Box",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia dui lectus. 
                Donec scelerisque ipsum diam, ac mattis orci pellentesque eget.`,
        btnColor:"var(--fifth-box)",
        imageColor: "var(--fifth-box)",
        backgroundColor: `  linear-gradient(85deg, var(--pink-one) 45%, transparent 0),
                         linear-gradient(95deg, var(--pink-two) 45%, var(--pink-three) 0) 0 0`,
    },
]





// set starting item
let currentView = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {  showView(currentView) });

/*
Hacer un slider pero solo de 3. Y para llegar a 5, cambiar los index como esta hecho ahora.


*/

function showView (view){
    const item = views[view]
    title.textContent = item.title;
    text.textContent =item.text;
    checkBtn.style.backgroundColor = item.btnColor;
    images.forEach(function(image){
        image.style.backgroundColor = item.imageColor;
    });
    container.style.background = item.backgroundColor;
}


function nextView(){
    currentView ++;

    if (currentView > views.length-1){
        currentView = 0;
    }
    showView(currentView);
}

function prevView(){
    currentView --;

    if (currentView < 0){
        currentView = views.length -1;
    }
    showView(currentView);
}

 
/* botonera */


