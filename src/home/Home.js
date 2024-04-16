import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "../assets/css/style.css"
import "../assets/css/responsive.css"
import "../assets/css/vendor/bootstrap.min.css"
import "../assets/css/color.css"
import Footer from '../components/footer/Footer'
import images from "../assets/images/news-21.jpg"
import thumbnail16 from "../assets/images/thumbnail-16.jpg"
import author9 from "../assets/images/author-9.png"
import author14 from "../assets/images/author-14.png"
import author3 from "../assets/images/author-3.png"
import videoPath from "../assets/videos/bgvideos.mp4"
import logo from "../assets/images/logo2.svg"
// import { FaHome } from "react-icons/fa";
// import { MdGridView } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { Button, Dropdown } from 'react-bootstrap';
// import { CiMusicNote1 } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { FaVideo } from "react-icons/fa6";

import { CiAlarmOn } from "react-icons/ci";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios'
import { FaSearch } from "react-icons/fa";
// import { Button } from 'antd';
import { MdInstallMobile } from "react-icons/md";


const Home = () => {
    const [searchKey, setSearchKey] = useState('')
    const [categorylist, setCategorylist] = useState([])
    const [isLoading, setIsLoading] = useState();
    const [webDashBoard, setWebDashBoard] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem("lang")
    );
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 10;

    // Logic for pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = webDashBoard.;

    // Change page
    const handlePageChange = (event, pageNumber) => setCurrentPage(pageNumber);
    // Calculate total number of pages dynamically based on total news items
    const totalNewsItems = webDashBoard?.posts?.length;
    const totalPages = Math.ceil(totalNewsItems / postsPerPage);
    const handleLanguageDropdown = (eventKey) => {
        console.log("selected lang", eventKey);
        localStorage.setItem("lang", eventKey)
        setSelectedLanguage(eventKey);
    };
    const getcategory = async () => {
        await axios.get('https://rasatva.apponedemo.top/news/api/category-list').then((response) => {
            setCategorylist(response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }
    console.log("categorylist", categorylist)

    useEffect(() => {
        // GetWebDashBoard()
        getcategory()
    }, [])

    useEffect(() => {
        const defaultLanguage = localStorage.getItem("lang");
        if (defaultLanguage) {
            setSelectedLanguage(defaultLanguage);
        } else {
            // If no language is saved in localStorage, default to "En"
            setSelectedLanguage("En");
            localStorage.setItem("lang", "En");
        }
    }, []);

    useEffect(() => {
        GetWebDashBoard()

    }, [selectedLanguage])




    const GetWebDashBoard = async () => {
        try {
            const response = await axios.get(`https://theink.in/adminweb/api/web-dashboard?language=${selectedLanguage}`);
            setWebDashBoard(response.data.data);
            console.log("webDashBoard", webDashBoard)
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    }




    const getcategoryid = async (id) => {
        console.log("getcategoryid", id)
        await axios.get(`https://theink.in/adminweb/api/web-dashboard?category_id=${id}&language=${selectedLanguage}`).then((response) => {
            setWebDashBoard(response.data.data)
            console.log("getcategoryid123", response.data.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const GetSearchData = async()=>{
await axios.get(`https://theink.in/adminweb/api/web-dashboard?search=${searchKey}`).then((response)=>{
    setWebDashBoard(response.data.data)
    console.log("GetSearchData",response.data.data)
}).catch((error)=>{
    console.log(error)
})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        GetSearchData(searchKey)
    }
    useEffect(() => {
        getcategoryid()
    }, [])

    useEffect(() => {
        if (searchKey) {
            setTimeout(() => {
                GetSearchData();
            }, 1000);
        }
    }, [searchKey]);

    return (
        <div>

            <div className="main-wrap">
                {/* <!--Offcanvas sidebar--> */}
                <aside id="sidebar-wrapper"
                    className="custom-scrollbar offcanvas-sidebar position-right ps ps--active-x ps--active-y">
                    <button className="off-canvas-close"><i className="ti-close"></i></button>
                    <div className="sidebar-inner">
                        {/* <!--Search--> */}
                        <div className="siderbar-widget mb-50 mt-30">
                            <div className="buscar-caja">
                                {/* <input type="text"
                                    name="search"
                                    value={searchKey}
                                    onChange={(e) => setSearchKey(e.target.value)}
                                    classNameName="buscar-txt" className="buscar-txt" 
                                    placeholder="Search ....." />
                                <a className="buscar-btn"> <i className="fa fa-search" onClick={(e) =>
                                    getcategoryid(e.target.value)}></i> </a> */}
                            </div>
                            {/* <form action="#" method="get" onSubmit={getcategoryid} className="search-form position-relative">
                                <input type="text"
                                    name="search"
                                    value={searchKey}
                                    onChange={(e) =>
                                        setSearchKey(e.target.value)}
                                    className="search_field"
                                    placeholder="Search....." /><FaSearch />
                                <a><i onClick={(e) =>
                                    getcategoryid(e.target.value)}></i></a>

                            </form> */}
                        </div>
                        {/* <!--lastest post--> */}
                        <div className="sidebar-widget mb-50">
                            <div className="widget-header mb-30">
                                <h5 className="widget-title">Top <span>Trending</span></h5>
                            </div>
                            <div className="post-aside-style-2">
                                <ul className="list-post">
                                    <li className="mb-30 wow fadeIn  animated">
                                        <div className="d-flex">
                                            <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link className="color-white" to="#">
                                                    <img src="images/thumbnail-2.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row"><Link to="#">Vancouver woman finds
                                                    pictures and videos of herself online</Link></h6>
                                                <div
                                                    className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span className="post-by">By <a href="# ">K. Marry</a></span>
                                                    <span className="post-on">4m ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-30 wow fadeIn  animated">
                                        <div className="d-flex">
                                            <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link className="color-white" to="#">
                                                    <img src="images/thumbnail-3.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row"><Link to="#">4 Things Emotionally
                                                    Intelligent People Don’t Do</Link></h6>
                                                <div
                                                    className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span className="post-by">By <a href="# ">Mr. John</a></span>
                                                    <span className="post-on">3h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-30 wow fadeIn  animated">
                                        <div className="d-flex">
                                            <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link className="color-white" to="#">
                                                    <img src="images/thumbnail-5.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row"><Link to="#">Reflections from a
                                                    Token Black Friend</Link></h6>
                                                <div
                                                    className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span className="post-by">By <Link to="# ">Kenedy</Link></span>
                                                    <span className="post-on">4h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-30 wow fadeIn animated">
                                        <div className="d-flex">
                                            <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link className="color-white" to="#">
                                                    <img src="images/thumbnail-7.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row"><Link to="#">How to Identify a
                                                    Smart Person in 3 Minutes</Link></h6>
                                                <div
                                                    className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span className="post-by">By <a href="# ">Steven</a></span>
                                                    <span className="post-on">5h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="wow fadeIn animated">
                                        <div className="d-flex">
                                            <div className="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link className="color-white" to="#">
                                                    <img src="images/thumbnail-8.jpg" alt="" />
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-10 text-limit-2-row"><Link to="#">Blackface Minstrel
                                                    Songs Don’t Belong in Children’s Music Class</Link></h6>
                                                <div
                                                    className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span className="post-by">By <a href="# ">J.Smith</a></span>
                                                    <span className="post-on">5h30 ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Categories--> */}
                        {/* <div className="sidebar-widget widget_tag_cloud mb-50">
                            <div className="widget-header tags-close mb-20">
                                <h5 className="widget-title mt-5">Tags Cloud</h5>
                            </div>
                            <div className="tagcloud">
                                <a href="news-details.html">Beauty</a>
                                <a href="news-details.html">Book</a>
                                <a href="news-details.html">Design</a>
                                <a href="news-details.html">Fashion</a>
                                <a href="news-details.html">Lifestyle</a>
                                <a href="news-details.html">Travel</a>
                                <a href="news-details.html">Science</a>
                                <a href="news-details.html">Health</a>
                                <a href="news-details.html">Sports</a>
                                <a href="news-details.html">Arts</a>
                                <a href="news-details.html">Books</a>
                                <a href="news-details.html">Style</a>
                            </div>
                        </div> */}
                        {/* <!--Ads--> */}
                        <div className="sidebar-widget widget-ads mb-30">
                            <div className="widget-header tags-close mb-20">
                                <h5 className="widget-title mt-5">Your Ads Here</h5>
                            </div>
                            <Link to="images/news-1.jpg" className="play-video">
                                <img className="border-radius-10" src="images/ads-1.jpg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="ps__rail-x">
                        <div className="ps__thumb-x"></div>
                    </div>
                    <div className="ps__rail-y">
                        <div className="ps__thumb-y"></div>
                    </div>
                </aside>
                {/* <!-- Main Header --> */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-7 col-md-8">
                            <ul className="top-head-social m-0 d-flex p-2">
                                <li><Link target="_blank" to="#">
                                    < FaFacebookF /></Link></li>
                                <li><Link target="_blank" to="#">
                                    <FaTwitter /></Link></li>
                                <li><Link target="_blank" to="#">
                                    < FaLinkedinIn /></Link></li>
                                <li><Link target="_blank" to="#">
                                    < FaPinterest /></Link></li>
                                <li><Link target="_blank" to="#">
                                    < SiInstagram /></Link></li>
                            </ul>
                        </div>

                    </div>
                </div >
                <header className="main-header header-style-2 mb-40">
                    <div className="header-bottom header-sticky background-white text-center">
                        <div className="scroll-progress gradient-bg-1"></div>
                        <div className="mobile_menu d-lg-none d-block">
                            <div className="slicknav_menu"></div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-3">
                                    <div className="header-logo d-none d-lg-block">
                                        <Link to="/">
                                            <img className="logo-img d-inline" src={logo} alt="" />
                                        </Link>

                                    </div>
                                    {/* <div className="logo-tablet d-md-inline d-lg-none d-none">
                                        <Link to="/">
                                            <img className="logo-img d-inline" src={logo} alt="" />

                                        </Link>
                                    </div> */}
                                    {/* <div className="logo-mobile d-block d-md-none">
                                        <Link to="/">
                                            <img className="logo-img d-inline" src={logo} alt="" />

                                        </Link>
                                    </div> */}
                                </div>
                                <div className="col-lg-10 col-md-9 main-header-navigation">
                                    {/* <!-- Main-menu --> */}
                                    <div className="main-nav text-left float-lg-left float-md-right">
                                        {/* <ul className="mobi-menu d-none menu-3-columns" id="navigation">
                                            <li className="cat-item cat-item-2"><a href="#">All News</a></li>
                                            <li className="cat-item cat-item-4"><a href="#">Politics</a></li>
                                            <li className="cat-item cat-item-5"><a href="#">Sports</a></li>
                                            <li className="cat-item cat-item-6"><a href="#">Movies</a></li>
                                            <li className="cat-item cat-item-7"><a href="#">Automotive</a></li>
                                            <li className="cat-item cat-item-2"><a href="#">Education</a></li>
                                        </ul> */}




                                        <Dropdown
                                            onSelect={handleLanguageDropdown}
                                            value={selectedLanguage}
                                            classNameName="bootstrapDropdown"
                                        >
                                            <Dropdown.Toggle
                                                classNameName="DropdownToggle"
                                                style={{ color: "grey", backgroundColor: "#f7f8f9" }}
                                            >
                                                {selectedLanguage ? (
                                                    selectedLanguage == "Hi" ? (
                                                        <span>
                                                            Hindi </span>
                                                    ) : (
                                                        <span>
                                                            English </span>

                                                    )
                                                ) : (
                                                    <span>English</span>
                                                )}
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu classNameName="select_language DropdownMenu">
                                                <Dropdown.Item eventKey="Hi">
                                                    <span>
                                                        Hindi </span>
                                                </Dropdown.Item>
                                                <Dropdown.Item eventKey="En">
                                                    <span>
                                                        English </span>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    {/* <!-- Search --> */}
                                    {/* <form action="#" method="get"
                                        className="search-form d-lg-inline float-right position-relative mr-30 d-none">
                                        <input type="text" className="search_field" placeholder="Search" value="" name="s" />
                                        <span className="search-icon"><i className="ti-search mr-5"></i></span>
                                        

                                    </form> */}
                                    <form action="#" method="get" onSubmit={GetSearchData} className="search-form position-relative">
                                        <input type="text"
                                            name="search"
                                            value={searchKey}
                                            onChange={(e) =>
                                                setSearchKey(e.target.value)}
                                            className="search_field"
                                            placeholder="Search....." /><FaSearch />
                                        <Link><i onClick={(e) =>
                                            GetSearchData(e.target.value)}></i></Link>

                                    </form>
                                    {/* <!-- Off canvas --> */}
                                    {/* <div className="off-canvas-toggle-cover"><MdGridView />
                                        <div className="off-canvas-toggle hidden d-inline-block ml-15" id="off-canvas-toggle">
                                            < ion-icon name="grid-outline" role="img" className="md hydrated"
                                                aria-label="grid outline"></ion-icon>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- Main Wrap Start --> */}
                <main className="position-relative">
                    <div className="container">
                        <div className="row">
                            {/* <!-- sidebar-left --> */}
                            <div className="col-lg-2 col-md-3 primary-sidebar sticky-sidebar sidebar-left order-2 order-md-1">
                                <div className="theiaStickySidebar">
                                    <div className="sidebar-widget widget_categories border-radius-10 bg-white mb-30">
                                        <div className="widget-header position-relative mb-15">
                                            <h5 className="widget-title"><strong>Categories</strong></h5>
                                        </div>

                                        <ul className="font-small text-muted">
                                            {

                                                categorylist?.map((categorylistResult) => {
                                                    // console.log("categorylistResult", categorylistResult)
                                                    return (

                                                        <> <button>
                                                            <li classNameName="cat-item cat-item-3"
                                                                onClick={() => getcategoryid(categorylistResult?.id)}
                                                            >{categorylistResult?.title}</li>
                                                        </button>
                                                            {/*<li className="cat-item cat-item-1"><Button 
                                                            onClick={(id)=>getcategoryid(categorylistResult?.id)}>{categorylistResult?.title}</Button></li>  */}

                                                        </>
                                                    )
                                                })
                                            }
                                        </ul>


                                    </div>
                                </div>
                            </div>



                            {/* <!-- main content --> */}
                            <div className="col-lg-10 col-md-9 order-1 order-md-2">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12">
                                        <div className="latest-post mb-50">
                                            <div className="widget-header position-relative mb-30">
                                                <div className="row">
                                                    <div className="col-7">
                                                        <h4 className="widget-title mb-0">Latest <span>Posts</span></h4>
                                                    </div>
                                                    <div className="col-5 text-right">
                                                        <h6 className="font-medium pr-15">
                                                            <Link className="text-muted font-small" to="#">View all</Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="loop-list-style-1">
                                                {
                                                    webDashBoard?.posts?.slice(0, 1).map((webDashBoardResult) => {
                                                        // console.log("webDashBoardResult",webDashBoardResult)
                                                        return (
                                                            <>
                                                                {
                                                                    <article
                                                                        className="first-post p-10 background-white border-radius-10 mb-30 wow fadeIn animated">
                                                                        <div
                                                                            className="img-hover-slide border-radius-15 mb-30 position-relative overflow-hidden">
                                                                            <span className="top-right-icon bg-dark">
                                                                                <MdInstallMobile />
                                                                                </span>
                                                                            <Link to={`/Newsdetail/${webDashBoardResult?.id}`} >
                                                                                <img src={webDashBoardResult?.get_images[0]?.image} alt="post-slider" />
                                                                            </Link>
                                                                        </div>
                                                                        <div className="pr-10 pl-10">
                                                                            <div className="entry-meta mb-30">
                                                                                <Link to={`/Newsdetail/${webDashBoardResult?.id}`} ><span
                                                                                    className="post-in background2 text-primary font-x-small">
                                                                                    {webDashBoard?.posts[0]?.tags}</span></Link>
                                                                                <div className="float-right font-small">
                                                                                    <span><span className="mr-10 text-muted"><i className="fa fa-eye"
                                                                                        aria-hidden="true"></i></span>5.8k</span>
                                                                                    <span className="ml-30"><span className="mr-10 text-muted"><i
                                                                                        className="fa fa-comment"
                                                                                        aria-hidden="true"></i></span>2.5k</span>
                                                                                    <span className="ml-30"><span className="mr-10 text-muted"><i
                                                                                        className="fa fa-share-alt"
                                                                                        aria-hidden="true"></i></span>125k</span>
                                                                                </div>
                                                                            </div>
                                                                            <h4 className="post-title mb-20">
                                                                                <span className="post-format-icon">
                                                                                    {webDashBoard?.posts[0]?.post_url}
                                                                                    <ion-icon name="headset-outline" role="img" className="md hydrated"
                                                                                        aria-label="headset outline"></ion-icon>
                                                                                    <VscAccount style={{ color: 'black' }} />

                                                                                </span>
                                                                                <Link to={`/Newsdetail/${webDashBoard?.posts[0]?.id}`} >{webDashBoard?.posts[0]?.title}</Link>
                                                                            </h4>
                                                                            <div className="mb-20 overflow-hidden">
                                                                                <div
                                                                                    className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                                                    <span className="post-by">By <a href="# ">KNICKMEYER</a></span>
                                                                                    <span className="post-on">{webDashBoard?.posts[0]?.get_images?.created_at}</span>
                                                                                    <span className="time-reading">12 mins read</span>
                                                                                    <p className="font-x-small mt-10">{webDashBoard?.posts[0]?.get_images?.updated_at}</p>
                                                                                </div>
                                                                                <div className="float-right">
                                                                                    <Link to="#" className="read-more"><span className="mr-10"><i
                                                                                        className="fa fa-thumbtack"
                                                                                        aria-hidden="true"></i></span>Picked by Editor</Link>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                }
                                                            </>
                                                        )
                                                    })
                                                }


                                                {
                                                    webDashBoard?.posts?.slice(indexOfFirstPost, indexOfLastPost).map((webDashBoardResult, id) => {
                                                        return (
                                                            <>
                                                                <Link to={`/Newsdetail/${webDashBoardResult?.id}`}>
                                                                    <article
                                                                        className="p-10 background-white border-radius-10
                                                                     mb-30 wow fadeIn animated" >
                                                                        <div className="d-flex">
                                                                            <div className="post-thumb d-flex mr-15 border-radius-15 img-hover-scale">
                                                                                <Link className="color-white" to={`/Newsdetail/${webDashBoardResult?.id}`} >
                                                                                    <img className="border-radius-15" src={webDashBoardResult?.get_images[0]?.image}
                                                                                        alt="" />
                                                                                </Link>
                                                                            </div>
                                                                            <div className="post-content media-body">
                                                                                <div className="entry-meta mb-15 mt-10">
                                                                                    <Link className="entry-meta meta-2" to="#" ><span
                                                                                        className="post-in text-danger font-x-small"><button>{webDashBoardResult?.tags}</button></span></Link>
                                                                                </div>
                                                                                <h5 className="post-title mb-15 text-limit-2-row">
                                                                                    <span className="post-format-icon">
                                                                                      
                                                                                        <FaVideo style={{ backgroundcolor: 'white', color: 'black' }} />

                                                                                    </span>
                                                                                    <Link to={`/Newsdetail/${webDashBoardResult?.id}`} >{webDashBoardResult?.title
                                                                                    }
                                                                                    More than 1.5 million people sought state
                                                                                        unemployment benefits last week even as businesses
                                                                                        reopened.</Link>
                                                                                </h5>
                                                                                <div
                                                                                    className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                                                    <span className="post-by">By{webDashBoardResult?.author_name
                                                                                        
                                                                                    }<Link to="# "></Link></span>




                                                                                    <span className="post-on">< CiAlarmOn style={{ fontSize: '18px', color: 'green' }} />15/09/2020
                                                                                    </span>
                                                                                    {/* <span className="post-on"> 07:0EST0 </span> */}
                                                                                    <span className="time-reading">12 mins read</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </article>
                                                                </Link>


                                                            </>
                                                        )
                                                    })
                                                }
                                                <Stack spacing={0}>
                                                    <Pagination
                                                        count={totalPages} // Total number of pages
                                                        variant="outlined"
                                                        onChange={handlePageChange}
                                                    />
                                                </Stack>
                                                {/* <article
                                                    className="p-10 background-white border-radius-10 mb-30 wow fadeIn animated">
                                                    <div className="d-flex">
                                                        <div className="post-thumb d-flex mr-15 border-radius-15 img-hover-scale">
                                                            <Link className="color-white" to={'/Newsdetail'} >
                                                                <img className="border-radius-15" src={thumbnai13}
                                                                    alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="post-content media-body">
                                                            <div className="entry-meta mb-15 mt-10">
                                                                <Link className="entry-meta meta-2" to={'/Newsdetail'} ><span
                                                                    className="post-in text-warning font-x-small">Religion</span></Link>
                                                            </div>
                                                            <h5 className="post-title mb-15 text-limit-2-row">
                                                                <Link to={'/Newsdetail'} >Elite B.C., Ontario crime network laundering
                                                                    ‘hundreds of millions’ a year, inquiry hears</Link>
                                                            </h5>
                                                            <div
                                                                className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                                <span className="post-by">By <a href="# ">Walter Cronkite</a></span>
                                                                <span className="post-on">16/09/2020 08:15 EST</span>
                                                                <span className="time-reading">14 mins read</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article
                                                    className="p-10 background-white border-radius-10 mb-30 wow fadeIn animated">
                                                    <div className="d-flex">
                                                        <div className="post-thumb d-flex mr-15 border-radius-15 img-hover-scale">
                                                            <Link className="color-white" to={'/Newsdetail'} >
                                                                <img className="border-radius-15" src={thumbnail16}
                                                                    alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="post-content media-body">
                                                            <div className="entry-meta mb-15 mt-10">
                                                                <Link className="entry-meta meta-2" to={'/Newsdetail'} ><span
                                                                    className="post-in text-success font-x-small">Healthy</span></Link>
                                                            </div>
                                                            <h5 className="post-title mb-15 text-limit-2-row">
                                                                <span className="post-format-icon">
                                                                    <ion-icon name="image-outline" role="img"
                                                                        className="md hydrated"
                                                                        aria-label="image outline"></ion-icon>
                                                                </span>
                                                                <Link to={'/Newsdetail'} >Daycares are opening across the country, but can
                                                                    they really operate safely?</Link>
                                                            </h5>
                                                            <div
                                                                className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                                <span className="post-by">By <a href="# ">JONATHAN LEMIRE</a></span>
                                                                <span className="post-on">17/09/2020 19:35 EST</span>
                                                                <span className="time-reading">6 mins read</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article>
                                                <article
                                                    className="p-10 background-white border-radius-10 mb-30 wow fadeIn animated">
                                                    <div className="d-flex">
                                                        <div className="post-thumb d-flex mr-15 border-radius-15 img-hover-scale">
                                                            <Link className="color-white" to={'/Newsdetail'} >
                                                                <img className="border-radius-15" src={thumbnail8}
                                                                    alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="post-content media-body">
                                                            <div className="entry-meta mb-15 mt-10">
                                                                <Link className="entry-meta meta-2" to={'/Newsdetail'} ><span
                                                                    className="post-in text-info font-x-small">Conflicts</span></Link>
                                                            </div>
                                                            <h5 className="post-title mb-15 text-limit-2-row">
                                                                <span className="post-format-icon">
                                                                    <ion-icon name="chatbox-outline" role="img"
                                                                        className="md hydrated"
                                                                        aria-label="chatbox outline"></ion-icon>
                                                                </span>
                                                                <Link to={'/Newsdetail'} >Dwayne ‘The Rock’ Johnson confronts Donald Trump:
                                                                    ‘Where are you?’</Link>
                                                            </h5>
                                                            <div
                                                                className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                                <span className="post-by">By <a href="# ">Walter Cronkite</a></span>
                                                                <span className="post-on">18/09/2020 09:35 EST</span>
                                                                <span className="time-reading">13 mins read</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </article> */}
                                            </div>
                                        </div>
                                        <div className="pagination-area mb-30">
                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination justify-content-start">
                                                    {/* <li className="page-item"><a className="page-link" href="#"><i
                                                        className="ti-angle-left"></i></a></li>
                                                     <li className="page-item active"><Link className="page-link" to></Link></li>
                                                    <li className="page-item"><a className="page-link" href="#">02</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">03</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">04</a></li>
                                                    <li className="page-item"><a className="page-link" href="#"><i
                                              
                                                        className="ti-angle-right"></i></a></li>  */}






                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 sidebar-right">
                                        <div className="sidebar-widget mb-50">
                                            <div className="widget-header mb-30">
                                                <h5 className="widget-title">Most <span>Popular</span></h5>
                                            </div>
                                            <div className="post-aside-style-3">
                                                <article className="bg-white border-radius-15 mb-30 p-10 wow fadeIn animated">
                                                    <div className="post-thumb d-flex mb-15 border-radius-15 img-hover-scale">
                                                        <Link to="#" >
                                                            <video
                                                                controls
                                                                poster={thumbnail16}
                                                                autoplay
                                                                classNameName="photo-item__video NewsDetailsVideos"
                                                                loop
                                                                muted
                                                                preload="auto"
                                                            >
                                                                <source src={videoPath} type="video/mp4" />
                                                            </video>
                                                        </Link>
                                                    </div>
                                                    <div className="pl-10 pr-10">
                                                        <h5 className="post-title mb-15"><Link to={'/Newsdetail'} >Vancouver woman finds pictures
                                                            and videos of herself online</Link></h5>
                                                        <div
                                                            className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                            <span className="post-in">In <Link
                                                                to={'/Newsdetail'} >Global</Link></span>
                                                            <span className="post-by">By <a href="# ">K. Marry</a></span>
                                                            <span className="post-on">4m ago</span>
                                                        </div>
                                                    </div>
                                                </article>
                                                {
                                                    webDashBoard?.tranding_post?.map((tranding_post_result,id) => {
                                                        return (
                                                            <>
                                                                <article className="bg-white border-radius-15 mb-30 p-10 wow fadeIn animated">
                                                                    <div className="post-thumb d-flex mb-15 border-radius-15 img-hover-scale">
                                                                        <Link to={`/Newsdetail/${tranding_post_result.id}`} >
                                                                            <img className="border-radius-15" src={tranding_post_result?.get_images[0]?.image}alt="" />
                                                                        </Link>
                                                                    </div>
                                                                    <div className="pl-10 pr-10">
                                                                        <h5 className="post-title mb-15"><Link to={`/Newsdetail/${tranding_post_result.id}`} >{tranding_post_result.title}Fight breaks out at
                                                                            Disneyland</Link></h5>
                                                                        <div
                                                                            className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                                            <span className="post-in">In <Link
                                                                                to={'/Newsdetail'} >{tranding_post_result.tags
                                                                                }</Link></span>
                                                                            <span className="post-by">By {tranding_post_result.author_name
                                                                            }<a href="# ">Steven</a></span>
                                                                            <span className="post-on">14m ago</span>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </>
                                                        )
                                                    })

                                                }





                                            </div>
                                        </div>
                                        <div
                                            className="sidebar-widget p-20 border-radius-15 bg-white widget-latest-comments wow fadeIn animated">
                                            <div className="widget-header mb-30">
                                                <h5 className="widget-title">Last <span>Comments</span></h5>
                                            </div>
                                            <div className="post-block-list post-module-6">
                                                <div className="last-comment mb-20 d-flex wow fadeIn animated">
                                                    <span className="item-count vertical-align">
                                                        <Link className="red-tooltip author-avatar" to={'/Newsdetail'} ><img
                                                            src={author14} alt="" /></Link>
                                                    </span>
                                                    <div className="alith_post_title_small">
                                                        <p className="font-medium mb-10"><Link to="#">A writer is someone for whom
                                                            writing is more difficult than it is for other people.</Link></p>
                                                        <div
                                                            className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                            <span className="post-by">By <a href="# ">Azumi</a></span>
                                                            <span className="post-on">4m ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="last-comment mb-20 d-flex wow fadeIn animated">
                                                    <span className="item-count vertical-align">
                                                        <Link className="red-tooltip author-avatar" to={'/Newsdetail'} ><img
                                                            src={author9} alt="" /></Link>
                                                    </span>
                                                    <div className="alith_post_title_small">
                                                        <p className="font-medium mb-10"><Link to={'/Newsdetail'} >Riding the main trail was easy,
                                                            a little bumpy because my mountain bike is a hardtail</Link></p>
                                                        <div
                                                            className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                            <span className="post-by">By <a href="# ">K. Harry</a></span>
                                                            <span className="post-on">4m ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="last-comment d-flex wow fadeIn animated">
                                                    <span className="item-count vertical-align">
                                                        <Link className="red-tooltip author-avatar" to={'/Newsdetail'} ><img
                                                            src={author3} alt="" /></Link>
                                                    </span>
                                                    <div className="alith_post_title_small">
                                                        <p className="font-medium mb-10"><Link to={'/Newsdetail'} >Teamwork begins by building
                                                            trust. And the only way to do that is to overcome our need for
                                                            invulnerability.</Link></p>
                                                        <div
                                                            className="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                            <span className="post-by">By <a href="# ">D. Johny</a></span>
                                                            <span className="post-on">4m ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </main>


                <Footer />
            </div >
        </div >

    )
}


export default Home
