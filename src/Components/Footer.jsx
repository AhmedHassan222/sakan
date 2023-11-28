import React from "react";
import sakenImges from "../assets/mainImage.png";
function Footer() {
  return (
    <>
      <div className="bg-light">
        <div className="container my-2  text-dark p-4">
          <div className="row align-items-center ">
            <div className="col-md-3">
              <div className="content">
                <div>
                  <img src={sakenImges} className="w-50 " alt="" />
                </div>
                <p className="my]=\-2">Sakan@house.com</p>
                <p className="my-2">+01202499897</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur.</p>
                <div className="d-flex align-items-center justify-content-start ">
                  <i className="fa-brands fa-facebook text-primary fs-3 mx-3"></i>
                  <i class="fa-brands fa-instagram text-warning fs-3 mx-3"></i>
                  <i class="fa-brands fa-twitter text-primary fs-3 mx-3"></i>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h4 className="fw-bolder mb-4">Expolre</h4>
                <p className="text-muted">Buy a proprety</p>
                <p className="text-muted">sell your proprety </p>
                <p className="text-muted">Rent a proprety</p>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h4 className="fw-bolder mb-4">Resources</h4>
                <p className="text-muted">vidoes</p>
                <p className="text-muted">Member Stories</p>
                <p className="text-muted">Our Homes&Phones</p>
              </div>
            </div>
            <div className="col-md-3">
              <div>
                <h4 className="fw-bolder mb-4">About Us</h4>
                <p className="text-muted">
                  We provide a service to manage your property on one platform.
                </p>
                <p className="text-muted">
                  Provides valuation .Sell .Buy .Rent <br /> iverst property
                  ,and other real services
                </p>
                {/* <p className="text-muted"></p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
