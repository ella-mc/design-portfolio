// script.js

// Function to handle scroll event for approach section
function handleApproachScroll() {
    const highlightText = document.querySelector('.highlight-text');
    if (!highlightText) return; // Exit if element not found (optional)

    function updateHighlight() {
        const elementTop = highlightText.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Calculate the position relative to the viewport
        if (elementTop < viewportHeight * 0.75) {
            highlightText.classList.add('highlighted'); // Add highlighted class
        } else {
            highlightText.classList.remove('highlighted'); // Remove highlighted class
        }
    }

    // Event listener for scroll events
    window.addEventListener('scroll', updateHighlight);

    // Call updateHighlight once on page load to initialize the highlight
    updateHighlight();
}

// Call the function when the DOM is ready (optional)
document.addEventListener('DOMContentLoaded', function() {
    handleApproachScroll();
});




function openTab(tabName) {
    var i, tabcontent, tablinks;
  
    // Hide all elements with class="tabcontent" by default */
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the class "active" from all elements with class="tablink"
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the specific tab content
    document.getElementById(tabName).style.display = "block";
  
    // Add the "active" class to the button that opened the tab
    event.currentTarget.className += " active";
  }
  