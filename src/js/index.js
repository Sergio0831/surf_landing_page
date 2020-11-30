import $ from 'jquery'
import '../scss/main.scss'
import 'slick-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css"
import { imageSliders } from "./Sliders"
import { priceCalculator } from "./Price-calculator"


if (module.hot) {
  module.hot.accept()
}

imageSliders();
priceCalculator();


$(function () {
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
});



