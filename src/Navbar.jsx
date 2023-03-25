import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Navbar.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
    return (
        <div>




            <nav class="navbar navbar-expand-lg" id="navbar">
                <div class="container-fluid col-12">
                    <b class="bold" style={{color:"white"}}>R Surya Prakash</b>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                    <div class="collapse navbar-collapse" id="menu">
                        <ul class="navbar-nav ms-auto mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" class="nav-link" href="#home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link" href="#about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/skills" class="nav-link" href="#skills">Skills</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/projects" class="nav-link" href="#projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link" href="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Navbar