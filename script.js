document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.querySelector('.ri-menu-3-line');
    var searchBox = document.querySelector('.responsive_search-box');
    var navbar = document.querySelector('.responsive_navbar');

    // Function to handle menu button click and toggle navbar visibility
    function handleMenuClick() {
      if (navbar.style.display === 'none') {
        searchBox.style.display = 'none';
        navbar.style.display = 'block';
      } else {
        navbar.style.display = 'none';
      }
    }

    // Function to handle outside click on navbar
    function handleOutsideClick(event) {
      if (!navbar.contains(event.target) && event.target !== menuButton) {
        navbar.style.display = 'none';
      }
    }

    // Attach click event to menu button
    menuButton.addEventListener('click', handleMenuClick);

    // Attach click event to document to handle outside clicks on navbar
    document.addEventListener('click', handleOutsideClick);
  });