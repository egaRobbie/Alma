import React from 'react'
import Link from 'next/link'
import VideoModal from '../../components/ModalVideo'
import abimg from '/public/images/about.jpg'
import abimg2 from '/public/images/about/1.png'
import abimg3 from '/public/images/about/2.png'
import abimg4 from '/public/images/shape/shape2.png'
import Image from 'next/image'

const About2 = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="about-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12  grid col-12">
                        <div className="video-area">
                            <Image src={abimg} alt="" className='abimgg' />
                          
                        </div>
                    </div>
                    <div className="col-lg-7 grid  col-md-12 col-12">
                        <div className="about-text">
                            <div className="section-title">
                                <div className="thumb-text">
                                    <span>ABOUT US</span>
                                </div>
                                <h2>Alma Foundation is a  <span>Nonprofit  </span> Organization Setup <span> to Help</span> Children  in Need.</h2>
                            </div>
                            <p>At Alma Foundation, our mission is to create a better world by providing support and resources to those in need. We are committed to making a positive impact through community-driven initiatives, education, healthcare, and emergency relief. With the help of our dedicated volunteers and generous donors, we strive to bring hope and change to lives every day.</p>
                            <div className="ab-icon-area">
                                <div className="about-icon-wrap">
                                    <div className="about-icon-item">
                                        <div className="ab-icon">
                                            <Image draggable="false" src={abimg2} alt="" />
                                        </div>
                                        <div className="ab-text">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Save  Children.</Link></h2>
                                        </div>
                                    </div>
                                    <div className="about-icon-item">
                                        <div className="ab-icon ab-icon2">
                                            <Image draggable="false" src={abimg3} alt="" />
                                        </div>
                                        <div className="ab-text">
                                            <h2><Link onClick={ClickHandler} href="/cause-single/Financial-Help-for-Poor-Families">Fresh And  Clean Water.</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-shape">
                <Image src={abimg4} alt="" />
            </div>
        </div>
    )
}

export default About2;