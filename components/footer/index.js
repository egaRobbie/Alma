import React from 'react'
import Link  from 'next/link'
import Logo from '/public/images/logo/logo.png'
import n1 from '/public/images/instragram/1.jpg'
import n2 from '/public/images/instragram/2.jpg'
import n3 from '/public/images/instragram/3.jpg'
import n4 from '/public/images/instragram/4.jpg'
import n5 from '/public/images/instragram/5.jpg'
import n6 from '/public/images/instragram/6.jpg'
import Image from 'next/image'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="tp-site-footer">
        <div className="tp-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="footer-logo widget-title">
                                <Link onClick={ClickHandler} href="/"><Image src={Logo} alt="logo" className="flogo"/></Link>
                            </div>
                            <p>Your donation can make a world of difference. 
                         let's make a positive impact together!






</p>
                            <ul>
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link onClick={ClickHandler} href="/"><i className="ti-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget link-widget">
                            <div className="widget-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link onClick={ClickHandler} href="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} href="/volunteer">Our Volunteer</Link></li>
                                <li><Link onClick={ClickHandler} href="/contact">Contact Us</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-lg-offset-1 col-md-6 col-sm-12 col-12">
                        <div className="widget market-widget tp-service-link-widget">
                            <div className="widget-title">
                                <h3>Contact </h3>
                            </div>
                            
                            <div className="contact-ft">
                                <ul>
                                    <li><i className="fi flaticon-pin"></i>Accra, Ghana</li>
                                    <li><i className="fi flaticon-call"></i>+233554022344</li>
                                    <li><i className="fi flaticon-envelope"></i>abraham.alfanfoundation@gmail.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        <div className="tp-lower-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <p className="copyright">&copy; 2024 Alma Foundation . All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;