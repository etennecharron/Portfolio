let btnAccueil = document.querySelector(".btnAccueil");
let btnProjets = document.querySelector(".btnProjets");

let titre = document.querySelector(".titre");

let oeuvresArr;

let btnFermerOeuvre = document.querySelector(".oeuvreWrapup__contenus__ecran__x");
let oeuvreOuvert = document.querySelector(".oeuvreWrapup");
let carousselOeuvres = document.querySelector(".swiperOeuvres");

let oeuvres = [
    {
        titre:"Biota",
        imgPresentation:"images/projet01_biota.jpg",
        description:"BITOA est un projet réalisé dans le cadre d'un cours d'animation 3D et de conception sonore. L'histoire d'une créature a une forme humanoïde triste et seule. Sa tristesse fait naître la vie et redonne de la couleur à son monde. J'ai réalisé le montage vidéo sur Davinci Resolve, créé les sons sur VCV Rack et réalisé la création 3D du personnage et son animation sur MAYA.",
        logiciels:["Unity","Davinci Resolve","Maya","Repear"],
        iframe:[`<iframe src="https://www.youtube.com/embed/TYIZgZ5-SGg?si=Dvpai46RyXvKf_67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`],
        images:["images/projet01_biota_contenus01.jpg",
            "images/projet01_biota_contenus02.jpg",
            "images/projet01_biota_contenus03.jpg"],
    },{
    titre:"La grotte",
    imgPresentation:"images/projet02_grotte.jpg",
    description:"La grotte est un jeu d'évasion où le but est de s'échapper de la grotte où l'on est enfermé grace à la réussite d'énigmes. Les énigmes étaient réalisables grâce à une boîte orange imprimée en 3D qui contenait des composantes comme un détecteur de lumière, 3 boutons, un potentiomètre et un détecteur de temps de vol. Dans le projet, j'ai réaliser avec l'aide de mes collegues le design du jeu et le fonctionnement des énigmes. De plus, j'ai réaliser la programation complète du jeu sur unity et Arduino ide.",
    logiciels:["Unity","Arduino ide","Max","VCV Rack","Adobe Illustrator","Maya"],
    iframe:[],
    images:["images/projet02_grotte_contenus01.jpg","images/projet02_grotte_contenus02.jpg","images/projet02_grotte_contenus03.jpg","images/projet02_grotte_contenus04.png"],
},{
    titre:"Canevas cosmique",
    imgPresentation:"images/projet03_canevas-cosmique.png",
    description:"Vous vous retrouvez dans un laboratoire contenant une table, après un peu de recherche vous découvrez que sur l'écran au dessus de celle-ci se trouve une simulation d'un système solaire avec laquelle vous pouvez intéragir en déposant des statues déclancheant différents phénomènes. Vous êtes invité à expérimenter sur cette table, jusqu'à ce que les scientifiques reviennent du moins...",
    logiciels:["Unity","Touch Designer","Davinci Resolve","Maya/Blender","Repear","Figma","OBS"],
    iframe:[`<iframe width="560" height="315" src="https://www.youtube.com/embed/Jrn4U27G5YY?si=GXibq9jUBFFprD-p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/5xu6JZipWec?si=-xqcfMbwkH0TxAjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`],
    images:["images/projet01_biota_contenus01.jpg",
        "images/projet01_biota_contenus02.jpg",
        "images/projet01_biota_contenus03.jpg"],
}
]
let carousselOeuvresSlides = document.querySelector(".swiperOeuvres .swiper-wrapper");
let titreOeuvre = document.querySelector(".titreOeuvre")
let paragrapheOeuvre = document.querySelector(".paragrapheOeuvre");
let logicielsOeuvre = document.querySelector(".logicielsOeuvre");
let videosOeuvre = document.querySelector(".videosOeuvre");
let imagesOeuvre = document.querySelector(".imagesOeuvre");

oeuvres.forEach((oeuvre)=>
    carousselOeuvresSlides.innerHTML = carousselOeuvresSlides.innerHTML +`<div class="swiper-slide">
                    <img class="oeuvre" src="${oeuvre.imgPresentation}" alt="">
                </div>`
);
oeuvresArr = document.querySelectorAll(".swiperOeuvres .swiper-slide oeuvre");

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
    slidesPerView:1,
    spaceBetween: 100,
    breakpoints:{
        1200:{
            slidesPerView:3,
            mousewheel:{
                enabled: true,
                sensitivity:5,
            }
        },
        800:{
            slidesPerView:2,
            mousewheel:{
                enabled: true,
                sensitivity:5,
            }
        }
    },
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: false,
        },
    mousewheel: {
        enabled: false,
        sensitivity: 1,
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