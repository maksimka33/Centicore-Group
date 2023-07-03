/*  ===================== SLIDER ===================== */

$(document).ready(function () {
   $(".partners__slider").slick({
      slidesToShow: 6,
      slidesToScroll: 2,
   });
});

/*  ===================== COUNTER ===================== */

window.addEventListener("click", function (event) {
   if (event.target.dataset.action === "plus") {
      const counterWrapper = event.target.closest(".counter-wrapper");
      const counter = counterWrapper.querySelector("[data-counter]");

      counter.innerText = ++counter.innerText;
   }
   if (event.target.dataset.action === "minus") {
      const counterWrapper = event.target.closest(".counter-wrapper");
      const counter = counterWrapper.querySelector("[data-counter]");

      if (parseInt(counter.innerText) > 0) {
         counter.innerText = --counter.innerText;
      }
   }
});

/*  ===================== NoUiSlider ===================== */

var arbitraryValuesSlider = document.getElementById("slider-range");
var pipsSteps = document.getElementById("pips-steps");

var arbitraryValuesForSlider = [
   "",
   "3 месяца",
   "6 месяцев",
   "9 месяцев",
   "1 год",
   "1,5 года",
   "2 года",
];

var format = {
   to: function (value) {
      return arbitraryValuesForSlider[Math.round(value)];
   },
   from: function (value) {
      return arbitraryValuesForSlider.indexOf(value);
   },
};

noUiSlider.create(arbitraryValuesSlider, {
   // start values are parsed by 'format'
   start: [""],
   snap: true,
   connect: true,
   range: {
      min: 0,
      "7%": arbitraryValuesForSlider.length - 6,
      "20%": arbitraryValuesForSlider.length - 5,
      "33%": arbitraryValuesForSlider.length - 4,
      "45%": arbitraryValuesForSlider.length - 3,
      "70%": arbitraryValuesForSlider.length - 2,
      max: arbitraryValuesForSlider.length - 1,
   },

   step: 1,
   format: format,
   pips: { mode: "steps", format: format, density: 50 },
});

/*  ===================== FORM ===================== */
