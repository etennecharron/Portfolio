let btnAccueil = document.querySelector(".btnAccueil");
let btnProjets = document.querySelector(".btnProjets");

let titre = document.querySelector(".titre");

let oeuvresArr = document.querySelectorAll(".swiperOeuvres .swiper-slide img")

let btnFermerOeuvre = document.querySelector(".oeuvreWrapup__contenus__ecran__x");
let oeuvreOuvert = document.querySelector(".oeuvreWrapup");
let carousselOeuvres = document.querySelector(".swiperOeuvres");

/*****modifie la position des oeuvre sur la position des Y**********/
let toggleHautBas = false;
oeuvresArr.forEach((oeuvre)=>{
    if(toggleHautBas == false){
        toggleHautBas = true;
        let nbRdm = Math.round(Math.random()*40);
        console.log(nbRdm)
        oeuvre.style.marginBottom = nbRdm + "px";
    }
    else if(toggleHautBas == true){
        toggleHautBas = false;
        let nbRdm = Math.round(Math.random()*-150);
        console.log(nbRdm)
        oeuvre.style.marginBottom = nbRdm + "px";
    }

});
let contenus = {
    accueil: {
        active : true,
        titre: "BONJOUR",
        },
    projets:{
        active : false,
        titre: "PROJETS",
    }
    
}

/**** Bouton projet (CHANGE LE CONTENUS DE LA PAGE)*****/
btnProjets.addEventListener("click",function(){
    if(contenus.projets.active == false){

        contenus.accueil.active = false;
        contenus.projets.active = true;
        
        titre.innerText = contenus.projets.titre;
        
        
    }
});

/**Bouton accueil (CHANGE LE CONTENUS DE LA PAGE)***/
btnAccueil.addEventListener("click",function(){
    if(contenus.accueil.active == false){

        contenus.projets.active = false;
        contenus.accueil.active = true;
        
        titre.innerText = contenus.accueil.titre;
        
    }
});


/******* swiper pour les oeuvres**********/ 
const swiperOeuvres = new Swiper(".swiperOeuvres", {
    slideToClickedSlide: true,
    freeMode: true,
    slidesPerView:1,
    spaceBetween: 100,
    breakpoints:{
        1200:{
            slidesPerView:3,
        },
        800:{
            slidesPerView:2,
        }
    },
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: false,
        },
    mousewheel: {
        enabled: true,
        sensitivity: 5,
        },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 100,
        }
})


/********swiper pour les images de l'oeuvre**********/ 
const swiperImages = new Swiper(".swiperImages",{
slidesPerView:1,
loop:true,
pagination: {
    el: '.swiper-pagination',
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
})


/***********Ferme Oeuvre ouvert**********/
btnFermerOeuvre.addEventListener("click",function(){
    oeuvreOuvert.classList.add("desactiver");
    carousselOeuvres.classList.remove("desactiver");
})