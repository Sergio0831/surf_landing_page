  import $ from "jquery"
  
export function priceCalculator () {
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
  }


