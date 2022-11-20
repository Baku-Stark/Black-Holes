/*============================================================*/
/*CONFIGURAÇÃO [SLIDE]*/
var slideBot = {
    distance: '150%',
    origin: 'bottom',
    duration: 1000,
    opacity: 0
};

var slideContent = {
    distance: '150%',
    origin: 'top',
    duration: 1000,
    opacity: 0
};

ScrollReveal().reveal('.slideBot', slideBot);
ScrollReveal().reveal('.slideContent', slideContent);
/*CONFIGURAÇÃO [SLIDE]*/
/*============================================================*/


/*============================================================*/
/*CONFIGURAÇÃO [NAVBAR]*/
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }


    handleClick(){
        this.animateLinks();
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-bar-list",
    ".nav-bar-list li",
);
mobileNavbar.init();
/*CONFIGURAÇÃO [NAVBAR]*/
/*============================================================*/