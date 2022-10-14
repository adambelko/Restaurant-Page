const addMenu = () => {
    const content = document.querySelector(".content");
    const main = document.createElement("div");
    main.className = "main";
    
    const contentMenu = document.createElement("div");
    contentMenu.className = "content_menu";
    const menuImg = document.createElement("img");
    menuImg.src = "../images/Sushi-Hero-Menu.jpg";
    
    content.appendChild(main);
    main.appendChild(contentMenu);
    contentMenu.appendChild(menuImg);
};

export default addMenu;