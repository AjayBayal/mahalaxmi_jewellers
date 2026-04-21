// --- Image Change Logic ---

function changeImage(thumbnailElement) {
    const newSrc = thumbnailElement.src;
    document.getElementById('mainImage').src = newSrc;

    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnailElement.classList.add('active');
}


// --- Cart Quantity Logic ---

function updateQuantity (change) {
    const qtyInput = document.getElementById('qty');
    let currentValue = parseInt(qtyInput.value);

    let newValue = currentValue + change;
    if (newValue < 1) newValue = 1;

    qtyInput.value = newValue;
}

// --- Wishlist Toggle Logic---

document.addEventListener('DOMContentLoaded', () => {
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (wishlistBtn) {

        wishlistBtn.addEventListener('click', function() {
            this.classList.toggle('active-wishlist');
            const icon = this.querySelector('i');

            if (icon.classList.contains ('fa-regular')) {
                icon.classList.remove ('fa-regular');
                icon.classList.add ('fa-solid');
            } else {
                icon.classList.remove ('fa-solid');
                icon.classList.add ('fa-regular');
            }
        });
    }
});


// ---Accordian Logic ---

function toggleAccordion(contentId) {
    const contentBox = document.getElementById(contentId);
    const button = contentBox.previousElementSibling;

    contentBox.classList.toggle('show');
    button.classList.toggle('active');
}