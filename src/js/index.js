import $ from 'jquery'
import '../scss/main.scss'
import 'slick-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "wow.js";
import "animate.css";




if (module.hot) {
  module.hot.accept()
}



$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    autoplay: true,
    asNavFor: ".dots",
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/left-arrow.svg" alt="left-arrow"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/right-arrow.svg" alt="right-arrow"/>',
  });

  // Dots slider
  $(".dots").slick({
    asNavFor: ".header-slider",
    slidesToShow: 4,
    slidesToScroll: 4,
  });

  // Surf slider
  $(".surf-slider").slick({
    infinite: true,
    autoplay: true,
    asNavFor: ".slider-map",
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/left-arrow.svg" alt="left-arrow"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/right-arrow.svg" alt="right-arrow"/>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 461,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // Map slider
  $(".slider-map").slick({
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 461,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
    ],
  });

  // Travel slider
  $(".travel__slider").slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/left-arrow.svg" alt="left-arrow"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/right-arrow.svg" alt="right-arrow"/>',
  });

  // Accommodation-slider
  $(".accommodation__slider").slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/left-arrow.svg" alt="left-arrow"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/right-arrow.svg" alt="right-arrow"/>',
  });

  // Shop-slider
  $(".shop__slider").slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/left-arrow.svg" alt="left-arrow"/>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/right-arrow.svg" alt="right-arrow"/>',
  });

  // Price calculator
  // Nights
  $(".btn-nights").on("click", function () {
    let btnNights = $(this);
    let nightsOldVal = $(".nights-input").val();
    let nightsNewVal = "";

    if (btnNights.text() == "+") {
      nightsNewVal = parseFloat(nightsOldVal) + 1;
    } else {
      // Don't allow decrementing below zero
      if (nightsOldVal > 1) {
        nightsNewVal = parseFloat(nightsOldVal) - 1;
      } else {
        nightsNewVal = 1;
      }
    }
    $(".nights-input").val(nightsNewVal);
  });

  // Guests
  $(".btn-guests").on("click", function () {
    let btnGuests = $(this);
    let guestsOldVal = $(".guests-input").val();
    let guestsNewVal = "";

    if (btnGuests.text() == "+") {
      guestsNewVal = parseFloat(guestsOldVal) + 1;
    } else {
      // Don't allow decrementing below zero
      if (guestsOldVal > 1) {
        guestsNewVal = parseFloat(guestsOldVal) - 1;
      } else {
        guestsNewVal = 1;
      }
    }
    $(".guests-input").val(guestsNewVal);
  });

  // Count summ on click
  $(".btn-calc").on("click", function () {
    var parents = $(this).parents(".accommodation-slider__details");
    let summ =
      $(".summ", parents).data("nights") * $(".nights-input", parents).val() +
      $(".summ", parents).data("guests") *
        ($(".guests-input", parents).val() - 1);
    $(".summ", parents).html("$" + summ);
  });

  // Default summ
  $(".control").each(function () {
    let parents = $(this).parents(".accommodation-slider__details");
    let summ =
      $(".summ", parents).data("nights") * $(".nights-input", parents).val() +
      $(".summ", parents).data("guests") *
        ($(".guests-input", parents).val() - 1);
    $(".summ", parents).html("$" + summ);
  });

  // Circle click
  $(".surfboard__box-circle").on("click", function () {
    $(this).toggleClass("active");
  });

  // Menu
  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
    $(this).toggleClass("rotate");
  });

  // Smooth Scroll
  $("li a").on("click", function () {
    var target = $(this).attr("href");
    var top = $(target).offset().top;
    $("html, body").animate({ scrollTop: top - 0 }, 500);
    return false;
  });

  // wow.js animation
  new WOW().init();
  
});

