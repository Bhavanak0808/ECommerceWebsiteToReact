const Carousel = () => {
    return ( 
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <hr></hr>
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    </div>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="./images/Screenshot 2024-05-31 065133.png" className="d-block  w-100 " alt="Screenshot 2024-05-31 065133.png" height="300px" width="100%">
        
        </img></div>
        <div className="carousel-item">
            <img src="./images/Screenshot 2024-05-31 065310.png" className="d-block  w-100" alt="Screenshot 2024-05-31 065310.png" height="300px" width="100%">
        </img></div>
        <div className="carousel-item">
            <img src="./images/Screenshot 2024-05-31 065343.png" className="d-block  w-100" alt="Screenshot 2024-05-31 065343.png" height="300px" width="100%">
        </img></div>
        <div className="carousel-item">
            <img src="./images/Screenshot 2024-05-31 065421.png" className="d-block  w-100" alt="Screenshot 2024-05-31 065421.png" height="300px" width="100%">
        </img></div>
        <div className="carousel-item">
            <img src="./images/Screenshot 2024-05-31 065937.png" className="d-block  w-100" alt="Screenshot 2024-05-31 065937.png" height="300px" width="100%">
        </img></div>
    </div>
    <button className="carousel-control-prev" type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    <hr></hr>
</div>
        </>
     );
}
 
export default Carousel;