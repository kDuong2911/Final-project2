function bookshop(bookID) {

    var bookURL  = {
        "book-1": "../book1/index.html",
        "book-2": "../book2/index.html",
        "book-3": "../book3/index.html",
        "book-4": "../book4/index.html",
        "book-5": "../book5/index.html",
        "book-6": "../book6/index.html",
        "book-7": "../book7/index.html",
        "book-8": "../book8/index.html",
        "book-9": "../book9/index.html",
        "book-10": "../book10/index.html",
        
    };
    var url = bookURL[bookID]; 

    if (url) {
        window.location.href = url;
    } else {
        console.log("Không tìm thấy URL cho ID sách " + bookID);
    }
}


function openLogin() {
    var loginURL = "../login/index.html";
    window.location.href = loginURL;
}