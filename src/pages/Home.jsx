import background from "../assets/background.jpg"
import style from "../Styles/Home.component.css"
import home from "../../src/assets/Home2.png"
import apartment from "../../src/assets/apartment.png"
import dublex from "../../src/assets/dublex.png"
import land from "../../src/assets/land.png"
import img1 from "../../src/assets/img1.webp"
import img3 from "../../src/assets/img3.jpg"
import img2 from "../../src/assets/img2.jpg"

export default function Home() {

    return <>
        <header style={{ backgroundImage: `url(${background})` }} className="vh-100 d-flex align-items-end">
            <div className=" hightSpecial d-flex  ">
                <div className="text-white px-5" >
                    <h2 className={` ${style.mainHead} fs-1`}>Find your perfect</h2>
                    <h2 className={` ${style.mainHead} fs-1`}>Property with us.</h2>
                </div>
                <div className="p-5 ">
                    <div className="d-flex ">
                        <p className="text-black bg-white px-5 py-2 my-1 fs-3">Buy</p>
                        <p className="text-black bg-style px-5 py-2 my-1 fs-3 special">Rent</p>
                        <p className="text-black bg-style px-5 py-2 my-1 fs-3">Sell</p>
                    </div>
                    <div className=" bg-white ">
                        <div className="container py-5">
                            <div className="row justify-content-center g-3">
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <input type="text" placeholder="Search by Location" className="p-3 w-100" />
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <input type="text" placeholder="Type Properties" className="p-3 w-100" />

                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <input type="text" placeholder="Price Range" className="p-3 w-100" />

                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-3">
                                    <button className="searchButton text-white py-3 px-5">Search Now</button>                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>


        <section id="properties" className="my-5">
            <div className="container py-5">
                <h2 className="text-center fs-1 fw-bold">Type Property We Have</h2>
                <p className="text-muted text-center fs-4">Here you'll find more information below in different types that suits for you</p>
                <div className="row g-5 my-3">
                    <div className="col-6 col-lg-3 " >
                        <div className="bg-property   p-4">
                            <img src={home} className="  w-100" alt="" />
                            <h3 className="text-center fw-bold mt-4">Home</h3>
                            <p className="fs-5 text-center">100 Listing</p>
                        </div>

                    </div>
                    <div className="col-6 col-lg-3 " >
                        <div className="bg-property   p-4">
                            <img src={apartment} className="  w-100" alt="" />
                            <h3 className="text-center fw-bold mt-4">Appartment</h3>
                            <p className="fs-5 text-center">100 Listing</p>
                        </div>

                    </div>
                    <div className="col-6 col-lg-3 " >
                        <div className="bg-property   p-4">
                            <img src={dublex} className="  w-100" alt="" />
                            <h3 className="text-center fw-bold mt-4">Duplex</h3>
                            <p className="fs-5 text-center">100 Listing</p>
                        </div>

                    </div>
                    <div className="col-6 col-lg-3 " >
                        <div className="bg-property   p-4">
                            <img src={land} className="  w-100" alt="" />
                            <h3 className="text-center fw-bold mt-4">Land</h3>
                            <p className="fs-5 text-center">100 Listing</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section id="featured-properties" className="my-5">
            <div className="container py-5">
                <h2 className="text-center fs-1 fw-bold">Featured Properties</h2>
                <p className="text-muted text-center fs-4">See our featured properties and explore all of that to know more about our real estate properties very easy</p>
                <div className="row g-5 my-3">
                    <div className="col-sm-12 col-md-4 col-lg-4 " >
                        <div className="bg-property">
                            <img src={img1} className="w-100" alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 " >
                        <div className="bg-property">
                        <img src={img2} className="w-100" alt="" />

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 " >
                        <div className="bg-property">
                        <img src={img3} className="w-100" alt="" />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}


