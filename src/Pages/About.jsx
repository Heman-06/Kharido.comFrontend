import React from 'react'
import './About.css'
import Quality from './Quality'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const About = () => {
    return (
        <>
            <div class="about1">
                <div className='overlay'></div>
                <div class="about2">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="about3">
                <div className='about4'>
                    <hr className='abouthr' />
                    <h1>Who We Are</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
                        vitae erat consequat auctor eu in elit.
                    </p>
                </div>
                <div className='about5'>
                    <img src='https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/slide-image-free-img.jpg' alt='' />
                </div>
            </div>
            <div className='about6'>
                <hr className='abouthr' />
                <h4>A Few Words About</h4>
                <h1>Our Team</h1>
                <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                <div className='about7'>
                    <div className='about8'>
                        <div className="about81">
                        </div>
                        <span>
                            <h5>Harvey Spector</h5>
                            <p>Founder</p>
                        </span>
                    </div>
                    <div className='about8'>
                        <div className="about81">
                        </div>
                        <span>
                            <h5>Harvey Spector</h5>
                            <p>Founder</p>
                        </span>
                    </div>
                    <div className='about8'>
                        <div className="about81">
                        </div>
                        <span>
                            <h5>Harvey Spector</h5>
                            <p>Founder</p>
                        </span>
                    </div>
                    <div className='about8'>
                        <div className="about81">
                        </div>
                        <span>
                            <h5>Harvey Spector</h5>
                            <p>Founder</p>
                        </span>
                    </div>
                    <div className='about8'>
                        <div className="about81">
                        </div>
                        <span>
                            <h5>Harvey Spector</h5>
                            <p>Founder</p>
                        </span>
                    </div>
                    <div className='about8'>
                        <div className="about81">
                        </div>
                        <span>
                            <h5>Harvey Spector</h5>
                            <p>Founder</p>
                        </span>

                    </div>
                </div>
            </div>


            <div className='about9'>
                <div className='about10'>
                    <hr className='abouthr' />
                    <h1>Follow Us</h1>
                    <div className="ab11">
                        <span>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </span> <span>
                            <FontAwesomeIcon icon={faGoogle} size="2x" />
                        </span> <span>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </span>
                    </div>
                </div>
            </div>
            <Quality />
        </>
    )
}
