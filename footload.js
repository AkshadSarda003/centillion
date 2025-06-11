document.addEventListener('DOMContentLoaded', function() {
    // यहाँ हम 'footer.html' फ़ाइल को fetch कर रहे हैं
    fetch('footer.html')
        .then(response => {
            // चेक करें कि रिक्वेस्ट सफल हुई या नहीं
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text(); // रिस्पॉन्स को टेक्स्ट के रूप में पार्स करें
        })
        .then(html => {
            // 'footer-placeholder' ID वाले एलिमेंट में HTML को इन्सर्ट करें
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = html;
            } else {
                console.error('Error: Element with ID "footer-placeholder" not found.');
            }
        })
        .catch(error => {
            console.error('There has been a problem with your footer fetch operation:', error);
        });
});

// footer_dropdown_script.js
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('[data-dropdown-toggle]');

    function toggleDropdown(event) {
        const parentGroup = event.currentTarget.closest('.footer-links-group');
        if (window.innerWidth <= 960) { // Only enable dropdown on smaller screens
            parentGroup.classList.toggle('active');
        }
    }

    function handleResize() {
        dropdownToggles.forEach(toggle => {
            const parentGroup = toggle.closest('.footer-links-group');
            if (window.innerWidth > 960) {
                // Remove 'active' class and ensure ul is visible on larger screens
                parentGroup.classList.remove('active');
                // The CSS media query for min-width: 961px handles display: block
            }
            // For screens 960px and below, the CSS handles initial hidden state
        });
    }

    // Add click listeners to each dropdown toggle
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleDropdown);
    });

    // Add resize listener to handle transitions between mobile and desktop views
    window.addEventListener('resize', handleResize);

    // Initial check on page load
    handleResize();
});