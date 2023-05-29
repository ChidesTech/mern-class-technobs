export default function CartPage() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems'));

  function deleteHandler(id) {
    cartItems = cartItems.filter(x => x._id !== id);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    //reload the page
    window.location.reload();
  }

  function decrement(id) {
    //Find the item you want to increment
    let item = cartItems.find(x => x._id === id);
    //check if the quantity of the item is 1, if it is then return
    if(item.quantity === 1) return;
    //decrease the quantity of the item
    item.quantity -= 1;
    //replace the former item with the item with an increased quantity
    cartItems = cartItems.map(x => x._id === id ? item : x);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.reload();
  }

  function increment(id) {
    //Find the item you want to increment
    let item = cartItems.find(x => x._id === id);
    //increase the quantity of the item
    item.quantity += 1;
    //replace the former item with the item with an increased quantity
    cartItems = cartItems.map(x => x._id === id ? item : x);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.reload();

  }

  return <>
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart - {cartItems?.length} item(s)</h5>
              </div>
              <div className="card-body">

                {cartItems.map(x => {
                  return <div className="row" key={x._id}>
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                      {/* Image */}
                      <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                        <img src={x.image} className="w-100" alt="No Image" />
                        <a href="#!">
                          <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }} />
                        </a>
                      </div>
                      {/* Image */}
                    </div>
                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      {/* Data */}
                      <p><strong>{x.title}</strong></p>
                      <p>Color: blue</p>
                      <p>Size: M</p>
                      <button onClick={() => deleteHandler(x._id)} type="button" className="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
                        <i className="fas fa-trash" />
                      </button>

                      {/* Data */}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                      {/* Quantity */}
                      <div className="d-flex mb-4" style={{ maxWidth: 300 }}>
                        <button onClick={() => decrement(x._id)} className="btn btn-primary px-3 me-2">
                          <i className="fas fa-minus" />
                        </button>
                        <div className="form-outline">
                          <span id="form1" className="form-control border border-white" >{x.quantity}</span>
                        </div>
                        <button onClick={() => increment(x._id)} className="btn btn-primary px-3 ms-2" >
                          <i className="fas fa-plus" />
                        </button>
                      </div>
                      {/* Quantity */}
                      {/* Price */}
                      <p className="text-start text-md-center fs-5 " >
                        <strong>${x.price?.toLocaleString()}</strong>
                      </p>
                      {/* Price */}
                    </div>
                    <hr className="my-4" />

                  </div>
                })}
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-body">
                <p><strong>Expected shipping delivery</strong></p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body">
                <p><strong>We accept</strong></p>
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp" alt="PayPal acceptance mark" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>{cartItems.reduce((a, c) => a + c.quantity, 0)} products</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span><strong>${cartItems.reduce((a, c) => a + c.price * c.quantity , 0)}</strong></span>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-lg btn-block">
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </>
}

