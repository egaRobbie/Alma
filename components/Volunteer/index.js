
import React from 'react'

import TeamSection from '../team'

import vimg from '/public/images/volunteer.jpg'
import Image from 'next/image'

const Volunteer = () =>  {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    return(
        <div className="volunteer-page">
          
            <TeamSection addclassName="v2"/>
        </div>
    )
    
}
   

    
    export default Volunteer;
          
          
          
          
