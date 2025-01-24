//aos 초기화
/* AOS.init({
  duration: 2000, //동작시간 2초 내부 모두!
  disable: window.innerWidth < 768, //breckpoint이야 중담점에서 aos 동작하지 않도록 처리
});
 */
document.addEventListener('mousemove', (e) => {
  let mouseX = e.pageX + 1; // document의 x좌표값
  let mouseY = e.pageY + 1; // document의 y좌표값

  let cursor = document.querySelector('.cursor');
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
})


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

/* gotop */
$(window).scroll(function () {
  let scrollpos = $(this).scrollTop();
  if (scrollpos > 300) {
    $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});


