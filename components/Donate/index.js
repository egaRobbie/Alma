import React from "react";
import { useForm } from "react-hook-form";

import pmt1 from "/public/images/checkout/img-1.png";
import pmt2 from "/public/images/checkout/img-2.png";
import pmt3 from "/public/images/checkout/img-3.png";
import pmt4 from "/public/images/checkout/img-4.png";
import Image from "next/image";

const Donate = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form submission
  };

  return (
    <div className="tp-donation-page-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="tp-donate-header">
              <h2>Make a Donation</h2>
            </div>
            <div id="Donations">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="tp-donations-amount">
                  <h2>Your Donation</h2>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Donation Amount"
                    {...register("amount", {
                      required: "Amount is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Amount must be a number",
                      },
                    })}
                  />
                  {errors.amount && <p className="error-message" >{errors.amount.message}</p>}
                </div>
                <div className="tp-donations-details">
                  <h2>Details</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                      />
                      {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        {...register("phoneNumber")}
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-area sub-btn">
                  <button type="submit" className="theme-btn submit-btn">
                    Donate Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
