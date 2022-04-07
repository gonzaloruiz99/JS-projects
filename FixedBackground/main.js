
const Allscreens = [
    {
        "id":1,
        "title":"Title here",
        "text":`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor beatae, laudantium eos fugiat, 
        deserunt delectus quibusdam quae placeat, tempora ea? Nulla ducimus, magnam sunt repellendus modi, ad ipsam est.`,
        "background":"./img/img-1.jpg",
        "mobile":"./img/img-mobile-1.jpg",
        "some": "one",
    },
    {
        "id":2,
        "title":"Title here",
        "text":`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor beatae, laudantium eos fugiat, 
        deserunt delectus quibusdam quae placeat, tempora ea? Nulla ducimus, magnam sunt repellendus modi, ad ipsam est.`,
        "background":"./img/img-2.jpg",
        "mobile":"./img/img-mobile-2.jpg",
        "some": "two",
    },
    {
        "id":3,
        "title":"Title here",
        "text":`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor beatae, laudantium eos fugiat, 
        deserunt delectus quibusdam quae placeat, tempora ea? Nulla ducimus, magnam sunt repellendus modi, ad ipsam est.`,
        "background":"./img/img-3.jpg",
        "mobile":"./img/img-mobile-3.jpg",
        "some": "three",
    },
    {
        "id":4,
        "title":"Title here",
        "text":`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor beatae, laudantium eos fugiat, 
        deserunt delectus quibusdam quae placeat, tempora ea? Nulla ducimus, magnam sunt repellendus modi, ad ipsam est.`,
        "background":"./img/img-4.jpg",
        "mobile":"./img/img-mobile-4.jpg",
        "some": "four",
    },
]


const containers = document.querySelector(".screens");

const topBtn = document.querySelector(".up-arrow");
const downBtn = document.querySelector(".down-arrow");
const aPage = document.querySelector(".main-screen");



//load items
window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(Allscreens);
  });



  /* dynamic display */
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `
        <article class="screen page${item.id} id=${item.some} ">
            <div class="text">
                <h2>${item.title}</h2>
                <p>${item.text}</p>
            </div>
        </article>
        
        `
    }).join("");
    containers.innerHTML = displayMenu;

}



  //move to next/previous using the keyboards

  window.addEventListener('keydown', (event) =>{
      switch(event.key){
          case 'ArrowUp': event.preventDefault();topFunction(); break;
          case 'ArrowDown': event.preventDefault();downFunction(); break;
      }
  })




    // Detects when the up arrow should appear
    const pageHeight = aPage.scrollHeight;
    console.log(pageHeight);

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > pageHeight-10 || document.documentElement.scrollTop > pageHeight-10) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
    }

        

    // When the user clicks on the button, scroll to the top of the document
    let num = 0;

    function topFunction() {
        if(num>=1){num = num-1};
        document.querySelector(`.page${num}`).scrollIntoView({ 
            behavior: 'smooth' 
        });
    }


 
function downFunction() {
    if(num<4){num = num+1};
    document.querySelector(`.page${num}`).scrollIntoView({ 
        behavior: 'smooth' 
    });

}





/*
Falta detectar si se scrollea para arribao abajo, y sumar la variable Num en estos casos.
https://thewebdev.info/2021/04/26/how-to-detect-scroll-direction-with-javascript/ 
https://stackoverflow.com/questions/31223341/detecting-scroll-direction 

Y se puede agregar un boton Toggle, que quite el auto deslizamiento,
*/


