import React from 'react'
import "./About.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import mern from "./web/mern.png"

function About() {
    return (
        <div className='container-fluid col-12'>
            <section id="about">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center",alignItems:"center" }}>
                        <img src={mern} class="img-fluid"  style={{width:"70%",height:"55vh"}}/>
                    </div>
                    <div class="col-lg-6 col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center" ,alignItems:"center" }}>
                        <h1 style={{ fontWeight: "1000", color: "blue" }}>About Us</h1>
                       
                        <p style={{ textAlign: 'justify',padding:"0px 70px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat facere perferendis, quod dolorum
                            quam corporis nulla neque delectus porro nostrum, aperiam id repellat, temporibus at sed et
                            laudantium laborum quasi.</p>
                        <button class="btn btn-primary my-lg-3 my-3">Services</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About