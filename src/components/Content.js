const Content = () => {
    return ( 
        <>
        <div className="container mt-5" >
    <h2>Featured Products</h2>
    <div className="row">
        <div className="col-md-10">
            <div className="row mt-3">
                {/* <!-- Product Card 1 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src={'./images/p1.jpg'} className="card-img-top" alt="Product 1"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Onesie</h5>
                            <p className="card-text">Soft and comfortable baby onesie.</p>
                            <p className="card-text">₹ 500.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 2 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p2.jpg" className="card-img-top" alt="Product 2"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Stroller</h5>
                            <p className="card-text">Lightweight and easy to maneuver.</p>
                            <p className="card-text">₹ 2,000.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 3 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p3.jpg" className="card-img-top" alt="Product 3"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Bottle</h5>
                            <p className="card-text">BPA-free and leak-proof baby bottle.</p>
                            <p className="card-text">₹ 100.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 4 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p4.jpg" className="card-img-top" alt="Product 4"></img>
                        <div className="card-body">
                            <h5 className="card-title">Baby Crib</h5>
                            <p className="card-text">Safe and comfortable baby crib.</p>
                            <p className="card-text">₹ 3,000.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 5 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p5.jpg" className="card-img-top" alt="Product 5"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Toy Set</h5>
                            <p className="card-text">Colorful and educational toy set.</p>
                            <p className="card-text">₹ 350.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 6 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p6.jpg" className="card-img-top" alt="Product 6"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Blanket</h5>
                            <p className="card-text">Warm and cozy baby blanket.</p>
                            <p className="card-text">₹ 200.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 7 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p7.jpg" className="card-img-top" alt="Product 7"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Monitor</h5>
                            <p className="card-text">High-quality audio and video baby monitor.</p>
                            <p className="card-text">₹ 900.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 8 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p8.jpg" className="card-img-top" alt="Product 8"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Carrier</h5>
                            <p className="card-text">Ergonomic and comfortable baby carrier.</p>
                            <p className="card-text">₹ 450.00</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Product Card 9 --> */}
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="./images/p9.jpg" className="card-img-top" alt="Product 9"/>
                        <div className="card-body">
                            <h5 className="card-title">Baby Bath Tub</h5>
                            <p className="card-text">Safe and non-slip baby bath tub.</p>
                            <p className="card-text">₹ 1,500.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Product Categories --> */}
        <div className="col-md-2">
            <h5 className="mt-3">Product Categories</h5>
            <ul className="list-group">
                <li className="list-group-item">Clothing</li>
                <li className="list-group-item">Toys</li>
                <li className="list-group-item">Feeding</li>
                <li className="list-group-item">Nursery</li>
                <li className="list-group-item">Gear</li>
                <li className="list-group-item">Health & Safety</li>
                <li className="list-group-item">Toiletries</li>
            </ul>
        </div>
    </div>
</div>
        </>
     );
}
 
export default Content;