//let btnAccueil = document.querySelector(".btnAccueil");
let btnProjets = document.querySelector(".btnProjets01");
let imgScroll = document.querySelector(".imgScroll");
let imgSwipe = document.querySelector(".imgSwipe");

let btnNom = document.querySelector(".titreNom");
let btnPortfolio = document.querySelector(".titrePortfolio")

let titre = document.querySelector(".titre");
let contenusPage = document.querySelector(".contenusPage");
let oeuvresArr;

let btnFermerOeuvre = document.querySelector(".oeuvreWrapup__contenus__ecran__x");
let oeuvreOuvert = document.querySelector(".oeuvreWrapup");
let carousselOeuvres = document.querySelector(".swiperOeuvres");

let swiperActif = false;
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
        550: {
            slidesPerView: 1,
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


let oeuvres = [
    {
        titre: "BIOTA",
        imgPresentation: "images/projet01_biota.jpg",
        couleur: "pink",
        description: "BITOA est un projet réalisé dans le cadre d'un cours d'animation 3D et de conception sonore. C’est l'histoire d'une créature ayant une forme humanoïde. Elle est triste et seule. Sa tristesse fait naître la vie et redonne de la couleur à son monde. J'ai réalisé le montage vidéo sur Davinci Resolve, créé les sons sur VCV Rack et réalisé la création 3D du personnage et son animation sur MAYA..",
        logiciels: ["Unity", "Davinci Resolve", "Maya", "Repear"],
        iframe: [`<iframe src="https://www.youtube.com/embed/TYIZgZ5-SGg?si=Dvpai46RyXvKf_67" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`],
        images: ["images/projet01_biota_contenus01.jpg",
            "images/projet01_biota_contenus02.jpg",
            "images/projet01_biota_contenus03.jpg"],
    }, {
        titre: "LA GROTTE",
        imgPresentation: "images/projet02_grotte.jpg",
        couleur: "orange",
        description: "LA GROTTE est un jeu d'évasion où le but est de s'échapper de la grotte où on est enfermés grâce à la réussite d'énigmes. Les énigmes sont réalisables grâce à une boîte orange imprimée en 3D qui contient des composantes comme un détecteur de lumière, 3 boutons, un potentiomètre et un détecteur de temps de vol. Dans le projet, j'ai conçu avec l'aide de mes collègues le design du jeu et le fonctionnement des énigmes. De plus, j'ai réalisé la programmation complète du jeu sur Unity et Arduino IDE.",
        logiciels: ["Unity", "Arduino IDE", "Max", "VCV Rack", "Adobe Illustrator", "Maya"],
        iframe: [],
        images: ["images/projet02_grotte_contenus01.jpg", "images/projet02_grotte_contenus02.jpg", "images/projet02_grotte_contenus03.jpg", "images/projet02_grotte_contenus04.png"],
    }, {
        titre: "CANEVAS COSMIQUE",
        couleur: "purple",
        imgPresentation: "images/projet03_canevas-cosmique.png",
        description: "Vous vous retrouvez dans un laboratoire contenant une table, après un peu de recherche vous découvrez que sur l'écran au-dessus de celle-ci se trouve une simulation d'un système solaire avec laquelle vous pouvez interagir en déposant des statues déclenchant différents phénomènes. Vous êtes invités à expérimenter sur cette table jusqu'à ce que les scientifiques reviennent, du moins... Dans cette installation intéractive, j'ai participé à la programmation de l'oeuvre dans Unity, l'installation physique de l'oeuvre et les montages vidéos",
        logiciels: ["Unity", "Touch Designer", "Davinci Resolve", "Maya/Blender", "Repear", "Figma", "OBS"],
        iframe: [`<iframe width="560" height="315" src="https://www.youtube.com/embed/Jrn4U27G5YY?si=GXibq9jUBFFprD-p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/5xu6JZipWec?si=-xqcfMbwkH0TxAjE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`],
        images: [],
    }
]
function checkDesactiver(balise){
    let variableTrouver = false;
    balise.classList.forEach((c)=>{
        if(c == "desactiver"){
            variableTrouver = true;
        }
    })
    return variableTrouver;
    } 
let carousselOeuvresSlides = document.querySelector(".swiperOeuvres .swiper-wrapper");
let imgOeuvreSelectionner = document.querySelector(".oeuvreWrapup__img");
let titreOeuvre = document.querySelector(".titreOeuvre")
let paragrapheOeuvre = document.querySelector(".paragrapheOeuvre");
let logicielsOeuvre = document.querySelector(".logicielsOeuvre");
let videosOeuvre = document.querySelector(".videosOeuvre");
let imagesOeuvre = document.querySelector(".imagesOeuvre");
let oeuvreContenus = document.querySelector(".oeuvreWrapup__contenus__ecran__interieur");
oeuvres.forEach((oeuvre) => {
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
        oeuvre.style.marginBottom = nbRdm + "px";
    }
    else if (toggleHautBas == true) {
        toggleHautBas = false;
        let nbRdm = Math.round(Math.random() * -150);
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
let animationTerminer = false;
function pageVersAccueil(){
    if(contenus.accueil.active == false){
        contenus.accueil.active = true;
        contenus.projets.active = false;
        swiperActif = false;
        if(checkDesactiver(carousselOeuvres) == false){
            carousselOeuvres.classList.add("desactiver");
            swiperOeuvres.slideTo(0);
        }
        gsap.to(".animationContenus", {
            y: "-110%",
            duration: 0.3,
        })
        setTimeout(() => {

            titre.innerText = contenus.accueil.titre;
            btnProjets.classList.remove("desactiver");
            if(checkDesactiver(imgScroll) == false){
                imgScroll.classList.add("desactiver");
            }
            if(checkDesactiver(imgSwipe) == false){
                imgSwipe.classList.add("desactiver");
            }
            gsap.fromTo(".animationContenus",
                { y: "100%" },
                {
                    y: 0,
                    duration: 0.8,
                    ease: "back.out"
                }
            )

            }, 300);
    }
}
function pageVersProjets(){
    if (contenus.projets.active == false) {
        gsap.to(".animationContenus", {
            y: "-100%",
            duration: 0.3,
        });
        setTimeout(() => {

            contenus.accueil.active = false;
            contenus.projets.active = true;

            titre.innerText = contenus.projets.titre;

            btnProjets.classList.add("desactiver");

            /**********************ANIMATION POUR ORDI***********************/

            if (window.innerWidth >= 1024) {
                imgScroll.classList.remove("desactiver");
                gsap.fromTo(".animationContenus",
                    { y: "100%" },
                    {
                        y: 0,
                        duration: 0.8,
                        ease: "back.out"
                    }
                )
                setTimeout(() => {
                    animationTerminer = true;
                    carousselOeuvres.classList.remove("desactiver");
                }, 900)
                setTimeout(() => {
                    //animation Scroll
                    gsap.to('.imgScroll', {
                        repeat: -1,
                        y: '20%',
                        yoyo: true,
                    },
                    );
                }, 1250)
            } else {
                imgSwipe.classList.remove("desactiver");
                gsap.fromTo(".animationContenus",
                    { y: "100%" },
                    {
                        y: 0,
                        duration: 0.8,
                        ease: "back.out"
                    }
                )
                setTimeout(() => {
                    animationTerminer = true;
                    carousselOeuvres.classList.remove("desactiver");
                }, 900)
                setTimeout(() => {
                    //animation Swipe
                    gsap.fromTo(".imgSwipe",
                        { x: "-10%" },
                        {
                            x: "10%",
                            repeat: -1,
                            yoyo: true,
                        }
                    )
                }, 1250)
            };
        }, 300);

    };
}
btnProjets.addEventListener("click", pageVersProjets);
btnPortfolio.addEventListener("click",pageVersProjets);
btnNom.addEventListener("click", pageVersAccueil);





swiperOeuvres.on("reachBeginning", function () {
    if (contenus.projets.active == true && swiperActif == true) {
        swiperActif = false;
        gsap.fromTo(".animationContenus",
            { y: "-110%" },
            {
                y: "0%",
                duration: 0.3,
            }
        );
    }
});

swiperOeuvres.on("slideChange", function () {
    if (contenus.projets.active == true && swiperOeuvres.activeIndex != 0 && swiperActif == false) {
        swiperActif = true;
        gsap.to(".animationContenus", {
            y: "-110%",
            duration: 0.3,
        });
    }
});


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
    oeuvresVideArr.forEach(() => {
        swiperOeuvres.removeSlide(0);
    });
    swiperOeuvres.addSlide(0, '<div class="swiper-slide vide"></div>');
    swiperOeuvres.slideTo(0);
}
