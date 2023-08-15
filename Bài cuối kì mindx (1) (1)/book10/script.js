document.addEventListener('DOMContentLoaded', function () {
    const addToWishlistButton = document.getElementById('add-to-wishlist');
    const wishlistContent = document.getElementById('wishlist-content');

    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Update the wishlist content with stored items
    storedWishlist.forEach(item => {
        wishlistContent.innerHTML += `<p>${item.title} by ${item.author}</p>`;
    });

    addToWishlistButton.addEventListener('click', function () {
        const bookTitle = document.querySelector('#title h2').textContent;
        const bookAuthor = document.querySelector('#title p').textContent;

        const isBookInWishlist = storedWishlist.some(item => item.title === bookTitle);

        if (!isBookInWishlist) {
            storedWishlist.push({ title: bookTitle, author: bookAuthor });
            localStorage.setItem('wishlist', JSON.stringify(storedWishlist));

            wishlistContent.innerHTML += `<p>${bookTitle} by ${bookAuthor}</p>`;
            alert('Book added to wishlist!');
        } else {
            alert('Book is already in the wishlist.');
        }
    });
});