let btnAccueil = document.querySelector(".btnAccueil");
let btnProjets = document.querySelector(".btnProjets");

let titre = document.querySelector(".titre");

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

// BOUTON PROJETS (CHANGE LE CONTENUS DE LA PAGE)
btnProjets.addEventListener("click",function(){
    if(contenus.projets.active == false){

        contenus.accueil.active = false;
        contenus.projets.active = true;
        
        titre.innerText = contenus.projets.titre;
        
        
    }
});

// BOUTON ACCUEIL (CHANGE LE CONTENUS DE LA PAGE)
btnAccueil.addEventListener("click",function(){
    if(contenus.accueil.active == false){

        contenus.projets.active = false;
        contenus.accueil.active = true;
        
        titre.innerText = contenus.accueil.titre;
        
    }
});



/********DÉBUT SWIPER GAMING BABY**********/ 

const swiper = new Swiper(".swiper", {
    
    slideToClickedSlide: true,
    slidesPerView: "2",
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: false,
        },
    mousewheel: {
        enabled: true,
        sensitivity: 4,
        },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 100,
        }
})





/********FIN SWIPER GAMING BABY**********/ 