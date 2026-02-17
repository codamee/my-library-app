let mylibrary = [];

class Book{
    constructor(name,author,pages,status) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.id=crypto.randomUUID()
    }
    toggleReadStatus() {
        this.status = (this.status === "Already Read") ? "Not yet read" : "Already Read";
    }
}

function addBookToLibrary(name, author, pages, status) {
    let book = new Book(name, author, pages, status);
    mylibrary.push(book);
}

addBookToLibrary("Atomic Habits", "James clear", 350, "Not yet read");

function libraryValues() {
    let btn = document.querySelector("form p button");
    let form = document.querySelector("form");
    btn.addEventListener("click", (e) => {
        
        let formData = new FormData(form);
        let data = Object.fromEntries(formData.entries());
        if (data.name && data.pages && data.author) {
            addBookToLibrary(
                data.name,
                data.author,
                data.pages || "0",
                data.status == undefined ? "Not yet read" : "Already Read",
            );
            loadLibrary();
            form.reset();
        }
    });
}

libraryValues();

let container = document.querySelector(".container");
function loadLibrary() {
    container.innerHTML = ``;
    mylibrary.forEach((item) => {
        const statusClass = item.status === "Already Read" ? "green" : "red";
        let elem = document.createElement("div");
        elem.className = "card";
        elem.innerHTML = `
                    <p>${item.name}</p>
                
                    <p class="readStatus ${statusClass} " data-id="${item.id}">${item.status}</p>
                    <img src="Assets/cancel.svg"class="cancelBtn" data-id="${item.id}" alt="" />
                    <p>${item.pages} pages</p>
                    <p>- ${item.author}</p>
`;
        container.append(elem);
    });
}

loadLibrary();

container.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("readStatus")) {
        let dataId = e.target.dataset.id;
        let id = mylibrary.find((item) => item.id == dataId);
        id.toggleReadStatus()
    }
    
    if (e.target.classList.contains("cancelBtn")) {
        let dataId = e.target.dataset.id;
        mylibrary = mylibrary.filter((book) => book.id !== dataId);
    }
    
    loadLibrary();
    
});
