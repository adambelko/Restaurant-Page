const createNav = (content) => {
    const nav = document.createElement("div");
    nav.className = "content_navbar";
    
    createNavName(nav);
    createNavMenu(nav);
    
    content.appendChild(nav);
}

const createNavName = (nav) => {
    const navName = document.createElement("div");
    navName.className = "navbar-name";
    navName.textContent = "SUSHI HERO";
    nav.appendChild(navName);
};

const createNavMenu = (nav) => {
    const navMenu = document.createElement("div");
    navMenu.className = "navbar-menu";
    const navList = document.createElement("li");

    const navUlHome = document.createElement("ul");
    const linkHome = document.createElement("a");
    linkHome.textContent = "HOME";

    const navUlMenu = document.createElement("ul");
    const linkMenu = document.createElement("a");
    linkMenu.textContent = "MENU";

    const navUlContact = document.createElement("ul");
    const linkContact = document.createElement("a");
    linkContact.textContent = "CONTACT";
    
    nav.appendChild(navMenu);
    navMenu.appendChild(navList);
    navList.appendChild(navUlHome);
    navList.appendChild(navUlMenu);
    navList.appendChild(navUlContact);
    navUlHome.appendChild(linkHome);
    navUlMenu.appendChild(linkMenu);
    navUlContact.appendChild(linkContact);
}

const createIntro = (content) => {
    const intro = document.createElement("div");
    intro.className = "content_intro";
    intro.textContent = "WELCOME TO SUSHI HERO";
    const introNewPara = document.createElement("p");
    introNewPara.textContent = "JAPANESE RESTAURANT & SUSHI BAR";

    content.appendChild(intro);
    intro.appendChild(introNewPara);
    
}

const loadContent = () => {
    const content = document.querySelector(".content");

    createNav(content);
    createIntro(content);
};


export default loadContent;