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
});
