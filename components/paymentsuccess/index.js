import React from 'react';
import ContactForm from '../ContactFrom'
import { Link } from 'react-scroll';

const PaymentSuccess = ({ status }) => {

    return (
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        status == 'success' ?
                            <div className="col-lg-8 col-12">
                                <h2 className='text-center pb-4 text-success'>Your Donation was successful</h2>
                                <p className='text-center'>Thank your for donating to the Alma Foundation, We appreciate your generosity</p>
                            </div> :
                            <div className="col-lg-8 col-12">
                                <h2 className='text-center pb-4 text-danger'>Sorry your payment Failed</h2>
                                <p className='text-center'>Unfortunately, your payment could not be processed. Please check your details or try again later.
                                </p>
                                <div className='text-center'>
                                    <Link href="/donate" className="theme-btn my-3">Donate Now</Link>
                                </div>
                            </div>

                    }
                </div>

            </div>
        </section>
    )

}

export default PaymentSuccess;
