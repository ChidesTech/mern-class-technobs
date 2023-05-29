export default function Carousel(){
    return <>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://fyf.tac-cdn.net/images/products/large/F-208.jpg?auto=webp&quality=60&width=690"
          class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/25-Most-Beautiful-Blue-Flowers.jpg"
          class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img
          src="https://cdn.shopify.com/s/files/1/2776/7900/products/WholesaleFlowers-359698_1024x1024.jpg?v=1671685311"
          class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://i1.fnp.com/images/pr/l/v20210121175223/red-roses-in-love-you-sticker-vase_1.jpg"
          class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://www.allaboutgardening.com/wp-content/uploads/2021/09/Blue-Flowers-in-Garden-1200x667.jpg"
          class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    
    </>
}