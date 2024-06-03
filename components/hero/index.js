import React from "react";
import Slider from "react-slick";
import Link from 'next/link'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero4 from '/public/images/shape/shape.png'
import Image from "next/image";



const Hero = () => {

    var settings = {
        dots: true,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className="hero-slider hero-style-1">
            <Slider {...settings}>
                <div className="slide">
                    <div className="slide-inner" style={{ backgroundImage: `url(${'/images/slider/slide-1.jpg'})` }}>
                        <div className="container">
                            <div className="slide-thumb">
                                <span>GO FOR HELP</span>
                            </div>
                            <div className="slide-title">
                                <h2> let's make a positive impact together!.</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                
                            </div>
                            <div className="slide-btns">
                                <Link href="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div className="slide-shape">
                            <Image src={hero4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide-inner" style={{ backgroundImage: `url(${'/images/slider/slide-2.jpeg'})` }}>
                        <div className="container">
                            <div className="slide-thumb">
                                <span>GO FOR HELP</span>
                            </div>
                            <div className="slide-title">
                                <h2>Your donation can make a world of difference..</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                               
                            </div>
                            <div className="slide-btns">
                                <Link href="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        <div className="slide-shape">
                            <Image src={hero4} alt="" />
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide-inner" style={{ backgroundImage: `url(${'/images/slider/slide-3.jpg'})` }}>
                        <div className="container">
                            <div className="slide-thumb">
                                <span>GO FOR HELP</span>
                            </div>
                            <div className="slide-title">
                                <h2>Join us in making the world a better place.</h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                               
                            </div>
                            <div className="slide-btns">
                                <Link href="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="slide-shape">
                            <Image src={hero4} alt="" />
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    )
}

export default Hero;