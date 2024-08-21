function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    // Text change functionality with typing effect
    const textElement = document.querySelector('.section__text__p2');
    const texts = ["Art teacher", "English teacher", "Netball Coach (don't like it though)", "Art Competitions", "Team Player"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = 2000;
  
    function type() {
        const currentText = texts[index];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
  
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, delay);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            type();
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }
  
    type();
  
  });
  
  document.addEventListener('scroll', function () {
      const prodjectsSection = document.querySelector('.lscroll');
      const rect = prodjectsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top <= windowHeight && rect.bottom >= 0) {
          const scrollPercentage = (windowHeight - rect.top) / (rect.height + windowHeight);
          const backgroundPositionY = 100 - (scrollPercentage * 150);
          prodjectsSection.style.backgroundPositionY = `${backgroundPositionY}%`;
      }
  });
  
  document.addEventListener('scroll', function () {
      const prodjectsSection = document.querySelector('.rscroll');
      const rect = prodjectsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top <= windowHeight && rect.bottom >= 0) {
          const scrollPercentage = (windowHeight - rect.top) / (rect.height + windowHeight);
          const backgroundPositionY = -60 + (scrollPercentage * 150);
          prodjectsSection.style.backgroundPositionY = `${backgroundPositionY}%`;
      }
  });
  
  document.addEventListener('scroll', function () {
      const prodjectsSection = document.querySelector('.contact-info-upper-container');
      const rect = prodjectsSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      if (rect.top <= windowHeight && rect.bottom >= 0) {
          const scrollPercentage = (windowHeight - rect.top) / (rect.height + windowHeight);
          const backgroundPositionY = 163 - (scrollPercentage * 250);
          prodjectsSection.style.backgroundPositionY = `${backgroundPositionY}%`;
      }
  });