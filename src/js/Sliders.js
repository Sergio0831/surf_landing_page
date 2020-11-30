import $ from 'jquery';
import 'slick-carousel';


export function imageSliders() {
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
  }



