import React from 'react'
import Link from 'next/link'
import Team from '../../api/team'
import Image from 'next/image'

const TeamSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={` section-padding ${props.addclass}` }>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>Volunteer</span>
                            </div>
                            <h2>Want to volunteer? </h2>
                            <p>Make a difference in your community by volunteering with us! Your time and skills can bring hope and support to those in need. Join our dedicated team and help create positive change.</p>
                            <Link  href=""> <button className="theme-btn join" >Join our team</button></Link>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default TeamSection;