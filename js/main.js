const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY > 500) {
        // badgeEl.style.display = 'none'
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            display: 'none'
        }) //요소, 지속시간(초), 옵션
    } else {
        // badgeEl.style.display = 'block'
        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        }) //요소, 지속시간(초), 옵션
    }
}, 300))

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1,
    })
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    pagination: { // 페이지 번호 사용 여부
      el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
      nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
    }
  })

  new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
  })

  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotion = false;
  promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
  })

  function floatingObject(selector, delay, size) {
    gsap.to(selector, 1, {
        y: 20,
        repeat: -1,
        yoyo:true,
        ease: Power1.easeInOut,
        delay: 1
    })
  }

//   function floatingObject(selector, delay, size) {
//     gsap.to(
//         selector, 
//         random(1.5, 2.5), 
//         {
//             y: size,
//             repeat: -1,
//             yoyo:true,
//             ease: Power1.easeInOut,
//             delay: random(0, delay)
//         }   
//     )
//   }

  floatingObject('.floating1', 1, 15);
  floatingObject('.floating2', 0.5, 15);


const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ 
      triggerElement: spyEl, 
      triggerHook: .8 
    })
    .setClassToggle(spyEl, 'show') 
    .addTo(new ScrollMagic.Controller()) 
})


const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

