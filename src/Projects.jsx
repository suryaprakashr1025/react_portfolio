import React from 'react'
import "./Projects.css"
import inventory from "./web/inventory.jpg"
import blog1 from "./web/blog1.jpg"
import parking1 from "./web/parking1.jpg"
import chat1 from "./web/chat1.jpg"

function Projects() {
    return (
        <div className='container col-12 my-5'>
            <section id="projects">
                <div class="row">
                    <div className='col-lg-12' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div class="card col-lg-4 mb-2 mx-2 inventory" style={{ width: "18rem" }}>
                            <div class="card-body text-center">
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <h5 class="card-title"  style={{ fontWeight:"bold",}}>Inventory Billing App</h5>
                                        <hr />

                                        <div className='col-lg-12'>
                                            <h5 style={{ fontWeight:"bold",}}>Admin, User</h5>
                                            <hr />
                                            <h6 class="card-title" >Username: surya</h6>
                                            <h6 class="card-title" >Password: surya123</h6>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="card col-lg-4 mb-2 Github mx-2 blog" style={{ width: "18rem"}}>
                            <div class="card-body text-center">
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <h5 class="card-title" style={{ fontWeight:"bold",}}>Blog App</h5>
                                        <hr />

                                        <div className='col-lg-12'>
                                            <h5 style={{ fontWeight:"bold",}}>Admin, User</h5>
                                            <hr />
                                            <h6 class="card-title" >Username: surya</h6>
                                            <h6 class="card-title" >Password: surya123</h6>
                                        </div>
                                        

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="card col-lg-4 mb-2 Github mx-2 parking" style={{ width: "18rem"}}>
                            <div class="card-body text-center">
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <h5 class="card-title" style={{ fontWeight:"bold",}}>Parking App</h5>
                                        <hr />

                                        <div className='col-lg-12'>
                                            <h5 style={{ fontWeight:"bold",}}>Admin, User</h5>
                                            <hr />
                                            <h6 class="card-title" >Username: surya</h6>
                                            <h6 class="card-title" >Password: surya123</h6>
                                        </div>
                                        

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="card col-lg-4 mb-2 Github mx-2 chat" style={{ width: "18rem"}}>
                            <div class="card-body text-center">
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <h5 class="card-title" style={{fontWeight:"bold",}}>Chat App</h5>
                                        <hr />

                                        <div className='col-lg-12'>
                                            <h5 style={{ fontWeight:"bold",}}>Admin, User</h5>
                                            <hr />
                                            <h6 class="card-title">Username: surya</h6>
                                            <h6 class="card-title" >Password: surya123</h6>
                                        </div>
                                        

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* <h1 class="text-center">Projects</h1> */}
                    <div class="col-md-4 my-4">
                        <div class="card shadow cshadow">
                            <div class="inner">
                                <img src={inventory} class="card-img-top " />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ptitle">Inventory Billing App</h5>
                                <p class="card-text ppara">Through this you can know the inventory and sales details of a company.</p>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    <a href="https://github.com/suryaprakashr1025/inventory_billing_app" target="_blank" type="button" class="btn btn-success my-3 projectbtn">FrontEnd</a>
                                    <a href="https://github.com/suryaprakashr1025/inventory_billing_app_backend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">BackEnd</a>
                                    <a href="https://master--astonishing-horse-359658.netlify.app/" target="_blank" type="button" class="btn btn-success my-3 projectbtn">View</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 my-4">
                        <div class="card shadow cshadow">
                            <div class="inner">
                                <img src={blog1} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ptitle">Blog App</h5>
                                <p class="card-text ppara">Blog app is used to share what we know and let others know it.</p>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    <a href="https://github.com/suryaprakashr1025/blog_app_frontend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">FrontEnd</a>
                                    <a href="https://github.com/suryaprakashr1025/Blog_app_backend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">BackEnd</a>
                                    <a href="https://master--silver-malasada-ff483c.netlify.app" target="_blank" type="button" class="btn btn-success my-3 projectbtn">View</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 my-4">
                        <div class="card shadow cshadow">
                            <div class="inner">
                                <img src={parking1} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ptitle">Parking App</h5>
                                <p class="card-text ppara">Calculates the time of the parked vehicle and displays the amount.</p>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    <a href="https://github.com/suryaprakashr1025/parking_frontend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">FrontEnd</a>
                                    <a href="https://github.com/suryaprakashr1025/Parking_backend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">BackEnd</a>
                                    <a href="https://master--melodic-taiyaki-72296c.netlify.app" target="_blank" type="button" class="btn btn-success my-3 projectbtn">View</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 my-4">
                        <div class="card shadow cshadow">
                            <div class="inner">
                                <img src={chat1} class="card-img-top" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title ptitle">Chat App</h5>
                                <p class="card-text ppara">Share and know an information through this.</p>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                    <a href="https://github.com/suryaprakashr1025/Chatapp_backend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">FrontEnd</a>
                                    <a href="https://github.com/suryaprakashr1025/Chatapp_frontend" target="_blank" type="button" class="btn btn-success my-3 projectbtn">BackEnd</a>
                                    <a href="https://master--glittery-khapse-1f38ea.netlify.app/login" target="_blank" type="button" class="btn btn-success my-3 projectbtn">View</a>
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

