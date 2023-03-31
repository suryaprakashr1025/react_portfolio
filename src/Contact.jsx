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

        <div className='container-fluid col-12'>
            <section id="home">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-12 order-1 pt-5 con" style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "0px 150px" }}>
                        <h3 className='mx-auto mb-5' style={{ fontWeight: "1000", color: "blue" }}>Contact Us</h3>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                       
                       
                       <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                       <a class="card-title mail" style={{ cursor: "pointer", color: "black"  }} href="mailto:suryaprakashr1025@gmail.com" target="_blank"><MdEmail style={{ width: "50px", height: "50px" }} /></a>
                       <label className='e'>Send Mail</label>
                        
                       </div>
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <a class="card-title git" style={{ cursor: "pointer", color: "black" }} href="https://github.com/suryaprakashr1025/" target="_blank"><RxGithubLogo style={{ width: "50px", height: "50px" }} /></a>
                        <label className='g text-center'>View Code</label>
                     
                        </div>
                       <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                       <a class="card-title linked" style={{ cursor: "pointer", color: "black" }} href="https://www.linkedin.com/in/suryaprakashr1025/" target="_blank"><BsLinkedin style={{ width: "50px", height: "50px" }} /></a>
                       <label className='l'>View LinkedIn Profile</label>
                       </div>
                      
                       </div>
                      
                        <h5 class="card-title mt-4 mx-auto" style={{ fontWeight: "bold" }}><IoMdCall  />9566953853</h5>


                    </div>
                    <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2 " style={{ display: "flex", flexDirection: "row", justifyContent: "flexend", alignItems: "flexend" }}>
                        <img src={contact} class="img-fluid contactimg" style={{ width: "80%" }} />
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Contact