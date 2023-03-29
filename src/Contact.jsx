import React from 'react'
import "./Contact.css"
import contact from "./web/contactimg.jpg"
import call from "./web/call.jpg"

function Contact() {
    return (



        <div className='container-fluid col-12'>

            {/* <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 order-1 " style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px 100px" }}>
                        <div className='mb-4'>
                            <h4 style={{ fontWeight: "bold", color: "#E11584" }}>Github</h4>
                            <a style={{
                                fontWeight: "1000", color: "orange", textDecoration:
                                    "none"
                            }} target="_blank" href='https://github.com/suryaprakashr1025/'>https://github.com/suryaprakashr1025/</a>
                        </div>
                        <div className='mb-4'>
                            <h4 style={{ fontWeight: "1000", color: "#E11584" }}>Phone</h4>
                            <h6 style={{ fontWeight: "1000", color: "orange" }}>9566953853</h6>
                        </div>
                        <div className='mb-4'>
                            <h4 style={{ fontWeight: "1000", color: "#E11584" }}>Email</h4>
                            <h6 style={{ fontWeight: "1000", color: "orange" }}>suryaprakashr1025@gmail.com</h6>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: "1000", color: "#E11584" }}>Address</h4>
                            <h6 style={{ fontWeight: "1000", color: "orange" }}>Thudiyalur, Coimbatore-641017</h6>
                            <h6 style={{ fontWeight: "1000", color: "orange" }}>TamilNadu</h6>
                            <h6 style={{ fontWeight: "1000", color: "orange" }}> India</h6>

                        </div>



                    </div>
                    <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2" style={{ display: "flex", flexDirection: "row", justifyContent: "flexend", alignItems: "flexend" }}>
                        <img src={contact} class="img-fluid" style={{ width: "80%" }} />
                    </div>
                </div> */}

            <section id="home" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
             
                    <div className='col-lg-6' >
                        <div className='row' >
                            <div class="card col-lg-6 mb-2 Github" style={{ width: "18rem" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title" >Github</h5>
                                    <hr />
                                    <a class="card-title" style={{cursor:"pointer",color:"white",textDecoration:"none"}}>https://github.com/suryaprakashr1025/</a>

                                </div>
                            </div>
                            <div class="card col-lg-6 mb-2 Phone" style={{ width: "18rem" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title" >Phone</h5>
                                    <hr />
                                    <h6 class="card-title">9566953853</h6>

                                </div>
                            </div>
                            <div class="card col-lg-6 Email mb-2" style={{ width: "18rem" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title" >Email</h5>
                                    <hr />
                                    <h6 class="card-title">suryaprakashr1025@gmail.com</h6>

                                </div>
                            </div>
                            <div class="card col-lg-6 Address mb-2" style={{ width: "18rem" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title" >Address</h5>
                                    <hr />
                                    <h6 class="card-title">Thudiyalur, Coimbatore-641017,
                                        TamilNadu,
                                        India</h6>

                                </div>
                                
                            </div>

                            <div class="card col-lg-6 linkedin" style={{ width: "18rem" }}>
                                <div class="card-body text-center">
                                    <h5 class="card-title" >LinkedIn</h5>
                                    <hr />
                                    <h6 class="card-title" style={{cursor:"pointer"}}>https://www.linkedin.com/in/suryaprakashr1025/</h6>

                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2" style={{ display: "flex", flexDirection: "row", justifyContent: "flexend", alignItems: "flexend" }}>
                        <img src={contact} class="img-fluid" style={{ width: "80%" }} />
                    </div>
         


            </section>


        </div>
    )
}

export default Contact