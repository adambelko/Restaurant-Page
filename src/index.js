import {addIntro, loadContent} from "./homepage";
import addMenu from "./menu";
loadContent();

const swithMenuTabs = () => {
    const content = document.querySelector(".content");
    const menu = document.querySelector(".menu-menu");
    menu.addEventListener("click", (e) => {
        eraseMain();
        addMenu();
    });

    const home = document.querySelector(".menu-home");
    home.addEventListener("click", (e) => {
        eraseMain();
        addIntro(content);
    });
};

const eraseMain = () => {
    const content = document.querySelector(".content");
    const main = document.querySelector(".main");
    content.removeChild(main);
};

swithMenuTabs();