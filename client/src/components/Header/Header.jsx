import React, { useState } from 'react'
import './Header.scss'
import { BsFacebook, BsSearch } from "react-icons/bs";
import HeadSearchModal from './HeadSearchMod/HeadSearchModal';
import { BiArrowBack } from "react-icons/bi";



const Header = () => {
    // HeadSearchModal state
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



  return (
    <>
        <div className="site-header">
            {/* <HeadSearchModal 
                show={show}
                handleClose={handleClose}
            /> */}
            {/* custom modal */}
            <div className="search-modal">
                <div className="top-bar">
                    <div className="back">
                        <BiArrowBack />
                    </div>
                    <div className="input-value">
                        <input type="text" placeholder='Scearch Facebook' />
                    </div>
                </div>
                <div className="result-box">

                </div>
            </div>


            {/*  */}
            <div className="header-box">
                <div className="header-left items">
                    <div className="logo">
                        <BsFacebook/>
                    </div>
                    <div className="input-scearch">
                        <button onClick={handleShow}><BsSearch/> <span>Scearch Facebook</span></button>
                    </div>
                </div>
                <div className="header-center items">
                    <h3>test</h3>
                </div>
                <div className="header-right items">
                    <h3>test</h3>
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default Header