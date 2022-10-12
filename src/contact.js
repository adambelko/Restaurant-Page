const addContact = () => {
    const content = document.querySelector(".content");
    const main = document.createElement("div");
    main.className = "main";
    
    const contactPage = document.createElement("div");
    contactPage.className = "main_contact";

    const addressColumn = document.createElement("div");
    addressColumn.className = "contact-address";
    addressColumn.textContent = "Address:";
    const addressParaOne = document.createElement("p");
    addressParaOne.className = "contact-text";
    addressParaOne.textContent = "127a Pacific Pde"
    const addressParaTwo = document.createElement("p");
    addressParaTwo.className = "contact-text";
    addressParaTwo.textContent = "Dee Why";

    const contactColumn = document.createElement("div");
    contactColumn.className = "contact-phone";
    contactColumn.textContent = "Phone Contact:";
    const contactParaOne = document.createElement("p");
    contactParaOne.className = "contact-text";
    contactParaOne.textContent = "0415 372 554";

    content.appendChild(main);
    main.appendChild(contactPage);
    contactPage.appendChild(addressColumn);
    contactPage.appendChild(contactColumn);
    addressColumn.appendChild(addressParaOne);
    addressColumn.appendChild(addressParaTwo);
    contactColumn.appendChild(contactParaOne);
};

export default addContact;