import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        message: "",
        email: "",
        subject: ""
    });

    const emailSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("", formData);
            console.log(response.data)
        } catch {
            console.log("not sent email")
        }
    }

    const change = (e) => {
        const { value, name } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }


    return (
        <>
            <div>
                <div className='cnt1'>
                    <div className='overlay2'></div>
                    <div className='cnt2'>
                        <h1>Contact Us</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='cnt4'>
                        <h4>Have any queries?</h4>
                        <h1> We're here to help.</h1>
                        <hr className='abouthr' />
                    </div>
                    <div className='cnt5'>
                        <div className='cnt6'>
                            <h4>Sales</h4>
                            <h6>Vestibulum ante ipsum primis in faucibus orci luctus.</h6>
                            <p>1800 123 4567</p>
                        </div>
                        <div className='cnt6'>
                            <h4>Sales</h4>
                            <h6>Vestibulum ante ipsum primis in faucibus orci luctus.</h6>
                            <p>1800 123 4567</p>
                        </div>
                        <div className='cnt6'>
                            <h4>Sales</h4>
                            <h6>Vestibulum ante ipsum primis in faucibus orci luctus.</h6>
                            <p>1800 123 4567</p>
                        </div>
                        <div className='cnt6'>
                            <h4>Sales</h4>
                            <h6>Vestibulum ante ipsum primis in faucibus orci luctus.</h6>
                            <p>1800 123 4567</p>
                        </div>
                    </div>
                </div>
                <div className='cnt7'>
                    <div className='cnt8'>
                        <h5>Don't be a stranger!</h5>
                        <h1> You tell us. We listen.</h1>
                        <h6>Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl,
                            eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et.
                            Nam mattis est sed tellus.</h6>
                    </div>
                    <div className='cnt9'>
                        <form class="my-form" onSubmit={emailSubmit}>
                            <input type="text" placeholder='Enter Your Name' id="name" name="name" onChange={change} />
                            <input type="text" placeholder='Subject' id="subject" name="subject" onChange={change} />
                            <input type="text" placeholder='E-mail' id="email" name="email" onChange={change} />
                            <textarea type="text" placeholder='Message' id="message" name="message" onChange={change} />
                            <button>Send Message</button>
                        </form>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Contact