const slider = document.getElementById("slider");
let index = 0;

function getCardWidth() {
  const card = slider.querySelector(".card");
  return card.offsetWidth + 20; // include gap
}

function slide(dir) {
  const cardWidth = getCardWidth();
  const totalCards = slider.children.length;
  index += dir;

  if (index < 0) index = totalCards - 1;
  if (index >= totalCards) index = 0;

  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

window.addEventListener("resize", () => {
  slider.style.transform = `translateX(-${index * getCardWidth()}px)`;
});

setInterval(() => {
  slide(1);
}, 4000);

document.addEventListener('DOMContentLoaded', () => {
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const carousel = document.querySelector('.product-carousel'); // This is the scrollable container
  const cardWidth = document.querySelector('.product-card') ? document.querySelector('.product-card').offsetWidth : 300; // Get card width, default to 300px

  // Function to calculate scroll amount, considering gap
  const getScrollAmount = () => {
    const gap = parseFloat(getComputedStyle(document.querySelector('.carousel-inner')).gap);
    return cardWidth + gap;
  };

  leftArrow.addEventListener('click', () => {
    carousel.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth'
    });
  });

  rightArrow.addEventListener('click', () => {
    carousel.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth'
    });
  });

});

document.addEventListener('DOMContentLoaded', () => {
  const infoBoxes = document.querySelectorAll('.info-box');
  infoBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.classList.add('animate');
    }, 100 * index);
  });

});

// script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  let counted = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counters.forEach(counter => {
          const target = +counter.getAttribute("data-target");
          const speed = 200; // lower = faster

          const updateCount = () => {
            const current = +counter.innerText;
            const increment = Math.ceil(target / speed);

            if (current < target) {
              counter.innerText = current + increment;
              setTimeout(updateCount, 20);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });
        counted = true;
      }
    });
  }, {
    threshold: 0.5
  });

  const section = document.getElementById("why-section");
  if (section) observer.observe(section);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});

// script.js

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".fade-in, .slide-up, .zoom-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  elements.forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission


      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !phone || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      console.log('Form Submitted!');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Message:', message);

      setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      }, 1000);
    });
  }

  const liveChatLink = document.querySelector('.detail-link');
  if (liveChatLink) {
    liveChatLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.textContent === 'Start Live Chat') {
        alert('Live Chat functionality would be integrated here!');
      }
    });
  }
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    item.classList.toggle('open');
    const icon = btn.querySelector('.icon');
    icon.textContent = item.classList.contains('open') ? '−' : '+';
  });
});



  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const humburger = document.querySelector('.humburger');
    navLinks.classList.toggle('active');
    humburger.classList.toggle('active');
  }
