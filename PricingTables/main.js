



const changeButton = document.querySelector('.clicked');




const cards = document.querySelectorAll('.card');
changeButton.addEventListener('click',function(){
    cards.forEach(function(card){
        card.classList.toggle("is-flipped")

    })

})


cards.forEach(function(card){
    card.addEventListener("click", function(){
    cards.forEach(function(card){
        card.classList.remove("special")


    })
    card.classList.add("special")
})
})






    
