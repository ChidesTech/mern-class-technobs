export default function Header(){
    return <>
  
  {/* <!-- Navbar Starts Here --> */}
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><i className="fa fa-market-place"></i> Bayas Shop</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"><i className="fa fa-home"></i> Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/cart"><i className="fa fa-shopping-cart"></i> Cart</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <i className="fa fa-user"></i> User
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/admin-products"><i className="fa fa-sign-in-alt"></i> Admin Products</a></li>
              <li><a class="dropdown-item" href="/login"><i className="fa fa-sign-in-alt"></i> Login</a></li>
              <li><a class="dropdown-item" href="/register"><i className="fa fa-user-plus"></i> Register</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
         
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  {/* <!-- Navbar Ends Here --> */}
    </>
}