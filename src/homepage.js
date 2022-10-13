
const addNav = (content) => {
    const nav = document.createElement("div");
    nav.className = "content_navbar";

    const navMenu = document.createElement("div");
    navMenu.className = "navbar-menu";
    const navMenuList = document.createElement("li");

    addRestaurantName(nav);
    addNavMenuListItem("home", navMenuList);
    addNavMenuListItem("menu", navMenuList);
    addNavMenuListItem("contact", navMenuList);

    content.appendChild(nav);
    nav.appendChild(navMenu);
    navMenu.appendChild(navMenuList);
};

const addRestaurantName = (nav) => {
    const restaurantName = document.createElement("div");
    restaurantName.className = "navbar-restaurant-name";
    restaurantName.textContent = "SUSHI HIRO";
    nav.appendChild(restaurantName);
};

const addNavMenuListItem = (text, navMenuList) => {
    const navListItem = document.createElement("ul");
    const listItemLink = document.createElement("a");
    listItemLink.className = `menu-${text}`;
    listItemLink.textContent = text.toUpperCase();
    navMenuList.appendChild(navListItem);
    navListItem.appendChild(listItemLink);
};

const addIntro = (content) => {
    const main = document.createElement("div");
    main.className = "main";
    const intro = document.createElement("div");
    intro.className = "main_intro";
    intro.textContent = "WELCOME TO SUSHI HIRO";
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

export {loadContent, addNav, addIntro};