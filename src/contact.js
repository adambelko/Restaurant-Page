const addContact = () => {
    const content = document.querySelector(".content");
    const main = document.createElement("div");
    main.className = "main";
    
    const contactPage = document.createElement("div");
    contactPage.className = "main_contact";

    const address = ["127a Pacific Pde", "Narrabeen", "2099 NSW Australia"];
    const contactNumber = ["0415 372 554"];

    const addressHeader = createContactHeader("address", "Address: ");
    addText(address, addressHeader);

    const contactHeader = createContact("phone", "Contact: ");
    addText(contactNumber, contactHeader);

    content.appendChild(main);
    main.appendChild(contactPage);
    contactPage.appendChild(addressHeader);
    contactPage.appendChild(contactHeader);
};

const createContactHeader = (type, text) => {
    const header = document.createElement("div");
    header.className = `contact-${type}`;
    header.textContent = text;
    return header;
};

const addText = (text, parentElement) => {
    text.forEach(string => {
        const para = document.createElement("p");
        para.className = "contact-text";
        para.textContent = string;
        parentElement.appendChild(para);
    });
};

export default addContact;