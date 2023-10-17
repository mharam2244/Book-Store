import React from 'react'
import img1 from "../../../assets/img/img1.jpg";
import img2 from "../../../assets/img/img2.jpg";
import img3 from "../../../assets/img/img3.jpg";
import drama from "../../../assets/img/drama.jpg";
import book1 from "../../../assets/img/book1.jpg"
import book2 from "../../../assets/img/book2.jpg"
import book3 from "../../../assets/img/book3.jpg"
import book4 from "../../../assets/img/book4.jpg"
import book5 from "../../../assets/img/book5.jpg"
import book6 from "../../../assets/img/book6.jpg"
import book7 from "../../../assets/img/book7.jpg"
export default function Categories() {
  return (
    <div className="container">
      <div className="row">
        <div className="col categories-row h-100 text-light">
          <h1 className='text-center'>Book Categories</h1>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4">
          <div className="card p-5"><h2>Filter by Genres</h2></div>
          <label htmlFor="history">History</label>
          <input type="checkbox" name='history'  placeholder='Histrory' />
        </div>
        <div className="col-md-8">
          <div className="border rounded-5 p-3">
            <select name="" id="" className='w-100 border-0 categories-dropdown'>
              <option value="" className='border p-5' selected>Browes by Popularity</option>
              <option value="" className='border p-5'>Name</option>
              <option value="" className='border p-5'>New</option>
              <option value="" className='border p-5'>Old</option>
              <option value="" className='border p-5'>Price</option>
            </select>
          </div>
          <div className="row g-3 my-4 d-flex flex-row flex-wrap">
            <div className="col">
              <div className="card">
                <img src={book3} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={book5} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={book6} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={book2} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={book4} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img src={book7} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={book4} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={book3} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={book5} alt="Book Image" />
                <div className="py-3 px-4">
                  <h3>Moon Dance</h3>
                  <p>J. R Rain</p>
                  <p className='d-inline block' >(<span className='text-danger'>120</span> Review)</p>
                  <p className='d-inline-block float-end text-danger fs-3'>$50</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="col text-center">
              <button className='up-btn border-danger py-3 px-4 rounded-5 border-1'>Browse More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
