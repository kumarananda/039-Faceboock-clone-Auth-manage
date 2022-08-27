import React, { useState } from 'react'
import './Header.scss'
import { BsFacebook, BsSearch } from "react-icons/bs";
import HeadSearchModal from './HeadSearchMod/HeadSearchModal';
import { BiArrowBack } from "react-icons/bi";
import pro_img from '../../assets/img/AuthImges/pro.jpg'
import { AiOutlineClose } from "react-icons/ai";
import '../../App'



const Header = () => {
    
    // HeadSearchModal state
    const [show, setShow] = useState('');
    const handleClose = () => setShow('');
    const handleShow = () => setShow('show');



  return (
    <>
        <div  className="site-header">
            {/* custom modal */}
            <div className="modal-box">
            <div className={`search-modal ${show}`}>
                <div className="top-bar">
                    <div className="back">
                        <BiArrowBack onClick={handleClose} />
                    </div>
                    <div className="input-value">
                        <input type="text" placeholder='Scearch Facebook' />
                    </div>
                </div>
                <div className="title-box">
                    <h5>Recent searches</h5>
                    <h5><a href="#">Edit</a></h5>
                </div>
                <div className="result-box">
                    
                    <div className="result-item">
                        <div className="left">
                            <img src={pro_img} alt="" />
                            <span>Ananda Saha</span>
                        </div>
                        <><AiOutlineClose/></>
                    </div>
                    <div className="result-item">
                        <div className="left">
                            <img src={pro_img} alt="" />
                            <span>Ananda Saha</span>
                        </div>
                        <><AiOutlineClose/></>
                    </div>
                    <div className="result-item">
                        <div className="left">
                            <img src={pro_img} alt="" />
                            <span>Ananda Saha</span>
                        </div>
                        <><AiOutlineClose/></>
                    </div>
                    <div className="result-item">
                        <div className="left">
                            <img src={pro_img} alt="" />
                            <span>Ananda Saha</span>
                        </div>
                        <><AiOutlineClose/></>
                    </div>


                </div>
            </div>
            </div>



            {/*  */}
            <div className="header-box">
                <div className="header-left items">
                    <div className="logo">
                        <BsFacebook/>
                    </div>
                    <div  className="input-scearch">
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