import background from "../assets/background.jpg"
import style from "../Styles/Home.component.css"
import home from "../../src/assets/Home2.png"
import apartment from "../../src/assets/apartment.png"
import dublex from "../../src/assets/dublex.png"
import land from "../../src/assets/land.png"
import img1 from "../../src/assets/img1.webp"
import img3 from "../../src/assets/img3.jpg"
import img2 from "../../src/assets/img2.jpg"
import img5 from "../../src/assets/img5.jpg"

import type1 from "../../src/assets/type1.png"
import type2 from "../../src/assets/type2.png"
import type3 from "../../src/assets/type3.png"
import type4 from "../../src/assets/type4.png"
import Choose from "./Choose"
import Contacts from "./Contacts"

export default function Home() {

    return <>
        <header style={{ backgroundImage: `url(${background})` }} className="d-flex align-items-center">

            <div className="container">
                <div className="d-flex  ">
                    <p className="text-black bg-white px-3 py-2 my-1 fs-5">Buy</p>
                    <p className="text-black bg-style px-3 py-2 my-1 fs-5 special">Rent</p>
                    <p className="text-black bg-style px-3 py-2 my-1 fs-5">Sell</p>
                </div>
                <div className=" bg-white w-100 ">
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



        </header>


        <section id="properties" className="my-5">
            <div className="container py-5">
                <h2 className="text-center fs-2 fw-bold">Type Property We Have</h2>
                <p className="text-muted text-center fs-5 mb-5">Here you'll find more information below in different types that suits for you</p>
                <div className="row  my-3">
                    <div className="col-sm-12 col-md-6 col-lg-3 " >
                        <div className="bg-light   p-4">
                            <div className="d-flex justify-content-center">
                                <img src={type1} className="  w-50 " alt="" />

                            </div>
                            <h3 className="text-center fw-bold mt-4">Home</h3>
                            <p className="fs-5 text-center">100 Listing</p>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 " >
                        <div className="bg-light   p-4">
                            <div className="d-flex justify-content-center">
                                <img src={type2} className="  w-50 " alt="" />

                            </div>
                            <h3 className="text-center fw-bold mt-4">Appartment</h3>
                            <p className="fs-5 text-center">100 Listing</p>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 " >
                        <div className="bg-light   p-4">
                            <div className="d-flex justify-content-center">
                                <img src={type3} className="  w-50 " alt="" />

                            </div>
                            <h3 className="text-center fw-bold mt-4">Duplex</h3>
                            <p className="fs-5 text-center">100 Listing</p>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 " >
                        <div className="bg-light   p-4">
                            <div className="d-flex justify-content-center">
                                <img src={type4} className="  w-50 " alt="" />

                            </div>
                            <h3 className="text-center fw-bold mt-4">Land</h3>
                            <p className="fs-5 text-center">100 Listing</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <section id="featured-properties" className="my-5">
            <div className="container py-5">
                <h2 className="text-center fs-2 fw-bold">Featured Properties</h2>
                <p className="text-muted text-center fs-5  mb-5">See our featured properties and explore all of that to know more about our real estate properties very easy</p>
                <div className="row  my-3">
                    <div className="col-sm-12 col-md-4 col-lg-4 " >
                        <div className="bg-light ">
                            <img src={img5} className="w-100" alt="" />
                            <p className=" fw-bold text-center  fs-5 mt-3">EGP 1,200,000</p>
                            <p className="text-center">12/322 Albert street East Melbourne</p>
                            <hr />
                            <div className="d-flex justify-content-around p-3">
                                <div>
                                    <p className="text-muted">Bedroom</p>

                                </div>
                                <div>
                                    <p className="text-muted">Bathroom</p>
                                </div>
                                <div>
                                    <p className="text-muted">Garage</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 " >
                        <div className="bg-light ">
                            <img src={img2} className="w-100" alt="" />
                            <p className=" fw-bold text-center  fs-5 mt-3">EGP 2,500,000</p>
                            <p className="text-center">12/322 Albert street East Melbourne</p>
                            <hr />
                            <div className="d-flex justify-content-around p-3">
                                <div>
                                    <p className="text-muted">Bedroom</p>

                                </div>
                                <div>
                                    <p className="text-muted">Bathroom</p>
                                </div>
                                <div>
                                    <p className="text-muted">Garage</p>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 " >
                        <div className="bg-light ">
                            <img src={img3} className="w-100" alt="" />
                            <p className=" fw-bold text-center  fs-5 mt-3">EGP 3,200,000</p>
                            <p className="text-center">12/322 Albert street East Melbourne</p>
                            <hr />
                            <div className="d-flex justify-content-around p-3">
                                <div>
                                    <p className="text-muted">Bedroom</p>

                                </div>
                                <div>
                                    <p className="text-muted">Bathroom</p>
                                </div>
                                <div>
                                    <p className="text-muted">Garage</p>
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </section>
        <Choose/>
        <Contacts/>
    </>
}


