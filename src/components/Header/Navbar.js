import React from 'react'
import bookIcon from "../../assets/img/book-icon.jpg"
import { Link } from 'react-router-dom'
export default function navbar() {
  return (
    <div className="container">
      <div className="row mt-2 mb-4 g-3">
        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xxl-3 ">
          <img src={bookIcon} alt="Book store" />
        </div>
        <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xxl-5 ">
          <div class="input-group border border-tertiary rounded-5 px-3 py-2  w-100">
            <input type="search" class="form-control border-0 search-input " placeholder="Search book by author or publisher" />
            <div class="input-group-prepend ">
              <div class="input-group-text border-0 cursor-pointer">
                <i class="fas fa-search fs-3 text-danger bg-transparant"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xxl-4  d-flex align-items-center justify-content-around">
          <Link to={"/"} className='text-decoration-none link' >FAQ</Link>
          <Link to={"/"} className='text-decoration-none link' >Track Order</Link>
          <Link to={"/"} className='text-decoration-none link' ><i class="fa-solid fa-cart-shopping fs-3"></i></Link>
          <Link to={"auth/login"} className='text-decoration-none ' >
            <button className='border-0 rounded-5 px-4 py-3 custom-button '>Sign in</button>
          </Link>
        </div>
      </div>
      <div className="row navbar-light navbar navbar-expand-lg">
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
          <div class="container ">
            <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse bg-sm-dark" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item  py-md-2 py-lg-0">
                  <Link to={"/"} className='text-decoration-none link mx-3 fw-medium' >Home</Link>
                </li>
                <li class="nav-item  py-md-2 py-lg-0">
                  <Link to={"/categories"} className='text-decoration-none link mx-3 fw-medium' >Categories</Link>
                </li>
                <li class="nav-item  py-md-2 py-lg-0">

                  <Link to={"/about"} className='text-decoration-none link mx-3 fw-medium' >About</Link>
                </li>
                <li class="nav-item  py-md-2 py-lg-0 dropdown">
                  <a class="nav-link link mx-3 fw-medium p-0 text-dark"  role="button" data-bs-toggle="dropdown" >
                    Pages
                  </a>
                  <ul class="dropdown-menu">
                    <li><Link to={"auth/login"} class="dropdown-item drop-link" >Login</Link></li>
                    <li><a class="dropdown-item drop-link" >Cart</a></li>
                    <li><a class="dropdown-item drop-link" >Check out</a></li>
                    <li><a class="dropdown-item drop-link" >Book Details</a></li>
                    <li><a class="dropdown-item drop-link" >Book Details</a></li>
                    <li><a class="dropdown-item drop-link" >Element</a></li>
                  </ul>
                </li>
                <li class="nav-item  py-md-2 py-lg-0">

                  <Link to={"/contact"} className='text-decoration-none link mx-3 fw-medium' >Contact</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    </div>
  )}