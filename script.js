let btnAccueil = document.querySelector(".btnAccueil");
let btnProjets = document.querySelector(".btnProjets");

let titre = document.querySelector(".titre");

let oeuvresArr = document.querySelectorAll(".swiperOeuvres .swiper-slide img")

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

const swiperOeuvres = new Swiper(".swiperOeuvres", {
    slideToClickedSlide: true,
    slidesPerView: "3",
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: false,
        },
    mousewheel: {
        enabled: true,
        sensitivity: 10,
        },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 100,
        }
})


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
/********FIN SWIPER GAMING BABY**********/ 