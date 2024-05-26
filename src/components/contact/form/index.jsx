import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        send(
            "service_k6zp6tl", // Service ID
            "template_0u6ekb8", // Template ID
            data,
            "7N8wfwIve8i98UdDS" // Public Key - https://dashboard.emailjs.com/admin/account
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                formSuccess();
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    const formSuccess = () => {
        toast("Thanks for submitting your query, Please check your mail !");
        document.getElementById("queryForm").reset();
    };

    return (
        <div className="query-form">
            <ToastContainer />
            <form
                id="queryForm"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="input-field">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Name"
                        {...register("from_name", {
                            required: "Name is required",
                            pattern: {
                                value:/^[a-zA-Z\s]+$/,
                                message: "Invalid Name",
                            },
                        })}
                    />
                    {errors.from_name?.message && (
                        <p className="error">{errors.from_name?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder="Email"
                        {...register("reply_to", {
                            required: "Email is required",
                            minLength: {
                                value: 10,
                                message: "Email is not valid",
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    {errors.reply_to?.message && (
                        <p className="error">{errors.reply_to?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone"
                        {...register("phone_number", {
                            required: "Phone number is required",
                            minLength: {
                                value: 10,
                                message: "Phone number should be of 10 digits",
                            },
                            maxLength:{
                                value:10,
                                message: "Phone number should be of 10 digits",
                            },
                            pattern: {
                                value:/^[6-9]\d{9}$/,
                                message: "Invalid Number",
                            },
                        })}
                    />
                    {errors.phone_number?.message && (
                        <p className="error">{errors.phone_number?.message}</p>
                    )}
                </div>

                <div className="input-field">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Subject is required",
                            minLength: {
                                value: 5,
                                message: "Minimum 5 characters required",
                            },
                            maxLength: {
                                value: 50,
                                message: "Maximum 50 characters allowed",
                            },
                        })}
                    />
                    {errors.subject?.message && (
                        <p className="error">{errors.subject?.message}</p>
                    )}
                </div>

                <div className="input-field full-width">
                    <textarea
                        className="textarea"
                        name="message"
                        placeholder="Your message"
                        {...register("message", {
                            required: "Message is required",
                            minLength: {
                                value: 20,
                                message: "Minimum 20 characters required",
                            },
                            maxLength: {
                                value: 500,
                                message: "Maximum 500 characters allowed",
                            },
                        })}
                    />
                    {errors.message?.message && (
                        <p className="error">{errors.message?.message}</p>
                    )}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
