import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import pmt1 from '/public/images/checkout/img-1.png'
import pmt2 from '/public/images/checkout/img-2.png'
import pmt3 from '/public/images/checkout/img-3.png'
import pmt4 from '/public/images/checkout/img-4.png'
import Image from 'next/image'

const Donate = (props) => {

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }

    const BASE_URL = 'https://eganow-mc-checkout.vercel.app/api/credentials'

    const [ip, setIP] = useState("");
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        amount: ""

    });

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    setIP(res.data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, [])


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const postData = {
            payerInfo : {
                first_name : formData.firstName,
                last_name : formData.lastName,
                email : formData.email,
                mobile_number : formData.phone,
            },
            customer_id : "4BDFB5479C224EE9",
            callback_url : "https://localhost:3000",
            amount : formData.amount,
            ip_address : ip
        }
        try {
            const sendRequest = await axios.post(`${BASE_URL}` ,postData)
            if(sendRequest.data.public_key){
                window.location.href = `https://eganow-mc-checkout.vercel.app/${sendRequest.data.public_key}`

            }
            // console.log(sendRequest.data.public_key);
        } catch (error) {
            console.log(error);
        }
        // console.log(postData)
        // setFormData({})
    };

    return(
        <div className="tp-donation-page-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="tp-donate-header">
                            <h2>Make a Donation</h2>
                        </div>
                        <div id="Donations">
                            <form onSubmit={handleSubmit} action="#">
                                <div className="tp-donations-amount">
                                    <h2>Your Donation</h2>
                                    <input type="number" required className="form-control" name="amount" onChange={handleInputChange} id="text" placeholder="Enter Donation Amount"/>
                                </div>
                                <div className="tp-donations-details">
                                    <h2>Details</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" required className="form-control" name="firstname" id="fname" placeholder="First Name" onChange={handleInputChange}/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" required className="form-control" name="lastname" onChange={handleInputChange} id="name" placeholder="Last Name"/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                            <input type="email" required className="form-control" name="email" onChange={handleInputChange} id="email" placeholder="Email"/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" required className="form-control" name="phone" onChange={handleInputChange} id="phone" placeholder="phone"/>
                                        </div>
                                        
                                    </div>
                                </div>
                              
                                <div className="submit-area sub-btn">
                                    <button type="submit" className="theme-btn submit-btn">Donate Now</button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate;