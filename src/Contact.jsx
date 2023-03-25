import React from 'react'
import "./Contact.css"
import contact from "./web/contactimg.jpg"
function Contact() {
    return (



        <div className='container-fluid col-12'>
            <section id="home">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 order-1 " style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px 100px" }}>
                        <div className='mb-4'>
                            <h4 style={{ fontWeight: "1000", color: "rgb(109, 61, 241)" }}>Github</h4>
                            <a style={{
                                fontWeight: "1000", color: "rgb(162, 135, 236)", textDecoration:
                                    "none"
                            }} target="_blank" href='https://github.com/suryaprakashr1025/'>https://github.com/suryaprakashr1025/</a>
                        </div>
                        <div className='mb-4'>
                            <h4 style={{ fontWeight: "1000", color: "rgb(109, 61, 241)" }}>Phone</h4>
                            <h6 style={{ fontWeight: "1000", color: "rgb(162, 135, 236)" }}>9566953853</h6>
                        </div>
                        <div className='mb-4'>
                            <h4 style={{ fontWeight: "1000", color: "rgb(109, 61, 241)" }}>Email</h4>
                            <h6 style={{ fontWeight: "1000", color: "rgb(162, 135, 236)" }}>suryaprakashr1025@gmail.com</h6>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: "1000", color: "rgb(109, 61, 241)" }}>Address</h4>
                            <h6 style={{ fontWeight: "1000", color: "rgb(162, 135, 236)" }}>Thudiyalur, Coimbatore-641017</h6>
                            <h6 style={{ fontWeight: "1000", color: "rgb(162, 135, 236)" }}>TamilNadu</h6>
                            <h6 style={{ fontWeight: "1000", color: "rgb(162, 135, 236)" }}> India</h6>

                        </div>



                    </div>
                    <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2" style={{ display: "flex", flexDirection: "row", justifyContent: "flexend", alignItems: "flexend" }}>
                        <img src={contact} class="img-fluid" style={{ width: "80%" }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact