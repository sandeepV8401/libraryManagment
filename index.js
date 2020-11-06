
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}


class Display {
    constructor() {
    }
    add(book) {
        let tbody = document.getElementById("tbody");
        let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        </tr>`;
        tbody.innerHTML += uiString;
    }
    clear(book) {
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.lenght < 2) {
            return false;

        } else {
            return true;
        }
    }
    show(type, dispmsg) {
        let msg = document.getElementById("msg");
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message:</strong> ${dispmsg}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;

        setTimeout(function () {
            msg.innerHTML = "";
        }, 2000);
    }
}





let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    let name = document.getElementById("bookname").value;
    let author = document.getElementById("authorname").value;
    let type;
    let computer = document.getElementById("computer");
    let fiction = document.getElementById("fiction");
    let cooking = document.getElementById("cooking");
    if (computer.checked) {
        type = computer.value;
    }
    else if (fiction.checked) {
        type = fiction.checked;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear(book);
        display.show('success', 'Book has been added');
    }
    else {
        display.show('danger', 'can not add');
    }



    e.preventDefault();

}