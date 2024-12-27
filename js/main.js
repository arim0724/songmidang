/* menu */

const goroke_list = new Swiper(".goroke_list", {
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  speed: 1000, // 슬라이드 동작 속도
  loop: true,
  slidesPerView: "5", // 한 슬라이드에 보여줄 갯수
  spaceBetween: 30, // 슬라이드 사이 여백
});


const donut_list = new Swiper(".donut_list", {
  autoplay: {
    delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
    disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  speed: 1000, // 슬라이드 동작 속도
  loop: true,
  slidesPerView: "5", // 한 슬라이드에 보여줄 갯수
  spaceBetween: 100, // 슬라이드 사이 여백
});



const banner_slide = new Swiper(".banner_slide", {
  /*   autoplay: {
      delay: 0, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 5000, // 슬라이드 동작 속도
    loop: true, */
  slidesPerView: "1", // 한 슬라이드에 보여줄 갯수
  spaceBetween: 0, // 슬라이드 사이 여백
});





