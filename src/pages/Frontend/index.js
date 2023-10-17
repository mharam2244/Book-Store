import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Home from "./Home"
import About from "./About"
import Categories from "./Categories"
import Contact from "./Contact"
export default function index() {
    return (
        <>
            <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </>
    )
}
