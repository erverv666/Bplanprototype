let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  
}

window.onscroll = () =>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const workshopLink = document.querySelector('a[href="#workshop"]');

    workshopLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default link behavior (scrolling to #workshop)
        alert('Coming Soon'); // Shows the "Coming Soon" message when the link is clicked
    });
});

