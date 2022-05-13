class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind();
    }
  
    /* metodo para animar os links */
    animateLinks() {
      /* verificação simples se cada link possui a prop. animation do DOM. Caso possuo, iremos remover. CAso não possua, iremos adicionar */
      this.navLinks.forEach((link, index) => {
        //   console.log(index / 7 + 0.3);
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.6
            }s`);
      });
    }
  
    handleClick = () => {
      // console.log(this);
      this.navList.classList.toggle(this.activeClass);
      /* animar o icone hamburger convertendo em X */
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    };
    //   addClickEvent() {
    //     this.mobileMenu.addEventListener("click", () => {
    //       console.log("Hey ☆");
    //     });
    //   }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
    /*metodo que inicia a funcão que testa se mobileMenu existe no document */
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    /* classes */
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
  );
  mobileNavbar.init();
  