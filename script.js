$(document).ready(function () {
  let currentNumber = 0;
  const numberDiv = $("#score");
  let timer;

  function incrementNumber() {
    numberDiv.text(currentNumber++);
    if (currentNumber > 97) {
      clearInterval(timer);
    }
  }

  function handleScroll() {
    const scrollTop = $(window).scrollTop();
    const elementTop = numberDiv.offset().top;
    const elementBottom = elementTop + numberDiv.outerHeight();
    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    if (
      elementBottom > viewportTop &&
      elementTop < viewportBottom &&
      currentNumber <= 97
    ) {
      if (!timer) {
        timer = setInterval(incrementNumber, 10);
      }
    } else {
      clearInterval(timer);
      timer = null;
    }

    const ctaFixedBlock = $(".cta-fixed-block");
    const ctaFixedBlockOffset = ctaFixedBlock.offset().top;

    if (scrollTop >= ctaFixedBlockOffset) {
      ctaFixedBlock.find(".scrollable").addClass("fixed");
    } else {
      ctaFixedBlock.find(".scrollable").removeClass("fixed");
    }

    if (scrollTop >= $(window).height()) {
      $(".floating-banner").addClass("shown");
    } else {
      $(".floating-banner").removeClass("shown");
    }
  }

  $(window).scroll(handleScroll);

  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 100,
      },
      1000
    );
  });

  // Timer

  var totalTime = 8 * 60;

  function formatTime(seconds) {
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  var timerInterval = setInterval(function () {
    if (totalTime >= 0) {
      $("#timer").text(formatTime(totalTime));
      totalTime--;
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);

  // Carousel
  $(".carousel-images").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  });
});
