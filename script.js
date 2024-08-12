//let btnAccueil = document.querySelector(".btnAccueil");
let btnProjets = document.querySelector(".btnProjets01");
let imgScroll = document.querySelector(".imgScroll");

let titre = document.querySelector(".titre");
let contenusPage = document.querySelector(".contenusPage");
let oeuvresArr;

let btnFermerOeuvre = document.querySelector(".oeuvreWrapup__contenus__ecran__x");
let oeuvreOuvert = document.querySelector(".oeuvreWrapup");
let carousselOeuvres = document.querySelector(".swiperOeuvres");

let oeuvres = [
    {
        titre: "BIOTA",
        imgPresentation: "images/projet01_biota.jpg",
        couleur:"pink",
        description: "BITOA est un projet réalisé dans le cadre d'un cours d'animation 3D et de conception sonore. L'histoire d'une créature a une forme humanoïde triste et seule. Sa tristesse fait naître la vie et redonne de la couleur à son monde. J'ai réalisé le montage vidéo sur Davinci Resolve, créé les sons sur VCV Rack et réalisé la création 3D du personnage et son animation sur MAYA.",
        logiciels: ["Unity", "Davinci Resolve", "Maya", "Repear"],
        iframe: [`<iframe src="https://www.youtube.com/embed/TYIZgZ5-SGg?si=Dvpai46RyXvKf_67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`],
        images: ["images/projet01_biota_contenus01.jpg",
            "images/projet01_biota_contenus02.jpg",
            "images/projet01_biota_contenus03.jpg"],
    }, {
        titre: "LA GROTTE",
        imgPresentation: "images/projet02_grotte.jpg",
        couleur:"orange",
        description: "LA GROTTE est un jeu d'évasion où le but est de s'échapper de la grotte où l'on est enfermé grace à la réussite d'énigmes. Les énigmes étaient réalisables grâce à une boîte orange imprimée en 3D qui contenait des composantes comme un détecteur de lumière, 3 boutons, un potentiomètre et un détecteur de temps de vol. Dans le projet, j'ai réaliser avec l'aide de mes collegues le design du jeu et le fonctionnement des énigmes. De plus, j'ai réaliser la programation complète du jeu sur unity et Arduino ide.",
        logiciels: ["Unity", "Arduino ide", "Max", "VCV Rack", "Adobe Illustrator", "Maya"],
        iframe: [],
        images: ["images/projet02_grotte_contenus01.jpg", "images/projet02_grotte_contenus02.jpg", "images/projet02_grotte_contenus03.jpg", "images/projet02_grotte_contenus04.png"],
    }, {
        titre: "CANEVAS COSMIQUE",
        couleur:"purple",
        imgPresentation: "images/projet03_canevas-cosmique.png",
        description: "Vous vous retrouvez dans un laboratoire contenant une table, après un peu de recherche vous découvrez que sur l'écran au dessus de celle-ci se trouve une simulation d'un système solaire avec laquelle vous pouvez intéragir en déposant des statues déclancheant différents phénomènes. Vous êtes invité à expérimenter sur cette table, jusqu'à ce que les scientifiques reviennent du moins...",
        logiciels: ["Unity", "Touch Designer", "Davinci Resolve", "Maya/Blender", "Repear", "Figma", "OBS"],
        iframe: [`<iframe width="560" height="315" src="https://www.youtube.com/embed/Jrn4U27G5YY?si=GXibq9jUBFFprD-p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/5xu6JZipWec?si=-xqcfMbwkH0TxAjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`],
        images: [],
    }
]
let carousselOeuvresSlides = document.querySelector(".swiperOeuvres .swiper-wrapper");
let imgOeuvreSelectionner = document.querySelector(".oeuvreWrapup__img");
let titreOeuvre = document.querySelector(".titreOeuvre")
let paragrapheOeuvre = document.querySelector(".paragrapheOeuvre");
let logicielsOeuvre = document.querySelector(".logicielsOeuvre");
let videosOeuvre = document.querySelector(".videosOeuvre");
let imagesOeuvre = document.querySelector(".imagesOeuvre");
let oeuvreContenus = document.querySelector(".oeuvreWrapup__contenus__ecran__interieur");
oeuvres.forEach((oeuvre) =>{
    carousselOeuvresSlides.innerHTML = carousselOeuvresSlides.innerHTML + `<div class="swiper-slide">
    <img class="oeuvre" src="${oeuvre.imgPresentation}" alt="">
</div>`;

});

/*REMPLIS LES INFORMATIONS DE L'OEUVRE LORSQU'ON CLIQUE SUR L'IMAGE*/
oeuvresArr = document.querySelectorAll(".swiperOeuvres .swiper-slide .oeuvre");
for (let i = 0; i < oeuvresArr.length; i++) {
    oeuvresArr[i].addEventListener("click", function () {
        carousselOeuvres.classList.add("desactiver");
        oeuvreOuvert.classList.remove("desactiver");
        //image sur le coter
        imgOeuvreSelectionner.innerHTML = `<img src="${oeuvres[i].imgPresentation}">`
        //tire
        titreOeuvre.innerText = oeuvres[i].titre;
        //paragraphe description
        paragrapheOeuvre.innerText = oeuvres[i].description
        //list logiciels
        logicielsOeuvre.innerHTML = "";
        oeuvres[i].logiciels.forEach((logiciel) => {
            logicielsOeuvre.innerHTML = logicielsOeuvre.innerHTML + `<li>${logiciel}</li>`;
        });
        //videos
        videosOeuvre.innerHTML = "";
        oeuvres[i].iframe.forEach((iframe) => {
            videosOeuvre.innerHTML = videosOeuvre.innerHTML + iframe;
        })
        //images
        imagesOeuvre.innerHTML = "";
        if (oeuvres[i].images.length > 0) {
            document.querySelector(".oeuvreWrapup__contenus__ecran__interieur__images").classList.forEach((c) => {
                if (c == "desactiver") {
                    document.querySelector(".oeuvreWrapup__contenus__ecran__interieur__images").classList.remove(c);
                }
            })
            oeuvres[i].images.forEach((image) => {
                imagesOeuvre.innerHTML = imagesOeuvre.innerHTML + `<div class="swiper-slide">
                <img src="${image}" alt="">
            </div>`
            })
            swiperImages.slideTo(0);
        }
        else {
            document.querySelector(".oeuvreWrapup__contenus__ecran__interieur__images").classList.add("desactiver");
        }
        oeuvreContenus.scrollTo(0, 0);
    })
}

/*****modifie la position des oeuvre sur la position des Y**********/
let toggleHautBas = false;
oeuvresArr.forEach((oeuvre) => {
    if (toggleHautBas == false) {
        toggleHautBas = true;
        let nbRdm = Math.round(Math.random() * 40);
        console.log(nbRdm)
        oeuvre.style.marginBottom = nbRdm + "px";
    }
    else if (toggleHautBas == true) {
        toggleHautBas = false;
        let nbRdm = Math.round(Math.random() * -150);
        console.log(nbRdm)
        oeuvre.style.marginBottom = nbRdm + "px";
    }

});
let contenus = {
    accueil: {
        active: true,
        titre: "BONJOUR",
    },
    projets: {
        active: false,
        titre: "PROJETS",
    }
}

/**** Bouton projet (CHANGE LE CONTENUS DE LA PAGE POUR LA PAGE PROJET)*****/
let contenusDesactiver = false;

btnProjets.addEventListener("click", function () {
    
    if (contenus.projets.active == false) {

        contenus.accueil.active = false;
        contenus.projets.active = true;
        


        gsap.to(".animationContenus",{
            y:"-100%",
            duration:0.3,
        });
        setTimeout(()=>{
            titre.innerText = contenus.projets.titre; 
            btnProjets.classList.add("desactiver");
            imgScroll.classList.remove("desactiver");  

            gsap.fromTo(".animationContenus",
                {y:"100%"},
                {y:0,
                duration:0.8,
                ease:"back.out"}
            )
            setTimeout(()=>{
                gsap.to('.imgScroll', {
                    repeat:-1,
                    yoyo:true,
                    y: '20%',
                    },
                );
            },1250)
        },300);

        
        /** 
        //ANIMATION DU TITRE
        gsap.to(".titre",{
            y:"-100%",
            duration:0.3,
        })
        setTimeout(()=>{
            titre.innerText = contenus.projets.titre;
            gsap.fromTo(".titre",
                {y:"100%"},
                {y:"0%",
                    duration:1,
                    ease:"back.out",
                })
        },200)
        // ANIMATION POUR BOUTON
        gsap.to(".btnProjets01",{
            y:"-600%",
            duration:0.3
        })
        setTimeout(()=>{
            btnProjets.classList.add("desactiver");
            imgScroll.classList.remove("desactiver");
        },500)
        //ANIMATION POUR ICON INCITATION A SCROLL
        setTimeout(()=>{
            gsap.fromTo(".imgScroll",
                {y:"200%"},
                {y:"0%",
                    ease:"back.out",
                    duration:1,
                }
                )
        },500)
        
            setTimeout(()=>{
                gsap.to('.imgScroll', {
                    repeat:-1,
                    yoyo:true,
                    y: '20%',
                    },
                );
            },1000)
            */
    }
});

addEventListener("wheel", function () {
    if (contenus.projets.active == true && contenusDesactiver == false) {
        contenusDesactiver = true;
        contenusPage.classList.add("desactiver");
        carousselOeuvres.classList.remove("desactiver");
    }
});
let utilisateurPrete = true;

btnProjets.addEventListener("mouseenter",function(){
    utilisateurPrete = false;
})
btnProjets.addEventListener("mouseleave",function(){
    utilisateurPrete = true;
})
//TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST  CLICK
document.querySelector("main").addEventListener("swiped-up",function(){
    if (contenus.projets.active == true && contenusDesactiver == false && utilisateurPrete == true) {
        contenusDesactiver = true;
        contenusPage.classList.add("desactiver");
        carousselOeuvres.classList.remove("desactiver");
    }
})

/**Bouton accueil (CHANGE LE CONTENUS DE LA PAGE)***/
/** 
btnAccueil.addEventListener("click", function () {
    if (contenus.accueil.active == false) {

        contenus.projets.active = false;
        contenus.accueil.active = true;

        titre.innerText = contenus.accueil.titre;
        
    }
});
*/



/******* swiper pour les oeuvres**********/
const swiperOeuvres = new Swiper(".swiperOeuvres", {
    slidesPerView: 1,
    breakpoints: {
        1300: {
            slidesPerView: 3,
            mousewheel: {
                enabled: true,
                sensitivity: 5,
            },
        },
        830: {
            slidesPerView: 2,
            mousewheel: {
                enabled: true,
                sensitivity: 3,
            },
        },
        550:{
            slidesPerView:1,
            mousewheel: {
                enabled: true,
                sensitivity: 2,
            },
        }
        
    },
    freeMode: {
        enabled: true,
        sticky: false,
        momentumBounce: false,
    },
    mousewheel: {
        enabled: true,
        sensitivity: 1,
    },
})


/********swiper pour les images de l'oeuvre**********/
const swiperImages = new Swiper(".swiperImages", {
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


/***********Ferme Oeuvre ouvert**********/
btnFermerOeuvre.addEventListener("click", function () {
    oeuvreOuvert.classList.add("desactiver");
    carousselOeuvres.classList.remove("desactiver");
})





/***rajoute et enleve des slide vide si la taille de l'ecran se modifie****/
window.addEventListener("resize", function () {
    //console.log(window.innerWidth);
    if (this.innerWidth > 1300) {
        let oeuvresVideArr = document.querySelectorAll(".swiperOeuvres .vide");
        oeuvresVideArr.forEach(() => {
            swiperOeuvres.removeSlide(0);
        });
        swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
        swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
        swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
        swiperOeuvres.slideTo(0);
    }
    else if (this.innerWidth < 1300 && this.innerWidth > 830) {
        let oeuvresVideArr = document.querySelectorAll(".swiperOeuvres .vide");
        oeuvresVideArr.forEach(() => {
            swiperOeuvres.removeSlide(0);
        });
        swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
        swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
        swiperOeuvres.slideTo(0);
    }
    else if (this.innerWidth < 830) {
        let oeuvresVideArr = document.querySelectorAll(".swiperOeuvres .vide");
        oeuvresVideArr.forEach(() => {
            swiperOeuvres.removeSlide(0);
        });
        swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
        swiperOeuvres.slideTo(0);
    }
})


/**rajoute et enleve des slides vide lorsque la page s'ouvre**/
if (window.innerWidth > 1300) {
    let oeuvresVideArr = document.querySelectorAll(".swiperOeuvres .vide");
    oeuvresVideArr.forEach(() => {
        swiperOeuvres.removeSlide(0);
    });
    swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
    swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
    swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
    swiperOeuvres.slideTo(0);
}
else if (window.innerWidth < 1300 && window.innerWidth > 830) {
    let oeuvresVideArr = document.querySelectorAll(".swiperOeuvres .vide");
    oeuvresVideArr.forEach(() => {
        swiperOeuvres.removeSlide(0);
    });
    swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
    swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
    swiperOeuvres.slideTo(0);
}
else if (window.innerWidth < 830) {
    let oeuvresVideArr = document.querySelectorAll(".swiperOeuvres .vide");
    console.log(oeuvresVideArr.length);
    oeuvresVideArr.forEach(() => {
        swiperOeuvres.removeSlide(0);
    });
    swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
    swiperOeuvres.slideTo(0);
}

addEventListener("wheel",function(){
//verifie si l'utilisateur est sur la première oeuvre
//document.querySelectorAll("")
});