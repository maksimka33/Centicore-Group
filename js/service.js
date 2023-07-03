const cartWrapperService = document.querySelector(
   ".form__total-wrapper-service"
);

window.addEventListener("click", function (event) {
   if (event.target.hasAttribute("data-radio")) {
      const cardRadio = event.target.closest(".radio-item");

      const radioInfo = {
         id: cardRadio.dataset.id,
         title: cardRadio.querySelector(".radio__item-text").innerText,
      };

      const itemInCart = cartWrapperService.querySelector(
         `[data-id="${radioInfo.id}"]`
      );

      if (itemInCart) {
         const counterElement = itemInCart.querySelector("[data-counter]");
      } else {
         const cartItemHTML = ` 
   
         <div class="form__total-item" data-id="${radioInfo.id}">
                        <div class="form__total-text">${radioInfo.title}</div>
                        <div class="form__total-icon">
                           <a href="#!">
                              <img src="./img/form/close.svg" alt="Close icon">
                           </a>
                        </div>
                     </div>
                     `;

         cartWrapperService.insertAdjacentHTML("beforeend", cartItemHTML);
      }
   }
});
