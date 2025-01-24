//aos 초기화
/* AOS.init({
  duration: 2000, //동작시간 2초 내부 모두!
  disable: window.innerWidth < 768, //breckpoint이야 중담점에서 aos 동작하지 않도록 처리
});
 */



/* depth2 */
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().slideToggle();
});

/* mdepth2 */
$(".ham").click(function () {
  $(".mgnb_wrap ").animate({
    "right": "0"
  })
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").animate({
    "right": "-100%"
  })
});


document.addEventListener('mousemove', (e) => {
  let mouseX = e.pageX + 1; // document의 x좌표값
  let mouseY = e.pageY + 1; // document의 y좌표값

  let cursor = document.querySelector('.cursor');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
})

/* menu */

const goroke_list = new Swiper(".goroke_list", {
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  speed: 1000, // 슬라이드 동작 속도
  loop: true,
  breakpoints: {
    640: {
      // 가로해상도가 640px 이상일 경우
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      // 가로해상도가 768px 이상일 경우
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      // 가로해상도가 1024px 이상일 경우
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },

});


const donut_list = new Swiper(".donut_list", {
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  speed: 1000, // 슬라이드 동작 속도
  loop: true,

  breakpoints: {
    640: {
      // 가로해상도가 640px 이상일 경우
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      // 가로해상도가 768px 이상일 경우
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      // 가로해상도가 1024px 이상일 경우
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
});



const banner_slide = new Swiper(".banner_slide", {
  slidesPerView: "1", // 한 슬라이드에 보여줄 갯수
  spaceBetween: 0, // 슬라이드 사이 여백
});



/* gotop */
$(window).scroll(function () {
  let scrollpos = $(this).scrollTop();
  if (scrollpos > 300) {
    $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});





