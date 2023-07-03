const cartWrapperTeam = document.querySelector(".form__total-wrapper-team");

window.addEventListener("click", function (event) {
   if (event.target.hasAttribute("data-action")) {
      const card = event.target.closest(".item");

      const productInfo = {
         id: card.dataset.id,
         title: card.querySelector(".counter-text").innerText,
         counter: card.querySelector("[data-counter]").innerText,
      };

      const itemInCart = cartWrapperTeam.querySelector(
         `[data-id="${productInfo.id}"]`
      );

      if (itemInCart) {
         const counterElement = itemInCart.querySelector("[data-counter]");
         counterElement.innerText = parseInt(productInfo.counter);
      } else {
         const cartItemHTML = `

         <div class="form__total-item" data-id="${productInfo.id}">
                        <div class="form__total-counter" data-counter>${productInfo.counter}</div>
                        <div class="form__total-text">${productInfo.title}</div>
                        <div class="form__total-icon">
                           <a href="#!">
                              <img src="./img/form/close.svg" alt="Close icon">
                           </a>
                        </div>
                     </div>
                     `;

         cartWrapperTeam.insertAdjacentHTML("beforeend", cartItemHTML);
      }
   }
});
