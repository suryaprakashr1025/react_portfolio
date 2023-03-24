import React from 'react'
import "./Projects.css"
import project1 from "./web/ser1.jpg"
import project2 from "./web/ser2.gif"
import project3 from "./web/ser3.jpg"

function Projects() {
    return (
        <div className='container col-12 my-5'>
            <section id="projects">
                <div class="row">

                    {/* <h1 class="text-center">Projects</h1> */}
                    <div class="col-md-4 my-4">
                        <div class="card shadow cshadow">
                            <div class="inner">
                                <img src={project1} class="card-img-top " />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ptitle">Inventory Billing App</h5>
                                <p class="card-text ppara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                    corporis consequuntur repellendus placeat, aliquam consectetu</p>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <a href="https://github.com/suryaprakashr1025/inventory_billing_app" target="_blank" type="button" class="btn btn-success my-3 projectbtn">FrontEnd</a>
                                <a href="https://github.com/suryaprakashr1025/inventory_billing_app_backend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">BackEnd</a>
                                <a href="#" type="button" class="btn btn-success my-3 projectbtn">View</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 my-4">
                        <div class="card shadow cshadow">
                            <div class="inner">
                                <img src={project2} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ptitle">Blog App</h5>
                                <p class="card-text ppara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                    corporis consequuntur repellendus placeat, aliquam consectetu</p>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <a href="https://github.com/suryaprakashr1025/blog_app_frontend" target="_blank"  type="button" class="btn btn-success my-3 projectbtn">FrontEnd</a>
                                <a href="https://github.com/suryaprakashr1025/Blog_app_backend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">BackEnd</a>
                                <a href="#" type="button" class="btn btn-success my-3 projectbtn">View</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 my-4">
                        <div class="card shadow cshadow">
                            <div class="inner">
                                <img src={project3} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ptitle">Parking App</h5>
                                <p class="card-text ppara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                    corporis consequuntur repellendus placeat, aliquam consectetu</p>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <a href="https://github.com/suryaprakashr1025/parking_frontend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">FrontEnd</a>
                                <a href="https://github.com/suryaprakashr1025/Parking_backend" target="_blank"  type="button" class="btn btn-success my-3 projectbtn">BackEnd</a>
                                <a href="#" type="button" class="btn btn-success my-3 projectbtn">View</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 my-4">
                        <div class="card shadow cshadow">
                            <div class="inner">
                                <img src={project3} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ptitle">Chat App</h5>
                                <p class="card-text ppara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                                    corporis consequuntur repellendus placeat, aliquam consectetu</p>
                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <a href="#" type="button" class="btn btn-success my-3 projectbtn">FrontEnd</a>
                                <a href="#" type="button" class="btn btn-success my-3 projectbtn">BackEnd</a>
                                <a href="#" type="button" class="btn btn-success my-3 projectbtn">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Projects