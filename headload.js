document.addEventListener('DOMContentLoaded', function() {
    // यहाँ हम 'header.html' फ़ाइल को fetch कर रहे हैं
    fetch('header.html')
        .then(response => {
            // चेक करें कि रिक्वेस्ट सफल हुई या नहीं
            if (!response.ok) {
                // अगर नेटवर्क रिस्पॉन्स ठीक नहीं है तो एरर दें
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text(); // रिस्पॉन्स को टेक्स्ट के रूप में पार्स करें
        })
        .then(html => {
            
            const headerPlaceholder = document.getElementById('header-placeholder');
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = html;
            } else {
                // अगर placeholder नहीं मिला तो कंसोल में एरर दिखाएं
                console.error('Error: Element with ID "header-placeholder" not found.');
            }
        })
        .catch(error => {
            // Fetch ऑपरेशन में कोई भी एरर होने पर कंसोल में दिखाएं
            console.error('There has been a problem with your fetch operation:', error);
        });
});


