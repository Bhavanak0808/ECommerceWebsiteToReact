const Navbar = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-4">
    <a className="navbar-brand" href="#">HappySprouts</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="about.html">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="products.html">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="gallery.html">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact.html">Contact Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#loginModal" data-bs-toggle="modal" data-bs-target="#loginModal">Login</a>
        </li>
      </ul>
    </div>
</nav>
        </>
     );
}
 
export default Navbar;