/*導覽列點選跳轉*/
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
};

/*哈比旅行社按鈕*/
const agencyButton = document.getElementById('agencyButton')
const modal = document.getElementById('agencyModal')

agencyButton.addEventListener('click', () => {
  modal.style.display = 'flex';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



document.addEventListener("DOMContentLoaded", function() {  
  
  /*導覽列停留於畫面最上方*/
  const navbar = document.getElementById('navbar');
  const trigger = document.getElementById('nav-trigger');
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        navbar.classList.remove('scrolled');
      } else {
        navbar.classList.add('scrolled');
      }
    },
    { threshold: 0 }
  );
  observer.observe(trigger);

  /*天數導航下滑出現*/
  const dayNav = document.getElementById('dayNav');
  const day1 = document.getElementById('day1');
  const itinerary = document.getElementById('itinerary');
  
  window.addEventListener('scroll', () => {
    const day1Top = day1.getBoundingClientRect().top;
    const itineraryBottom = itinerary.getBoundingClientRect().bottom;
    const navbarHeight = navbar.offsetHeight;

    const hasEntered = day1Top <= (navbarHeight + 48);
    const notExited = itineraryBottom > navbarHeight;

    if (hasEntered && notExited) {
      dayNav.classList.add('visible');
    } else {
      dayNav.classList.remove('visible');
    }
  });


  /*天數導航點選跳轉*/
  const dayLinks = Array.from(document.querySelectorAll('.day-link'));

  dayLinks.forEach((link,idx) => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelectorAll('.day-dot').forEach(dot =>
        dot.classList.remove('active')
      );
      for (let i = 0; i <= idx; i++) {
        dayLinks[i].querySelector('.day-dot').classList.add('active');
      }

      const targetId = this.getAttribute("href").substring(1);
      const targetEl = document.getElementById(targetId);

      const yOffset = -112;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth'});
    });
  });
  
  
  /*左滑或右滑入頁面*/
  document.querySelectorAll('.day h2').forEach(dayh2 => {
    const dayh2Observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          dayh2.classList.add('visible');
        } else {
          dayh2.classList.remove('visible');
        }
      },
      { threshold: 0.2 }
    );
    dayh2Observer.observe(dayh2);
  });
  
  document.querySelectorAll('.subtitle-wrapper').forEach(subtitleWrapper => {
    const subtitleWrapperObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          subtitleWrapper.classList.add('visible');
        } else {
          subtitleWrapper.classList.remove('visible');
        }
      },
      { threshold: 0.2 }
    );
    subtitleWrapperObserver.observe(subtitleWrapper);
  });
  
  document.querySelectorAll('.image-gallery').forEach(imageGallery => {
    const imageGalleryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageGallery.classList.add('visible');
        } else {
          imageGallery.classList.remove('visible');
        }
      },
      { threshold: 0.2 }
    );
    imageGalleryObserver.observe(imageGallery);
  });
  
  document.querySelectorAll('.info').forEach(info => {
    const infoObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          info.classList.add('visible');
        } else {
          info.classList.remove('visible');
        }
      },
      { threshold: 0.2 }
    );
    infoObserver.observe(info);
  });
  
});
  