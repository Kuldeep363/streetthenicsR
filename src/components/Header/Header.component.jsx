import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Header.css'
import Logo from '../../assets/images/street-thenics-logo.svg';

function Header(props) {
    const [ mobNavActive, setMobActive] = useState(false)
    const handleMenuClick = () => {
      document.querySelector("body").classList.toggle("mob-nav-active");
      setMobActive(!mobNavActive)
    }

  return (
    <div id="navbars" className={mobNavActive?'active': ''}>
      {/* web navbar  */}
      <div id="navbar-links" className="pt-2 pb-2" >
        <div className="myContainer myNavbar">
          <div className="d-flex justify-content-between">
            <div id="logo" className="mt-auto mb-auto">
              <Link to="/"> 
                <img src={Logo} alt="street thenics" style={{width:'40px'}} />
                {/* <img src='https://drive.google.com/uc?id=1cHQTEAY9ZAu8IhRxl7_nzSRo1nRfG1H_' alt="street thenics" style={{width:'40px'}} /> */}
              </Link>
            </div>
            <div id="links" className='h-100 mt-auto mb-auto'>
                    <div id="nav-links" className="d-flex justify-content-between nav-content navbar-content">
                        {MenuItems.map((item, index) => {
                          return (
                            <div key={index} className="position-relative ">
                                <span>{item.title} </span>
                                <span><svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.28 5.96667L8.93333 10.3133C8.42 10.8267 7.58 10.8267 7.06667 10.3133L2.72 5.96667" stroke="#252525" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                </span>
                                
                                <div className="hover-list">
                                {
                                    item.subItems.map((subItem,i)=>{
                                        return (
                                            <Link  to={subItem.url} key={i}>
                                                {subItem.title} 
                                            </Link>
                                        )
                                    })
                                }
                                </div>
                            </div>
                          );
                        })}
                    </div>
                    {/* <div className="hire-btn m-auto">
                      <PrimaryBtn label="Hire me" link="contact-me" btnType="primary-btn" />
                    </div> */}
            </div>
            {/* mobile links */}
            <div id="mobile-navbar" className='h-100 mt-auto mb-auto'>
              <div className="d-flex">
                {/* <div className="hire-btn mt-auto mb-auto mr-5">
                  <PrimaryBtn label="Hire me" link="contact-me" btnType="primary-btn " />
                </div> */}
                <div id="menu-toggler" className="d-flex align-items-center"  onClick={()=>handleMenuClick()}>
                  <div
                    className={`hamburger-menu ${mobNavActive?'active': ''}`}
                    id="hamburger-menu"
                   
                  >
                    <div className="menu-bar1"></div>
                    <div className="menu-bar3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* mobile links end */}
          </div>
        </div>
        <div
          id="mob-navbar-links"
          className={`links ${mobNavActive?'active': ''}`}>
          <div className=" pl-3 pr-3 pt-5 mt-4">
            <div>
              {MenuItems.map((item, index) => {
                return (
                  <div className="mb-3 mob-menu-parent" key={index}>
                    <h2 className='menu-heading'>{item.title}</h2>
                    <div className="subItems">
                        {
                            item.subItems.map((subItem,i)=>{
                                return (
                                    <div key={i} className="pl-2 pt-2 pb-2 mob-menu-parent-links" onClick={()=>handleMenuClick()}>
                                        <Link to={subItem.url}  >{subItem.title}</Link>
                                    </div>
                                )
                            })  
                        }
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header