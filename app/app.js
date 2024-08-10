const language = document.querySelector(".fa-language")
const modalBars = document.querySelector(".modalBars")
const Close = document.querySelector(".X")
const Az = document.querySelector(".Az")
const Tr = document.querySelector(".Tr")
const Eng = document.querySelector(".Eng")
const arrow = document.querySelector(".fa-arrow-up")
const bars = document.querySelector(".fa-bars")

bars.addEventListener("click", () => {
  modalBars.style.display = "flex"
  document.body.style.overflow = "hidden"
})

Close.addEventListener("click", () => {
  modalBars.style.display = "none"
  document.body.style.overflow = "visible"
})

$(document).ready(function () {

  var arrLang = {

    'az': {
      '1': 'Əsas Səhifə',
      '2': 'Haqqımızda',
      '3': 'Əlaqə Saxlayın',
      '4': 'Gələcəyinizi bu gün qurun!',
      '5': 'Öz sahələrində təcrübəli müəllimlərlə bütün səviyyələrə uyğun onlayn kurslarımızla bilik və bacarıqlarınızı növbəti səviyyəyə qaldırın. İstər karyeranızı inkişaf etdirmək, istərsə də yeni hobbi əldə etmək; Doğru yerdə düzgün təhsil tapacaqsınız. İndi qeydiyyatdan keçin və arzularınıza bir addım yaxınlaşın!'
    },


    'tr': {
      '1': 'Ana Sayfa',
      '2': 'Hakkımızda',
      '3': 'İletişim kurun',
      '4': 'Geleceğinizi Bugünden İnşa Edin!',
      '5': 'Alanında uzman eğitmenlerle, her seviyeye uygun online kurslarımızla bilgi ve becerilerinizi bir üst seviyeye taşıyın. İster kariyerinizde ilerlemek, ister yeni bir hobi edinmek isteyin; doğru yerde, doğru eğitimi bulacaksınız. Şimdi kaydolun, hayallerinize bir adım daha yaklaşın!'
    },


    'en': {
      '1': 'Home',
      '2': 'About',
      '3': 'Contact Us',
      '4': 'Build Your Future Today!',
      '5': 'Take your knowledge and skills to the next level with our online courses suitable for all levels, with expert instructors in the field. Whether you want to advance your career or take up a new hobby; you will find the right training in the right place. Register now, get one step closer to your dreams!'
    },

    'al': {
      '1': 'Hauptseite',
      '2': 'Über uns',
      '3': 'Kommunizieren',
      '4': 'Bauen Sie noch heute Ihre Zukunft auf!',
      '5': 'Bringen Sie Ihr Wissen und Ihre Fähigkeiten auf die nächste Stufe mit unseren Online-Kursen, die für alle Niveaus geeignet sind und von erfahrenen Dozenten auf ihrem Gebiet geleitet werden. Egal, ob Sie Ihre Karriere vorantreiben oder sich einem neuen Hobby widmen möchten; Sie finden die richtige Ausbildung am richtigen Ort. Melden Sie sich jetzt an und kommen Sie Ihren Träumen einen Schritt näher!'
    }
  };



  $('.dropdown-item').click(function () {
    localStorage.setItem('dil', JSON.stringify($(this).attr('id')));
    location.reload();
  });

  var lang = JSON.parse(localStorage.getItem("dil"));

  if (lang == "en") {
    $("#drop_yazı").html("English");
  }
  else {
    $("#drop_yazı").html("Türkçe");

  }

  $('a,h5,p,h1,h2,span,li,button,h3,label').each(function (index, element) {
    $(this).text(arrLang[lang][$(this).attr('key')]);

  });

});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});





var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
if (arrow) {
  arrow.style.display = "none"
  window?.addEventListener("scroll", () => {
    let scroll = scrollY;
    if (scroll > 800) {
      arrow.style.display = "block"
    } else {
      arrow.style.display = "none"
    }
  })
}


arrow?.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
})


