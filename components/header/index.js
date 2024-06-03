import React from 'react'
import Logo from '/public/images/logo/logo.png'
import Link  from 'next/link'

import MobileMenu from '../../components/MobileMenu'
import min1 from '/public/images/shop/mini/img-1.jpg'
import min2 from '/public/images/shop/mini/img-2.jpg'
import Image from 'next/image'

const Header = (props) => {
    const SubmitHandler = (e) =>{
        e.preventDefault()
     }

    return(	
	<div className="middle-header">
   
        <div className="header-style-3">
            <div className="container">
                <div className="header-content">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 col-4">
                        <div className="logo">
                            <Link href="/home" title=""><Image src={Logo} alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-lg-8 d-lg-block d-none ">
                        <nav>
                            <ul>
                                <li><Link className="active" href="/home" title="">Home</Link></li>
                                <li><Link href="/about" title="">About</Link></li>
                                <li><Link href="/contact" title="">Contact</Link></li>
                                <li><Link className="theme-btn" href="/donate">Donate Now</Link></li>
                            </ul>
                        </nav>
                    </div>
                
                    <div className="col-md-2 col-sm-2 col-2">
                        <MobileMenu/>
                    </div>
                </div>
                
                    <div className="clearfix"></div>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Header;