import React from 'react'

export default function Contact() {
  return (
    <div className="container">
      <div className="row contact-bg">
        <div className="col ">
          <h1 className='text-light text-center'>Contact</h1>
        </div>
      </div>
      <div className="row my-5">
        <h2>Get in Touch</h2>
        <div className="col-md-9 col-sm-12">
          <textarea rows="10" cols="30" placeholder='Enter Message ' className='p-3 border w-100 text-area'></textarea>
          <div className="row my-3">
            <div className="col">
              <div class="input-group border border-tertiary px-2 py-1">
                <input type="search" className="form-control border-0 search-input " placeholder="Search book by author or publisher" />
              </div>
            </div>
            <div className="col">
              <div class="input-group border border-tertiary px-2 py-1">
                <input type="search" className="form-control border-0 search-input mt-2    " placeholder="Search book by author or publisher" />
              </div>
            </div>
          </div>
          <div class="input-group border border-tertiary px-2 py-1">
            <input type="search" class="form-control border-0 search-input " placeholder="Search book by author or publisher" />
          </div>
          <button className='btn border-danger rounded-0 px-5 py-3 my-5 text-danger send-btn'>Send</button>
        </div>
        <div className="col-md-3 col-sm-12">
          <div>
            <i class="fa-solid fa-house fs-4 align-top mt-2 h-100"></i>
            <p className='fs-4 d-inline-block ms-2'>
              Buttowood California
              <p className='fs-5 ms-2'>Rosemead, CA 91770</p>
            </p>
          </div>
          <div>
            <i class="fa-solid fa-mobile-retro fs-4 align-top mt-2 h-100"></i>
            <p className='fs-4 d-inline-block ms-2'>
              +1 253 565 2365
              <p className='fs-5 ms-2'>Mon to Fri 9am to 6pm
              </p>
            </p>
          </div>
          <div>
            <i class="fa-regular fa-envelope fs-4 align-top mt-2 h-100"></i>
            <p className='fs-4 d-inline-block ms-2'>
            support@colorlib.com
              <p className='fs-5 ms-2'>Send us your query anytime!</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
