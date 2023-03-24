import React from 'react'
import "./Contact.css"
import contact from "./web/contactimg.jpg"
function Contact() {
    return (
   


        <div className='container-fluid col-12'>
        <section id="home">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12 order-1 " style={{display: "flex", flexDirection: "column", justifyContent: "center",padding:"0px 100px" }}>
                   <div className='mb-4'>
                   <h2 style={{ fontWeight: "1000", color: "blue" }}>Email</h2>
                    <h5 style={{ fontWeight: "1000", color: "#000080" }}>suryaprakashr1025@gmail.com</h5>
                   </div>
                   <div>
                   <h2 style={{ fontWeight: "1000", color: "blue" }}>Address</h2>
                    <h5 style={{ fontWeight: "1000", color: "#000080" }}>Thudiyalur, Coimbatore-641017</h5>
                    <h5 style={{ fontWeight: "1000", color: "#000080" }}>TamilNadu</h5>
                    <h5 style={{ fontWeight: "1000", color: "#000080" }}> India</h5>

                   </div>
                 
                 

                </div>
                <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2" style={{  display: "flex", flexDirection: "row", justifyContent: "flexend", alignItems: "flexend" }}>
                    <img src={contact} class="img-fluid" style={{ width: "80%" }} />
                </div>
            </div>
        </section>
    </div>
    )
}

export default Contact