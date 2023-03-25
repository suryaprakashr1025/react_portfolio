import React from 'react'
import "./About.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import mern from "./web/mern.png"

function About() {
    return (
        <div className='container-fluid col-12'>
            <section id="about">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <img src={mern} class="img-fluid" style={{ width: "70%", height: "55vh" }} />
                    </div>
                    <div class="col-lg-6 col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <h1 style={{ fontWeight: "1000", color: "blue" }}>About Us</h1>

                        <p style={{ textAlign: 'justify', padding: "0px 70px", lineHeight: "30px" }}>I have the ability to think independently and develop web applications.
                            To create a web application, I will design the frontend well and connect the database to the backend and create apis. The code I write is dynamic, clean and maintainable. I am eager to learn new things and learn very quickly. Thank you for taking the time to learn more about me. I look forward to working with you!</p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About