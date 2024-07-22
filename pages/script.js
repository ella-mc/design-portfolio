// script.js

function handleHighlightScroll() {
    const highlightedElements = document.querySelectorAll('.highlighted');
    if (highlightedElements.length === 0) return; // Exit if no elements found

    function updateHighlight() {
        highlightedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            // Calculate the position relative to the viewport
            if (elementTop < viewportHeight * 0.75) {
                element.classList.add('active-highlight'); // Add active-highlight class
            } else {
                element.classList.remove('active-highlight'); // Remove active-highlight class
            }
        });
    }

    // Event listener for scroll events
    window.addEventListener('scroll', updateHighlight);

    // Call updateHighlight once on page load to initialize the highlight
    updateHighlight();
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    handleHighlightScroll();
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
  

 // Sticky tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    handleApproachScroll();

    const tabsWrapper = document.querySelector('.tabs-wrapper');
    const tabsOffset = tabsWrapper.offsetTop;

    function handleScroll() {
        if (window.pageYOffset > tabsOffset) {
            tabsWrapper.classList.add('sticky');
        } else {
            tabsWrapper.classList.remove('sticky');
        }
    }

    window.addEventListener('scroll', handleScroll);
});

// Tab switching function
function openTab(tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}