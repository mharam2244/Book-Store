import React from 'react';
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
import { Link } from 'react-router-dom';

export default function Home() {

  const btn1 = () => {
    document.getElementById("div-1").style.display = "block";
    document.getElementById("div-2").style.display = "none";
    document.getElementById("div-3").style.display = "none";
  };

  const btn2 = () => {
    document.getElementById("div-1").style.display = "none";
    document.getElementById("div-2").style.display = "block";
    document.getElementById("div-3").style.display = "none";
  };

  const btn3 = () => {
    document.getElementById("div-1").style.display = "none";
    document.getElementById("div-2").style.display = "none";
    document.getElementById("div-3").style.display = "block";
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col">
          <div id="div-1" className='div-1'>
            <img src={img1} alt="Image 1" className='w-100' />
            <div className='img-title'>
              <span className='bg-light text-dark rounded-5 px-3 py-2'>Science Fiction</span>
              <h1>History of Phipino</h1>
              <Link to={"/"} className='text-decoration-none ' >
                <button className='border-0 rounded-5 px-4 py-3 custom-button '>Browse Store</button>
              </Link>
            </div>
            <div className="btn-div">
              <button className='btn btn-light p-1 rounded-5 m-2 btn-1' onClick={btn1}></button>
              <button className='btn btn-light p-1 rounded-5 m-2' onClick={btn2}></button>
              <button className='btn btn-light p-1 rounded-5 m-2' onClick={btn3}></button>
            </div>
          </div>
          <div id="div-2" className='div-2' style={{ display: 'none' }}>
            <img src={img2} alt="Image 2" className='w-100' />
            <div className='img-title'>
              <span className='bg-light text-dark rounded-5 px-3 py-2'>Science Fiction</span>
              <h1>History of Phipino</h1>
              <Link to={"/"} className='text-decoration-none ' >
                <button className='border-0 rounded-5 px-4 py-3 custom-button '>Browse Store</button>
              </Link>
            </div>
            <div className="btn-div">
              <button className='btn btn-light p-1 rounded-5 m-2' onClick={btn1}></button>
              <button className='btn btn-light p-1 rounded-5 m-2 btn-2' onClick={btn2}></button>
              <button className='btn btn-light p-1 rounded-5 m-2' onClick={btn3}></button>
            </div>
          </div>
          <div id="div-3" className='div-3' style={{ display: 'none' }}>
            <img src={img3} alt="Image 3" className='w-100' />
            <div className='img-title'>
              <span className='bg-light text-dark rounded-5 px-3 py-2'>Science Fiction</span>
              <h1>History of Phipino</h1>
              <Link to={"/"} className='text-decoration-none ' >
                <button className='border-0 rounded-5 px-4 py-3 custom-button '>Browse Store</button>
              </Link>
            </div>
            <div className="btn-div">
              <button className='btn btn-light p-1 rounded-5 m-2' onClick={btn1}></button>
              <button className='btn btn-light p-1 rounded-5 m-2' onClick={btn2}></button>
              <button className='btn btn-light p-1 rounded-5 m-2 btn-3' onClick={btn3}></button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-9 col-sm-12">
          <div className="my-3">
            <h1 className='d-inline-block'>Featured This Week</h1>
            <button className='border-0 border-bottom border-secondary float-end mt-4 bg-body ls-2 fs-5'>View All</button>
          </div>
          <div className='w-100 px-5 py-4 bg-danger text-light'>
            <img src={book1} alt="This is Book" />
            <div className="d-md-inline-block d-sm-block ms-5 me-3">
              <h1>The Rage of dragons</h1>
              <p>By Evan Winter</p>
              <h2>$50.00</h2>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <img src={drama} alt="Jocker Drama Image" className='w-100' />
        </div>

      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <h1>Latest Published items</h1>
        </div>
        <div className="col-md-6 col-sm-12">
          <button className='mx-2 btn border px-4 py-2 rounded-5 ar-btn'>All</button>
          <button className='mx-2 btn border px-4 py-2 rounded-5 ar-btn'>Horror</button>
          <button className='mx-2 btn border px-4 py-2 rounded-5 ar-btn'>Thriller</button>
          <button className='mx-2 btn border px-4 py-2 rounded-5 ar-btn'>Science Fiction</button>
          <button className='mx-2 btn border px-4 py-2 rounded-5 ar-btn'>History</button>
        </div>
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
      

      </div>
      <div className="row g-3 my-5 text-light">
        <div className="col-md-6 col-sm-12 ">
          <div className="bg-img-col1 p-5 h-100 ">
            <h3 className='d-inline-block'>The Histroy of phipino</h3>
            <Link to={"/"} className='text-decoration-none float-end' >
              <button className='border-0 rounded-5 px-4 py-3 custom-button '>View Details</button>
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 ">
          <div className="bg-img-col2 p-5 h-100">
            <h3 className='d-inline-block'>Wilma Mumduya</h3>
            <Link to={"/"} className='text-decoration-none  float-end' >
              <button className='border-0 rounded-5 px-4 py-3 custom-button'>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
