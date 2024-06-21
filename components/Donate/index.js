import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import pmt1 from '/public/images/checkout/img-1.png'
import pmt2 from '/public/images/checkout/img-2.png'
import pmt3 from '/public/images/checkout/img-3.png'
import pmt4 from '/public/images/checkout/img-4.png'
import Image from 'next/image'

import Modal from 'react-modal';
import { MdCancel } from "react-icons/md";
import { Router, useRouter } from 'next/router';



const customStyles = {
    content: {
        top: "52%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        padding: "0", // Remove padding
        backgroundColor: "transparent", // Make background transparent
        border: "none", // Remove border
        overflow: "hidden", // Ensure no overflow
        zIndex: 999999,
        width: "100%", // Adjust as necessary
        height: "90%", // Adjust as necessary
    },
    overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)", // Semi-transparent background
        zIndex: 999999, // Higher zIndex value for overlay
    },
};




const Donate = (props) => {


    const [loading,setLoading] = useState(false)
    const router = useRouter()


    const BASE_URL = 'https://checkout.eganowpay.com'
    // const BASE_URL = 'https://intergrated-checkout.vercel.app'

    const [ip, setIP] = useState("");
    const [currency, setCurrency] = useState('GHS');

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    // const [paymentMethod, setPaymentMethod] = useState('card');
    const [checkoutUrl, setCheckoutUrl] = useState('');

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

      // function to setCurrency
      function changeCurrency(curr) {
        setCurrency(curr)

    }

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, [])

  useEffect(() => {
    const handlePaymentMessage = (event) => {
      if (event.data === "successful") {
        router.push("/payment_status?status=success");
      } else if (event.data === "failed") {
        router.push("/payment_status?status=failed");
      }
    };
    window.addEventListener("message", handlePaymentMessage);

    return () => {
      window.removeEventListener("message", handlePaymentMessage);
    };
}, []);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        const postData = {
            // payer: {
            //     first_name: formData.firstName,
            //     last_name: formData.lastName,
            //     email: formData.email,
            //     mobile_number: formData.phone,
            // },
            // customer_id: "59B4F9195EC94D98",
            // callback_url: "https://www.almafoundationngo.org/payment_status",
            // amount: formData.amount,
            // ip_address: ip,
            // currency
            username: process.env.NEXT_PUBLIC_USERNAME,
            password: process.env.NEXT_PUBLIC_PASSWORD,
            x_auth: process.env.NEXT_PUBLIC_X_AUTH,
            amount: formData.amount?.toString(),
            callback_url: "https://www.almafoundationngo.org/payment_status",
            payment_view_mode : "MODAL",
            allowed_payment_method:"CARD"
        }
        try {
            const sendRequest = await axios.post(`${BASE_URL}/api/credentials`, postData)
            if (sendRequest?.data?.public_key) {
                const url = `${BASE_URL}/${sendRequest.data.public_key}`;
                setCheckoutUrl(url);
                openModal()
                setLoading(false)
            } else {
                toast.warning('Something went wrong , Retry')
            }
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
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
                                    {/* <div className='d-flex p-2 gap-2 bg-white mb-4 justify-content-end'>
                                        <button type='button' className={`px-4 py-1 rounded border-0 outline-0 text-secondary  ${currency == 'USD' ? 'bg-success text-white shadow' : ''}`} onClick={() => changeCurrency('USD')}>USD</button>
                                        <button type='button' className={`px-4 py-1 rounded border-0 outline-0 text-secondary ${currency == 'GHS' ? 'bg-success text-white  shadow' : ''}`} onClick={() => changeCurrency('GHS')}>GHS</button>
                                    </div> */}
                                    <h2>Your Donation</h2>
                                    <div className='d-flex gap-2'>
                                        <input className="border-success bg-white fw-bold text-success w-25 text-center form-control" type="text" disabled id="text" value={'USD'} />
                                        <input className="form-control" type="text" required name="amount" id="text"placeholder="Enter Donation Amount" value={formData.amount} onChange={handleInputChange} />
                                    </div>
                                    {/* <input type="text" required className="form-control" name="amount" onChange={handleInputChange} id="text" placeholder="Enter Donation Amount"/> */}
                                </div>
                                <div className="tp-donations-details">
                                    <h2>Details</h2>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" required className="form-control" name="firstName" id="fname" placeholder="First Name" onChange={handleInputChange}/>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                            <input type="text" required className="form-control" name="lastName" onChange={handleInputChange} id="name" placeholder="Last Name"/>
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
                                    <button type="submit" className="theme-btn submit-btn" disabled={loading}>
                                        {
                                            loading ? 'Processing.....' : 'Donate'
                                        }
                                    </button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div>


            <div>
                    <Modal
                        className=""
                        onClick={() => alert("sdf")}
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <div className=" text-center pb-md-4">
                            <MdCancel
                                onClick={closeModal}
                                color='red'
                                size={24}
                                className=" text-center shadow-lg  modal-close "
                            />
                        </div>
                        <iframe
                            src={checkoutUrl}
                            style={{
                                width: "100%",
                                height: "100%",
                                margin: "0",
                                backgroundColor: "transparent", // Semi-transparent background
                            }}
                        ></iframe>
                    </Modal>
                </div>
        </div>
    )
}

export default Donate;