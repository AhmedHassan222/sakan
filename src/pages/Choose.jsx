import React from 'react'
import HomeImges from "../assets/Home2.png";
function Choose() {
  return <>
      <div className="bg-secondary p-5">
        <div className="d-flex mb-5 align-items-center justify-content-around ">
            <h3>Why Choose Us ? </h3>
            <h5>I Hope that You Love Us </h5>
        </div>
        <div className="container my-2">
            <div className="row gy-4">
                <div className="col-md-4 ">
                    <div className="bg">
                        <h2 className='h1 fw-bloder bg-opacity-50 text-secondary'>01</h2>
                            <div className='text-center p-4'>
                            <img src={HomeImges} className="w-25 mx-auto mb-4" alt="" />
                        <h4>Find Your Dream property</h4>
                        <p className="text-muted my-3">we have many beautiful properties </p>
                        <button className="border-0 p-2 fw-bolder text-dark bg-secondary">Learn More </button>
              
                            </div>
                        </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-light">
                        <h2 className='h1 fw-bloder bg-opacity-50 text-secondary'>02</h2>
                      <div className='text-center py-5 my-4'>
                      <img src={HomeImges} className="w-25" alt="" />
                        <h4 className='mb-2 '>Buy or Rent Properties</h4>
                        <button className="border-0 text-dark bg-opacity-25 p-2 fw-bolder bg-secondary">Learn More </button>

                      </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-light">
                        <h2 className='h1 fw-bloder bg-opacity-50 text-secondary'>03</h2>
                      <div className='text-center py-5 my-4'>
                      <img src={HomeImges} className="w-25" alt="" />
                      <h4>List Your Own Property </h4>
                        <button className="border-0 text-dark bg-opacity-25 p-2 fw-bolder bg-secondary">Learn More </button>

                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
}

export default Choose
//  <h4>List Your Own Property </h4>