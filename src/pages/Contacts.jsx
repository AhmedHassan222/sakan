import React from "react";
import "../../src/Styles/Navbar.component.css"
function Contacts() {
  return (
    <>
      <div className="bg-contacts p-4">
        <div className="container ">
          <h3 className="text-light h2 mb-5">
            Contact Us For <br /> More Information
          </h3>
          <div className="row gy-4">
            <div className="col-md-6">
              <div>


                <h4 className="text-info">Mail</h4>
                <h5 className="mb-2 text-light">Sakan@house.com</h5>
                <h4 className="text-info">Phone</h4>
                <h5 className="text-light">+2011577954437</h5>
                <h5 className="text-light">+2012788445537</h5>
                <h4 className="text-info">Address</h4>
                <h5 className="mb-2 text-light">Egypt ,Tanta</h5>
                <div className="socail-media my-4">
                  <h3 className="text-light">Socail-media</h3>
                  <div className="d-flex mt-3 align-items-center justify-content-start ">
                    <i className="fa-brands fa-facebook text-primary fs-3 mx-3"></i>
                    <i class="fa-brands fa-instagram text-primary fs-3 mx-3"></i>
                    <i class="fa-brands fa-twitter text-primary fs-3 mx-3"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="bg-white p-4">
                <h3 className=" mb-4">What do you want to ask ?</h3>
                <textarea name="Your Message" className="p-3 w-100" placeholder="Your Message" id="" cols="30" rows="5"></textarea>
                <button className="text-light mt-4 btn py-2 px-5 bg  bg-gradient w-100  ">Send Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
