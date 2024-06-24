import React from 'react'
import Link from 'next/link'
import Causes from '../../api/cause'
import Image from 'next/image'

const CauseSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className="case-area section-padding">
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-title section-title2 text-center">
                        <div className="thumb-text">
                            <span>CAUSES</span>
                        </div>
                        <h2>How Do We Help?</h2>
                        
                    </div>
                </div>
                <div className="row">
                    {Causes.slice(0, 3).map((Cause, citem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={citem}>
                            <div className="cause-item">
                                <div className="cause-top">
                                    <div className="cause-img">
                                        <Image src={Cause.cImg} alt="" />
                                        <div className="case-btn">
                                            <Link onClick={ClickHandler} href="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="cause-text">
                                  
                                    <h3>{Cause.cTitle}</h3>
                                 
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CauseSection;