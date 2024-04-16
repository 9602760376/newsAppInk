import React, { useState , useEffect} from 'react'
import "../../components/header/header.css"
import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import "../../assets/css/vendor/bootstrap.min.css"
import "../../assets/css/color.css"
import logo from "../../assets/images/logo2.svg"
import "../../assets/css/widgets.css"
import { FaHome } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { Link } from 'react-router-dom'
// import { FaFacebookF } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";
// import { SiInstagram } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
const Header = () => {
 



    return (
        <div>
            {/* <div class="container">
                <div class="row align-items-center"> 
                    <div class="col-7 col-md-8">
                        <ul class="top-head-social m-0 d-flex p-2">
                            <li><a target="_blank" href="#">
                                < FaFacebookF /></a></li>
                            <li><a target="_blank" href="#">
                                <FaTwitter /></a></li>
                            <li><a target="_blank" href="#">
                                < FaLinkedinIn /></a></li>
                            <li><a target="_blank" href="#">
                                < FaPinterest /></a></li>
                            <li><a target="_blank" href="#">
                                < SiInstagram /></a></li>
                        </ul>
                    </div>
                    <div class="col-5 col-md-4">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="select_language">
                                <div value="Hi" class="bootstrapDropdown dropdown">
                                    <button type="button" id="react-aria5420214290-:ra:" aria-expanded="false" class="DropdownToggle dropdown-toggle btn btn-primary" style={{ color: 'grey', backgroundColor: 'rgb(247, 248, 249)', }}>
                                        <span>Hindi </span></button>
                                    <div x-placement="bottom-start" aria-labelledby="react-aria5420214290-:ra:" class="select_language DropdownMenu dropdown-menu" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-start" style={{ position: 'absolute', inset: '0px auto auto 0px', transform: 'translate(1200px, 46px)', }}>
                                        <a aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" href="#">
                                            <span>Hindi </span></a>
                                        <a aria-selected="false" data-rr-ui-dropdown-item="" class="dropdown-item" role="button" tabindex="0" href="#">
                                            <span>English </span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <header class="main-header header-style-2 mb-40">
                <div class="header-bottom header-sticky background-white text-center">
                    <div class="scroll-progress gradient-bg-1"></div>
                    <div class="mobile_menu d-lg-none d-block">
                        <div class="slicknav_menu"></div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-2 col-md-3">
                                <div class="header-logo d-none d-lg-block">
                                    <Link to="/">
                                        <img class="logo-img d-inline" src={logo} alt="" />
                                    </Link>

                                </div>
                                <div class="logo-tablet d-md-inline d-lg-none d-none">
                                    <Link to="/">
                                        {/* <img class="logo-img d-inline" src={logo} alt="" /> */}

                                    </Link>
                                </div>
                                <div class="logo-mobile d-block d-md-none">
                                    <Link to="/">
                                        {/* <img class="logo-img d-inline" src={logo} alt="" /> */}

                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-10 col-md-9 main-header-navigation">
                                {/* <!-- Main-menu --> */}
                                <div class="main-nav text-left float-lg-left float-md-right">
                                    {/* <ul class="mobi-menu d-none menu-3-columns" id="navigation">
                                    <li class="cat-item cat-item-2"><a href="#">All News</a></li>
                                    <li class="cat-item cat-item-4"><a href="#">Politics</a></li>
                                    <li class="cat-item cat-item-5"><a href="#">Sports</a></li>
                                    <li class="cat-item cat-item-6"><a href="#">Movies</a></li>
                                    <li class="cat-item cat-item-7"><a href="#">Automotive</a></li>
                                    <li class="cat-item cat-item-2"><a href="#">Education</a></li>
                                </ul> */}

                                    <nav>
                                        <ul class="main-menu d-none d-lg-inline">
                                            {/* <li>
                                            <Link to={'/'}><span class="mr-15">
                                                    <ion-icon name="home-outline" role="img" class="md hydrated"
                                                        aria-label="home outline"></ion-icon>
                                                        
                                                </span><FaHome /> Home</Link>

                                        </li> */}

                                            {/* <!-- <li><a href="category-metro.html"><span class="mr-15">
                                                    <ion-icon name="film-outline" role="img" class="md hydrated" aria-label="film outline"></ion-icon>
                                                </span>Video</a></li> --> */}

                                        </ul>

                                    </nav>
                                </div>
                                {/* <!-- Search --> */}
                                <form action="#" method="get"
                                    class="search-form d-lg-inline float-right position-relative mr-30 d-none">
                                    <input type="text" className="search_field" placeholder="Search..." value="" name="search"
                                        // onChick={handleInputChange} 
                                        />
                                        <FaSearch />

                                    <span class="search-icon"><i class="ti-search mr-5"></i></span>

                                </form>
                               

                        
                                {/* <!-- Off canvas --> */}
                                <div class="off-canvas-toggle-cover"><MdGridView />
                                    <div class="off-canvas-toggle hidden d-inline-block ml-15" id="off-canvas-toggle">
                                        < ion-icon name="grid-outline" role="img" class="md hydrated"
                                            aria-label="grid outline"></ion-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header