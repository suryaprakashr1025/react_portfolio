import React from 'react'
import home from "./web/home.png"
import "./Home.css"
import resume from "./resume/RESUME.pdf"
function Home() {
    return (
        <div className='container-fluid col-12'>
            <section id="home">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 order-1 pt-5" style={{display: "flex", flexDirection: "column", justifyContent: "center",padding:"0px 100px" }}>
                        <h1 style={{ fontWeight: "1000", color: "blue" }}>Hi I'm Surya Prakash</h1>
                        <h5 style={{ fontWeight: "1000", color: "blue" }}>I am a Full Stack Developer</h5>
                        <p class="my-lg-2 my-3" style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet architecto
                            a ab, facere aliquid
                            eum ipsum dicta voluptates. Exercitationem at ullam culpa accusantium deserunt pariatur debitis
                            assumenda excepturi voluptatem cumque.</p>
                        <div>
                            <a class="btn btn-primary my-lg-3 my-3 homebtn" target="_blank" href={resume} style={{ width: "fitcontent" }}>Resume</a>
                        </div>

                    </div>
                    <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2" style={{  display: "flex", flexDirection: "row", justifyContent: "flexend", alignItems: "flexend" }}>
                        <img src={home} class="img-fluid" style={{ width: "80%" }} />
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Home