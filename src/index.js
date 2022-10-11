import {eraseMain, addIntro, loadContent} from "./homepage";
import addMenu from "./menu";
loadContent();

const swithTabs = () => {
    const menu = document.querySelector(".menu-menu");
    menu.addEventListener("click", (e) => {
        eraseMain();
        addMenu();
    });

    const home = document.querySelector(".menu-home");
    home.addEventListener("click", (e) => {
        const content = document.querySelector(".content");
        eraseMain();
        addIntro(content);
    });
};

swithTabs();
