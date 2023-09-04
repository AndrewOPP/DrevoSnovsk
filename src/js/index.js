import Swiper from 'swiper';

const productsSwiper = document.querySelector(".cards-container")

console.log(productsSwiper);
function carsMarkup() {
    const carsMarkup = `     <li class="cards-container-item">
        <div class="img-div">
          <img src="./images/coal.png" alt="coal" />
        </div>
        <p class="cards-container-item-small-text">Уголь древесный</p>
        <p class="cards-container-item-big-text">
          Уголь для промышленных предприятий мелкой фракции
        </p>
      </li>`
    const result = [carsMarkup, carsMarkup, carsMarkup].join("")

    return result
}

productsSwiper.insertAdjacentHTML("beforeend", carsMarkup())