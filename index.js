const width = window.innerWidth;
        if (width < 768) {
        const swiper = new Swiper('.swiper', {
        
        direction: 'horizontal',
        loop: true,
        spaceBetween: 16,

        slidesPerView: 1.1,
      breakpoints: {
        320: {
          slidesPerView: 1.2
        },
        480: {
          slidesPerView: 1.8
        },
        640: {
          slidesPerView: 2.5
        }
      },  
        
        pagination: {
            el: '.swiper-pagination',
        },
        });
    }

    let buttonText = document.querySelector('.strelka-logo__text');
    let sectionBrandList = document.querySelector('.section-brand__list');

    buttonText.onclick = function () {
      if (buttonText.textContent === 'Показать все') {
        buttonText.textContent = 'Скрыть';
        document.querySelector('.strelka-logo__icon').style.rotate = '180deg';
        sectionBrandList.classList.remove('hide')
      } else {
        buttonText.textContent = 'Показать все';
        document.querySelector('.strelka-logo__icon').style.rotate = '';
        sectionBrandList.classList.add('hide');
      }

      
    };
