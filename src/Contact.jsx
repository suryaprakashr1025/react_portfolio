import React from 'react'
import "./Contact.css"
import contact from "./web/contactimg.jpg"
import call from "./web/call.jpg"
import { RxGithubLogo } from 'react-icons/rx';
import { IoMdCall } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
function Contact() {
    return (



        <div className='container-fluid col-12' style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

            <div style={{ padding: "150px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <h1 className='mb-5' style={{ color: "blue", fontWeight: 'bold' }}>Contact Us</h1>
                <div>
                    
                    <a class="card-title mb-4" style={{ cursor: "pointer", color: "black",padding:"15px" }} href="mailto:suryaprakashr1025@gmail.com" target="_blank"><MdEmail style={{width:"50px",height:"50px"}}/></a>
                    <a class="card-title mb-4" style={{ cursor: "pointer", color: "black",padding:"15px"  }} href="https://github.com/suryaprakashr1025/" target="_blank"><RxGithubLogo style={{width:"50px",height:"50px"}}/></a>
                    <a class="card-title mb-4" style={{ cursor: "pointer", color: "black",padding:"15px"  }} href="https://www.linkedin.com/in/suryaprakashr1025/" target="_blank"><BsLinkedin style={{width:"50px",height:"50px"}}/></a>
                    <h3 class="card-title mt-4" style={{fontWeight:"bold"}}><IoMdCall style={{width:"50px",height:"50px"}}/>9566953853</h3>
               
                </div>


            </div>

            <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2" style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <img src={contact} class="img-fluid" style={{ width: "80%" }} />
            </div>
        </div>
    )
}

export default Contact