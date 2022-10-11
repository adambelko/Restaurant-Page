
const addNav = (content) => {
    const nav = document.createElement("div");
    nav.className = "content_navbar";
    
    addNavName(nav);
    addNavMenu(nav);
    
    content.appendChild(nav);
}

function addNavName(nav) {
    const navName = document.createElement("div");
    navName.className = "navbar-name";
    navName.textContent = "SUSHI HERO";
    nav.appendChild(navName);
}

const addNavMenu = (nav) => {
    const navMenu = document.createElement("div");
    navMenu.className = "navbar-menu";
    const navList = document.createElement("li");

    const navUlHome = document.createElement("ul");
    const linkHome = document.createElement("a");
    linkHome.className = "menu-home";
    linkHome.textContent = "HOME";

    const navUlMenu = document.createElement("ul");
    const linkMenu = document.createElement("a");
    linkMenu.className = "menu-menu";
    linkMenu.textContent = "MENU";

    const navUlContact = document.createElement("ul");
    const linkContact = document.createElement("a");
    linkContact.className = "menu-contact";
    linkContact.textContent = "CONTACT";
    
    nav.appendChild(navMenu);
    navMenu.appendChild(navList);
    navList.appendChild(navUlHome);
    navList.appendChild(navUlMenu);
    navList.appendChild(navUlContact);
    navUlHome.appendChild(linkHome);
    navUlMenu.appendChild(linkMenu);
    navUlContact.appendChild(linkContact);
};

const addIntro = (content) => {
    const main = document.createElement("div");
    main.className = "main";
    const intro = document.createElement("div");
    intro.className = "content_intro";
    intro.textContent = "WELCOME TO SUSHI HERO";
    const introNewPara = document.createElement("p");
    introNewPara.textContent = "JAPANESE RESTAURANT & SUSHI BAR";

    content.appendChild(main);
    main.appendChild(intro);
    intro.appendChild(introNewPara);
};

const loadContent = () => {
    const content = document.querySelector(".content");

    addNav(content);
    addIntro(content);
};

const eraseMain = () => {
    const content = document.querySelector(".content");
    const main = document.querySelector(".main");

    content.removeChild(main);
}

export {loadContent, addNav, eraseMain, addIntro};