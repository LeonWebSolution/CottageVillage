document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const body = document.body;
    const overlay = document.querySelector(".overlay");
    const closeImg = document.querySelector(".close-img"); // Найти кнопку с классом "close-img"

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        nav.classList.toggle("active");
        overlay.classList.toggle("active");
        body.classList.toggle("overflow");
    });

    // Добавить обработчик события клика для кнопки "close-img"
    closeImg.addEventListener("click", function () {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        overlay.classList.remove("active");
        body.classList.remove("overflow");
    });
});

const swiper = new Swiper('.swiper-person', {
    slidesPerView: 'auto',
    spaceBetween: 30, 
    initialSlide: 0,
    loop: true,
    centerInsufficientSlides: true,
    navigation: {
    nextEl: '.pers-next',
    prevEl: '.pers-prev',
    },
    breakpoints: {
        // Настройка при ширине экрана менее 1000px
        1001: {
            slidesPerView: 3 // Показывать только один слайд
          },
        1000: {
          slidesPerView: 1 // Показывать только один слайд
        }
      }
});


const primers = new Swiper('.swiper-primers', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    navigation: {
    nextEl: '.primer-next',
    prevEl: '.primer-prev',
    }
});

const catalog = new Swiper('.catalog-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  navigation: {
  nextEl: '.primer-next',
  prevEl: '.primer-prev',
  }
});



const primers2 = new Swiper('.swiper-primers2', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    navigation: {
    nextEl: '.primer-next1',
    prevEl: '.primer-prev1',
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.all-btn');
    const slider = document.querySelector('.hidden-slider');

    button.addEventListener('click', function () {
        if (slider.classList.contains('visible')) {
            slider.classList.remove('visible');
            slider.classList.add('hidden');
            button.textContent = 'Посмотреть еще';
        } else {
            slider.classList.remove('hidden');
            slider.classList.add('visible');
            button.textContent = 'Скрыть';
        }
    });
});

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');

    title.addEventListener('click', () => {
        if (content.style.display === 'none' || content.style.display === '') {
            // Закрываем все аккордеоны и удаляем класс "active" у всех элементов
            accordionItems.forEach(item => {
                item.querySelector('.accordion-content').style.display = 'none';
                item.querySelector('.accordion-title').classList.remove('active');
                item.classList.remove('active'); // Удалить класс "active" у accordion-item
            });

            // Открываем только текущий аккордеон
            content.style.display = 'block';
            title.classList.add('active'); // Добавить класс "active" к accordion-title
            item.classList.add('active'); // Добавить класс "active" к accordion-item
        } else {
            // Закрываем текущий аккордеон при повторном клике
            content.style.display = 'none';
            title.classList.remove('active'); // Удалить класс "active" у accordion-title
            item.classList.remove('active'); // Удалить класс "active" у accordion-item
        }
    });
});

function showText(textIndex) {
    // Скрыть все тексты
    const allTexts = document.querySelectorAll(".tabs-text");
    allTexts.forEach(text => {
        text.classList.remove("one");
    });

    // Отобразить выбранный текст
    const selectedText = document.querySelector(`.tabs-text:nth-child(${textIndex})`);
    selectedText.classList.add("one");
}
const tabButtons = document.querySelectorAll('.tab-btn');

// Обработчик клика для каждой кнопки
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Удаляем класс "active" у всех кнопок
    tabButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    // Добавляем класс "active" к нажатой кнопке
    button.classList.add('active');
  });
});
const button = document.querySelector('.all-plans');
const hiddenElements = document.querySelectorAll('.noneh');

// Создаем переменную, чтобы отслеживать состояние
let isHidden = true;

// Добавляем обработчик события для кнопки
button.addEventListener('click', () => {
  if (isHidden) {
    // Если элементы скрыты, показываем их
    hiddenElements.forEach((element) => {
      element.style.display = 'block';
    });
    button.textContent = 'Скрыть';
  } else {
    // Если элементы видимы, скрываем их
    hiddenElements.forEach((element) => {
      element.style.display = 'none';
    });
    button.textContent = 'Показать еще';
  }

  // Инвертируем состояние
  isHidden = !isHidden;
});;




