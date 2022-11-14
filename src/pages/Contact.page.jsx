import React from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";


function ContactPage() {
    let [formData, setFormData] = useState({name:'',email:'',msg:''});

    let [nameError, setNameError] = useState(false);
    let [nameErrMsg, setNameErrorMsg] = useState('');
    let [emailError, setEmailError] = useState(false);
    let [emailErrorMsg, setEmailErrorMsg] = useState('');
    let [msgError, setMsgError] = useState(false);
    let [msgErrorMsg, setMsgErrorMsg] = useState('');

    let [btnText, setBtnText] = useState('Send message');
    let [success, setSuccess] = useState(true);
    let [alertMsg, setAlertMsg] = useState('Thank you for contacting me! I will get back to you ASAP ');

    const checkName = (iValue) => {
        setFormData(values=>({...values,'name':iValue}))
        if (iValue === "") {
            setNameError(true)
            setNameErrorMsg('This field cannot be empty')
        } else if (iValue.match(/[0-9~!@#$%^&*()_+<>?/:;.{}]/i)) {
          setNameError(true)
          setNameErrorMsg('Numbers & special charaters are not allowed')
        } else {
          setNameError(false)
          setNameErrorMsg('')
  
        }
    }
  
    const checkEmail = (iValue)=>{
      setFormData(values=>({...values,'email':iValue}))
      if (iValue === "") {
        setEmailError(true)
        setEmailErrorMsg('This field cannot be empty')
      } else if (!iValue.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setEmailError(true)
        setEmailErrorMsg('Please enter correct email address')
      } else {
        setEmailError(false)
        setEmailErrorMsg('')
  
      }
    }
  
    const checkMsg = (iValue)=>{
      setFormData(values=>({...values,'msg':iValue}))
      if(iValue === ""){
        setMsgError(true)
        setMsgErrorMsg('This field cannot be empty')
      }else{
        setMsgError(false)
        setMsgErrorMsg('')
      }
    }

    //  Handle submit function
  const handleSubmit = (event)=>{
    event.preventDefault();
    // check for fields
    checkName(formData.name);
    checkEmail(formData.email);
    checkMsg(formData.msg);

    // if there is no name error and also fields are not empty(in starting) then we will proceed further
    if((!nameError && formData.name !== '') && (!emailError && formData.email !== '') && (!msgError && formData.msg !== '')){
      setBtnText('Sending...') //setting btn to sending
      event.target.style.pointerEvents = 'none'; // restriting user to do anything with form untill response fro API
      // sending api request to EmailJS
      emailjs.sendForm(process.env.REACT_APP_SERVICE_I, process.env.REACT_APP_TEMPLATE_ID, event.target,process.env.REACT_APP_PUBLIC_KEY)
      .then(()=>{
        // if the request resolves(fulfilled)
        setSuccess(true); 
        setAlertMsg('Thank you for contacting me! I will get back to you ASAP ');
        document.getElementById('alertPrompt').classList.add('show')
        event.target.reset(); //reseting the form for new request
  
      })
      .catch((res)=>{
        // if the request resolve(rejected)
        setSuccess(false);
        setAlertMsg('There is some error!⚠️ Please try again later');
        document.getElementById('alertPrompt').classList.add('show')
      })
      .finally(()=>{
        // after all the promises resolved we will perfor all these operations
        setBtnText('Send message');
        setTimeout(()=>{
          document.getElementById('alertPrompt').classList.remove('show')
        },3500)
        event.target.style.pointerEvents = 'all';
      })
    }
     


  }


  return (
    <div className=" myContainer contact-us m-top d-flex align-items-center justify-content-center pt-5 pb-5" id="contact">
      <div className="row m-0 mt-3 flex-wrap-reverse w-100">
        <div className="col-lg-6 col-xl-6 contact-bkg d-flex justify-content-left align-items-center">
          <div>
            <div>
              <h1 style={{color: 'var(--blue)',fontWeight: "700"}}>
                Write us at:
              </h1>
              <h1>
                <a href="mailto:streetthenics@gmail.com">
                  streetthenics@gmail.com
                </a>
              </h1>
            </div>
            <div>
              <h1 style={{color: 'var(--blue)',fontWeight: "700"}}>Send at: </h1>
              <h1>
                <a href="https://goo.gl/maps/sw98v6X35KL1opP77" target="_blank" rel="noreferrer">
                  Street Thenics, sector-5 vaishali ghaziabad U.P INDIA
                </a>
              </h1>
            </div>
            <div className="mt-3">
              <h1 style={{color: 'var(--blue)',fontWeight: "700"}}>Contact On</h1>
              <div className="d-flex  s-media">
                <div className="m-1 ">
                  <a
                    href="https://www.instagram.com/street_thenics/"
                    target="_blank" rel="noreferrer"
                  >
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="35"
                        height="35"
                        rx="5"
                        fill="#EC1D27"
                        fillOpacity="0.05"
                      />
                      <path
                        d="M26.9469 14.305C26.9369 13.5476 26.7951 12.7978 26.5279 12.089C26.2963 11.4912 25.9425 10.9482 25.4891 10.4948C25.0358 10.0415 24.4928 9.68767 23.8949 9.45602C23.1953 9.19338 22.4561 9.05136 21.7089 9.03602C20.7469 8.99302 20.4419 8.98102 17.9999 8.98102C15.5579 8.98102 15.2449 8.98102 14.2899 9.03602C13.5431 9.05147 12.8043 9.19349 12.1049 9.45602C11.507 9.68751 10.964 10.0413 10.5106 10.4947C10.0572 10.948 9.70344 11.4911 9.47195 12.089C9.20878 12.7882 9.06707 13.5271 9.05295 14.274C9.00995 15.237 8.99695 15.542 8.99695 17.984C8.99695 20.426 8.99695 20.738 9.05295 21.694C9.06795 22.442 9.20895 23.18 9.47195 23.881C9.70383 24.4788 10.0578 25.0216 10.5114 25.4748C10.9649 25.928 11.508 26.2816 12.1059 26.513C12.8034 26.7862 13.5423 26.9384 14.2909 26.963C15.2539 27.006 15.5589 27.019 18.0009 27.019C20.4429 27.019 20.7559 27.019 21.7109 26.963C22.4581 26.9483 23.1973 26.8066 23.8969 26.544C24.4946 26.3121 25.0375 25.9582 25.4908 25.5049C25.9441 25.0515 26.298 24.5087 26.5299 23.911C26.7929 23.211 26.9339 22.473 26.9489 21.724C26.9919 20.762 27.0049 20.457 27.0049 18.014C27.0029 15.572 27.0029 15.262 26.9469 14.305V14.305ZM17.9939 22.602C15.4399 22.602 13.3709 20.533 13.3709 17.979C13.3709 15.425 15.4399 13.356 17.9939 13.356C19.22 13.356 20.3959 13.8431 21.2629 14.7101C22.1299 15.577 22.6169 16.7529 22.6169 17.979C22.6169 19.2051 22.1299 20.381 21.2629 21.248C20.3959 22.115 19.22 22.602 17.9939 22.602V22.602ZM22.8009 14.263C22.6593 14.2631 22.5191 14.2354 22.3883 14.1812C22.2574 14.1271 22.1385 14.0477 22.0384 13.9476C21.9383 13.8474 21.8589 13.7286 21.8047 13.5977C21.7506 13.4669 21.7228 13.3266 21.7229 13.185C21.7229 13.0435 21.7508 12.9034 21.805 12.7727C21.8591 12.6419 21.9385 12.5232 22.0385 12.4231C22.1386 12.3231 22.2574 12.2437 22.3881 12.1895C22.5188 12.1354 22.659 12.1075 22.8004 12.1075C22.9419 12.1075 23.0821 12.1354 23.2128 12.1895C23.3435 12.2437 23.4623 12.3231 23.5624 12.4231C23.6624 12.5232 23.7418 12.6419 23.7959 12.7727C23.8501 12.9034 23.8779 13.0435 23.8779 13.185C23.8779 13.781 23.3959 14.263 22.8009 14.263Z"
                        fill="url(#paint0_linear)"
                      />
                      <path
                        d="M17.994 20.982C19.6525 20.982 20.997 19.6375 20.997 17.979C20.997 16.3205 19.6525 14.976 17.994 14.976C16.3355 14.976 14.991 16.3205 14.991 17.979C14.991 19.6375 16.3355 20.982 17.994 20.982Z"
                        fill="url(#paint1_linear)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="8.99695"
                          y1="17.9009"
                          x2="27.0049"
                          y2="17.9009"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EC1D27" />
                          <stop offset="1" stopColor="#AE1016" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear"
                          x1="14.991"
                          y1="17.946"
                          x2="20.997"
                          y2="17.946"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EC1D27" />
                          <stop offset="1" stopColor="#AE1016" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
                {/* <div className="m-1 ">
                  <a href="#">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.593 13.203C27.4791 12.7804 27.2565 12.395 26.9473 12.0852C26.6382 11.7753 26.2533 11.5519 25.831 11.437C24.265 11.007 18 11 18 11C18 11 11.736 10.993 10.169 11.404C9.74689 11.5242 9.36279 11.7508 9.05353 12.0621C8.74427 12.3735 8.52025 12.7591 8.40296 13.182C7.98996 14.748 7.98596 17.996 7.98596 17.996C7.98596 17.996 7.98196 21.26 8.39196 22.81C8.62196 23.667 9.29696 24.344 10.155 24.575C11.737 25.005 17.985 25.012 17.985 25.012C17.985 25.012 24.25 25.019 25.816 24.609C26.2385 24.4943 26.6237 24.2714 26.9336 23.9622C27.2435 23.653 27.4673 23.2682 27.583 22.846C27.997 21.281 28 18.034 28 18.034C28 18.034 28.02 14.769 27.593 13.203V13.203ZM15.996 21.005L16.001 15.005L21.208 18.01L15.996 21.005V21.005Z"
                        fill="url(#paint0_linear)"
                      />
                      <rect
                        width="35"
                        height="35"
                        rx="5"
                        fill="#EC1D27"
                        fillOpacity="0.05"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="7.98596"
                          y1="17.929"
                          x2="28.0001"
                          y2="17.929"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EC1D27" />
                          <stop offset="1" stopColor="#AE1016" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div> */}
                <div className="m-1 ">
                  <a
                    href="https://www.facebook.com/Street-thenics-104141605305767"
                    target="_blank" rel="noreferrer"
                  >
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.001 8.00201C12.479 8.00201 8.00195 12.479 8.00195 18.001C8.00195 22.991 11.658 27.127 16.439 27.88V20.892H13.899V18.001H16.439V15.798C16.439 13.29 17.932 11.907 20.215 11.907C21.309 11.907 22.455 12.102 22.455 12.102V14.561H21.191C19.951 14.561 19.563 15.333 19.563 16.124V17.999H22.334L21.891 20.89H19.563V27.878C24.344 27.129 28 22.992 28 18.001C28 12.479 23.523 8.00201 18.001 8.00201V8.00201Z"
                        fill="url(#paint0_linear)"
                      />
                      <rect
                        width="35"
                        height="35"
                        rx="5"
                        fill="#EC1D27"
                        fillOpacity="0.05"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="8.00195"
                          y1="17.8317"
                          x2="28"
                          y2="17.8317"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EC1D27" />
                          <stop offset="1" stopColor="#AE1016" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="m-1 ">
                  <a
                    href="https://twitter.com/StreetThenics?s=08"
                    target="_blank" rel="noreferrer"
                  >
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.633 13.997C25.646 14.172 25.646 14.346 25.646 14.52C25.646 19.845 21.593 25.981 14.186 25.981C11.904 25.981 9.784 25.32 8 24.172C8.324 24.209 8.636 24.222 8.973 24.222C10.786 24.2264 12.5476 23.6201 13.974 22.501C13.1334 22.4858 12.3186 22.2084 11.6432 21.7077C10.9679 21.207 10.4658 20.5079 10.207 19.708C10.456 19.745 10.706 19.77 10.968 19.77C11.329 19.77 11.692 19.72 12.029 19.633C11.1168 19.4488 10.2965 18.9543 9.70762 18.2337C9.11876 17.513 8.79769 16.6106 8.799 15.68V15.63C9.336 15.929 9.959 16.116 10.619 16.141C10.0661 15.7736 9.61272 15.275 9.29934 14.6898C8.98596 14.1045 8.82231 13.4508 8.823 12.787C8.823 12.039 9.022 11.353 9.371 10.755C10.3831 12 11.6455 13.0185 13.0763 13.7446C14.5072 14.4707 16.0746 14.8882 17.677 14.97C17.615 14.67 17.577 14.359 17.577 14.047C17.5767 13.5179 17.6807 12.994 17.8831 12.5052C18.0854 12.0164 18.3821 11.5723 18.7562 11.1982C19.1303 10.8241 19.5744 10.5274 20.0632 10.3251C20.5521 10.1227 21.076 10.0187 21.605 10.019C22.765 10.019 23.812 10.505 24.548 11.291C25.4498 11.1166 26.3145 10.7874 27.104 10.318C26.8034 11.2488 26.1738 12.0381 25.333 12.538C26.1328 12.4468 26.9144 12.2364 27.652 11.914C27.1011 12.7171 26.4185 13.4213 25.633 13.997V13.997Z"
                        fill="url(#paint0_linear)"
                      />
                      <rect
                        width="35"
                        height="35"
                        rx="5"
                        fill="#EC1D27"
                        fillOpacity="0.05"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear"
                          x1="8"
                          y1="17.9122"
                          x2="27.652"
                          y2="17.9122"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EC1D27" />
                          <stop offset="1" stopColor="#AE1016" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <form id="c-form" onSubmit={handleSubmit} method="post">
            <div className="form">
              <div className="group-input">
                {/* <!-- <label for="name">Your Name</label>  --> */}
                <div className="group-field">
                  <div className="input-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.1399 21.6198C17.2599 21.8798 16.2199 21.9998 14.9999 21.9998H8.99986C7.77986 21.9998 6.73986 21.8798 5.85986 21.6198C6.07986 19.0198 8.74986 16.9697 11.9999 16.9697C15.2499 16.9697 17.9199 19.0198 18.1399 21.6198Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    placeholder="Enter your full name"
                    onChange={
                        (e) => checkName(e.target.value)
                    }
                    className={
                        `form-control ${
                            nameError ? "is-invalid" : ""
                        }`
                    }
                    aria-describedby="nameError"
                  />
                </div>
                  <small id="nameError" className="mt-1"
                          style={
                              {
                                  color: "red",
                                  display: "block",
                                  height: "20px"
                              }
                        }>
                            {nameErrMsg} 
                        </small>
              </div>
              <div className="group-input">
                {/* <!-- <label for="email">Your Email</label>  --> */}
                <div className="group-field">
                  <div className="input-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="reply_to"
                    id="email"
                    placeholder="Enter your email address"
                    onChange={
                        (e) => checkEmail(e.target.value)
                    }
                    className={
                        `form-control ${
                            emailError ? "is-invalid" : ""
                        }`
                    }
                    aria-describedby="emailError"
                  />
                </div>
                <small id="emailError" className="mt-1"
                    style={
                        {
                            color: "red",
                            display: "block",
                            height: "20px"
                        }
                }>
                    {emailErrorMsg} 
                </small>
              </div>
              <div className="group-input">
                {/* <!-- <label for="msg">Message</label>  --> */}
                <div className="group-field">
                  <div className="input-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.9965 11H16.0054"
                        stroke="#292D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9955 11H12.0045"
                        stroke="#292D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.99451 11H8.00349"
                        stroke="#292D32"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="message"
                    id="msg"
                    placeholder="Enter your message"
                    onChange={
                        (e) => checkMsg(e.target.value)
                    }
                    className={
                        `form-control ${
                            msgError ? "is-invalid" : ""
                        }`
                    }
                    style={
                      {
                          resize:'none',
                          height:'125px',
                      }
                  }
                    aria-describedby="msgError"
                  />
                </div>
                <small id="msgError" className="mt-1"
                    style={
                        {
                            color: "red",
                            display: "block",
                            height: "20px"
                        }
                    }>
                    {msgErrorMsg} 
                </small>
              </div>
              <div className="group-input">
                <input
                  type="submit"
                  className="primary-btn text-center"
                  id="submit-btn"
                  value={btnText}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={`alert ${success?'alert-success':'alert-danger'}`} role="alert" id='alertPrompt'>
        {alertMsg}
      </div>
    </div>
  );
}

export default ContactPage;
