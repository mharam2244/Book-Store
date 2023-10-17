import React from 'react'
import bookIcon from "../../assets/img/book-icon.jpg"
import { Link } from 'react-router-dom'

export default function Contents() {
    return (
        <div className='container '>
            <div className="row blue-row p-5 my-5 text-center text-light">
                <div className="col mx-auto blue-col">
                    <h1>Join Newsletters</h1>
                    <p>Lorem started its journey with cast iron (CI) products in 1980. The initial main objective was to ensure pure water and affordable irrigation.</p>
                    <div class="d-inline-block nput-group border border-tertiary rounded-5 px-3 py-2 w-50 mx-auto bg-light">
                        <input type="search" class="form-control border-0 search-input " placeholder="Enter Your email" />
                    </div>
                    <button className='btn btn-danger mx-1 rounded-5 ps-4 pe-3 py-2 text-light'>Subscribe</button>
                </div>
            </div>
            <div className="row d-flex justify-content-between flex-wrap footer-row my-5">
                <div className="col">
                    <img src={bookIcon} alt="" />
                    <p className='mt-3'>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
                    <br />
                    <Link to={"/"} className='p-2 border mx-2 foot-icon footer-row'><i class="fa-brands fa-facebook"></i></Link>
                    <Link to={"/"} className='p-2 border mx-2 foot-icon footer-row'><i class="fa-brands fa-instagram"></i></Link>
                    <Link to={"/"} className='p-2 border mx-2 foot-icon footer-row'><i class="fa-brands fa-linkedin-in"></i></Link>
                    <Link to={"/"} className='p-2 border mx-2 foot-icon footer-row'><i class="fa-brands fa-youtube"></i></Link>
                </div>
                <div className="col">
                    <h5 className='mb-3 text-dark'>Book Categories</h5>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>History</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Horror - Thriller</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Love Stories</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Science Fiction</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Bussiness</Link>
                    </p>
                </div>
                <div className="col">
                    <h5 className='mb-3 py-3'></h5>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Biology</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Astrology</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Digital Markiting</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Software Development</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Ecommerce</Link>
                    </p>
                </div>
                <div className="col">
                    <h5 className='mb-3 text-dark'>Site Map</h5>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Home</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>About Us</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>FAQs</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Blog</Link>
                    </p>
                    <p>
                        <Link to={"/"} className='mt-4 text-decoration-none footer-link'>Contact</Link>
                    </p>
                </div>

            </div>
        </div>
    )
}
