class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);/*botao do menu*/
        this.navList = document.querySelector(navList);/*lista da nav*/
        this.navLinks = document.querySelector(navLinks);/*links da lista da nav (refs)*/
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click");
    }
}