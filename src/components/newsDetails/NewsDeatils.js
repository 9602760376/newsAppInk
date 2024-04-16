
import React, { useEffect } from 'react'
import { useState } from 'react'
// import Header from '../header/Header'
// import Footer from '../footer/Footer'
import news1 from '../../assets/images/news-1.jpg'
import news20 from '../../assets/images/news-20.jpg'
import news22 from '../../assets/images/news-22.jpg'
// import author14 from '../../assets/images/author-14.png'
// import author9 from '../../assets/images/author-9.png'
// import author3 from '../../assets/images/author-3.png'
import thumbnail3 from '../../assets/images/thumbnail-3.jpg'
import thumbnail5 from '../../assets/images/thumbnail-5.jpg'
import thumbnail7 from '../../assets/images/thumbnail-7.jpg'
import thumbnail8 from '../../assets/images/thumbnail-8.jpg'
import video from "../../assets/videos/bgvideos.mp4"
import { Link, useParams } from 'react-router-dom';
import { FaHeadphones } from "react-icons/fa6";

import '../../assets/css/style.css'
import axios from 'axios'
const NewsDeatils = () => {
    const { id } = useParams();
    console.log("useParams", id)
    const [NewsDetails, setNewsDetails] = useState({});
    // const [selectedLanguage, setSelectedLanguage] = useState(
    //     localStorage.getItem("lang")
    // );
    // const handleLanguageDropdown = (eventKey) => {
    //     console.log("selected lang", eventKey);
    //     localStorage.setItem("lang", eventKey);
    //     setSelectedLanguage(eventKey);
    // };

    const ApiData = {
        language: localStorage.getItem("lang")
    }
    const GetNewsDetails = async () => {
        await axios.get(`https://theink.in/adminweb/api/web-post-detail?id=${id}&language=${ApiData.language}`).then((response) => {
            console.log(response.data)
            setNewsDetails(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
        GetNewsDetails();
    }, [id])

    return (
        <div>
            <div class="main-wrap">
                {/* <!--Offcanvas sidebar--> */}
                <aside id="sidebar-wrapper" class="custom-scrollbar offcanvas-sidebar position-right ps ps--active-x ps--active-y">
                    <button class="off-canvas-close"><i class="ti-close"></i></button>
                    <div class="sidebar-inner">


                        {/* <!--lastest post--> */}
                        <div class="sidebar-widget mb-50">
                            <div class="widget-header mb-30">
                                <h5 class="widget-title">Top <span>Trending</span></h5>
                            </div>
                            <div class="post-aside-style-2">
                                <ul class="list-post">
                                    <li class="mb-30 wow fadeIn  animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                                        <div class="d-flex">
                                            <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                < Link to='/Newsdetail'>
                                                    <img src={`${NewsDetails?.get_images?.image}`} alt="" />
                                                </Link>
                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><Link to="#">{NewsDetails?.data?.title}</Link></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span class="post-by">By <a href="# ">K. Marry</a></span>
                                                    <span class="post-on">4m ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-30 wow fadeIn  animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                                        <div class="d-flex">
                                            <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link to='/Newsdetail'>
                                                    <img src={thumbnail3} alt="" />
                                                </Link>                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><Link to="#">4 Things Emotionally Intelligent People Don’t Do</Link></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span class="post-by">By <a href="# ">Mr. John</a></span>
                                                    <span class="post-on">3h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-30 wow fadeIn  animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                                        <div class="d-flex">
                                            <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link to='/Newsdetail'>
                                                    <img src={thumbnail5} alt="" />
                                                </Link>
                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><Link to="#">Reflections from a Token Black Friend</Link></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span class="post-by">By <a href="# ">Kenedy</a></span>
                                                    <span class="post-on">4h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="mb-30 wow fadeIn animated">
                                        <div class="d-flex">
                                            <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link to='/Newsdetail'>
                                                    <img src={thumbnail7} alt="" />
                                                </Link>
                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><Link to="#">How to Identify a Smart Person in 3 Minutes</Link></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span class="post-by">By <Link to="# ">Steven</Link></span>
                                                    <span class="post-on">5h ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="wow fadeIn animated">
                                        <div class="d-flex">
                                            <div class="post-thumb d-flex mr-15 border-radius-5 img-hover-scale">
                                                <Link to='/Newsdetail'>
                                                    <img src={thumbnail8} alt="" />
                                                </Link>
                                            </div>
                                            <div class="post-content media-body">
                                                <h6 class="post-title mb-10 text-limit-2-row"><Link to="#">Blackface Minstrel Songs Don’t Belong in Children’s Music Class</Link></h6>
                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase">
                                                    <span class="post-by">By <a href="# ">J.Smith</a></span>
                                                    <span class="post-on">5h30 ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--Categories--> */}
                        <div class="sidebar-widget widget_tag_cloud mb-50">
                            <div class="widget-header tags-close mb-20">
                                <h5 class="widget-title mt-5">Tags Cloud</h5>
                            </div>
                            <div class="tagcloud">
                                <Link to="#">Beauty</Link>
                                <Link to="#">Book</Link>
                                <Link to="#">Design</Link>
                                <Link to="#">Fashion</Link>
                                <Link to="#">Lifestyle</Link>
                                <Link to="#">Travel</Link>
                                <Link to="#">Science</Link>
                                <Link to="#">Health</Link>
                                <Link to="#">Sports</Link>
                                <Link to="#">Arts</Link>
                                <Link to="#">Books</Link>
                                <Link to="#">Style</Link>
                            </div>
                        </div>
                        {/* <!--Ads--> */}
                        <div class="sidebar-widget widget-ads mb-30">
                            <div class="widget-header tags-close mb-20">
                                <h5 class="widget-title mt-5">Your Ads Here</h5>
                            </div>
                            <Link to={news1} class="play-video" data-animate="zoomIn" data-duration="1.5s" data-delay="0.1s">
                                <img class="border-radius-10" src="images/ads-1.jpg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div class="ps__rail-x" style={{ width: '0px', left: '0px', bottom: '0px' }}><div class="ps__thumb-x" tabindex="0" style={{ left: '0px', width: '0px' }}></div></div><div class="ps__rail-y" style={{ top: '0px', height: '453px', right: '0px', }}><div class="ps__thumb-y" tabindex="0" style={{ top: '0px', height: '152px' }}></div></div></aside>
                {/* <!-- Main Header --> */}
                <header class="main-header header-style-2 mb-40">
                    <div class="header-bottom header-sticky background-white text-center">
                        <div class="scroll-progress gradient-bg-1"></div>
                        <div class="mobile_menu d-lg-none d-block">
                            <div class="slicknav_menu"></div></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-2 col-md-3">
                                    <div class="header-logo d-none d-lg-block">
                                        <Link to="/Home">
                                            <img class="logo-img d-inline" src="images/logo.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div class="logo-tablet d-md-inline d-lg-none d-none">
                                        <Link to="index.html">
                                            <img class="logo-img d-inline" src="images/logo.svg" alt="" />
                                        </Link>
                                    </div>
                                    <div class="logo-mobile d-block d-md-none">
                                        <Link T="index.html">
                                            <img class="logo-img d-inline" src="images/logo.svg" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div class="col-lg-10 col-md-9 main-header-navigation">
                                    {/* <!-- Main-menu --> */}
                                    <div class="main-nav text-left float-lg-left float-md-right">
                                        <ul class="mobi-menu d-none menu-3-columns" id="navigation">
                                            <li class="cat-item cat-item-2"><Link to="#">Global Economy</Link></li>
                                            <li class="cat-item cat-item-3"><Link to="#">Environment</Link></li>
                                            <li class="cat-item cat-item-4"><Link to="#">Religion</Link></li>
                                            <li class="cat-item cat-item-5"><Link to="#">Fashion</Link></li>
                                            <li class="cat-item cat-item-6"><Link to="#">Terrorism</Link></li>
                                            <li class="cat-item cat-item-7"><Link to="#">Conflicts</Link></li>
                                            <li class="cat-item cat-item-2"><Link to="#">Scandals</Link></li>
                                            <li class="cat-item cat-item-2"><Link to="#">Executive</Link></li>
                                            <li class="cat-item cat-item-2"><Link to="#">Foreign policy</Link></li>
                                            <li class="cat-item cat-item-2"><Link to="#">Healthy Living</Link></li>
                                            <li class="cat-item cat-item-3"><Link to="#">Medical Research</Link></li>
                                            <li class="cat-item cat-item-4"><Link to="#">Children’s Health</Link></li>
                                            <li class="cat-item cat-item-5"><Link to="#">Around the World</Link></li>
                                            <li class="cat-item cat-item-6"><Link to="#">Ad Choices</Link></li>
                                            <li class="cat-item cat-item-7"><Link to="#">Mental Health</Link></li>
                                            <li class="cat-item cat-item-2"><Link to="#">Media Relations</Link></li>
                                        </ul>
                                        <nav>
                                            <ul class="main-menu d-none d-lg-inline">
                                                <li>
                                                    <a href="/"><span class="mr-15">
                                                        <ion-icon name="home-outline" role="img" class="md hydrated" aria-label="home outline"></ion-icon>
                                                    </span>Home</a>

                                                </li>

                                                {/* <!-- <li><a href="category-metro.html"><span class="mr-15">
                                                    <ion-icon name="film-outline" role="img" class="md hydrated" aria-label="film outline"></ion-icon>
                                                </span>Video</a></li> --> */}

                                            </ul>

                                        </nav>
                                    </div>
                                    {/* <!-- Search --> */}
                                    <form action="#" method="get" class="search-form d-lg-inline float-right position-relative mr-30 d-none">
                                        <input type="text" class="search_field" placeholder="Search" value="" name="s" />
                                        <span class="search-icon"><i class="ti-search mr-5"></i></span>
                                    </form>
                                    {/* <!-- Off canvas --> */}
                                    <div class="off-canvas-toggle-cover">
                                        <div class="off-canvas-toggle hidden d-inline-block ml-15" id="off-canvas-toggle">
                                            <ion-icon name="grid-outline" role="img" class="md hydrated" aria-label="grid outline"></ion-icon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- Main Wrap Start --> */}
                <main class="position-relative" style={{ transform: 'none' }}>
                    <div class="container" style={{ transform: 'none' }}>
                        <div class="entry-header entry-header-1 mb-30 mt-50">
                            <div class="entry-meta meta-0 font-small mb-30"><Link to='/'><span class="post-cat bg-success color-white">Global News</span></Link></div>
                            <h1 class="post-title mb-30">
                                {NewsDetails?.data?.title}
                            </h1>
                            <div class="entry-meta meta-1 font-x-small color-grey text-uppercase">
                                <span class="post-by">By <Link to="#">Adam Liptak </Link> &amp; <Link to="#">Michael D. Shear</Link></span>
                                <span class="post-on">18/09/2020 09:35 EST</span>
                                <span class="time-reading">12 mins read</span>
                                <p class="font-x-small mt-10">
                                    <span class="hit-count"><i class="ti-comment mr-5"></i>82 comments</span>
                                    <span class="hit-count"><i class="ti-heart mr-5"></i>68 likes</span>
                                    <span class="hit-count"><i class="ti-star mr-5"></i>8/10</span>
                                </p>
                            </div>
                        </div>
                        {/* <!--end entry header--> */}
                        <div class="row mb-50" style={{ transform: 'none' }}>
                            <div class="col-lg-8 col-md-12">
                                {/* <div class="single-social-share single-sidebar-share mt-30 ml-4">
                            <ul>
                                <li><a class="social-icon facebook-icon text-xs-center" target="_blank" href="#"><i class="ti-facebook"></i></a></li>
                                <li><a class="social-icon twitter-icon text-xs-center" target="_blank" href="#"><i class="ti-twitter-alt"></i></a></li>
                                <li><a class="social-icon pinterest-icon text-xs-center" target="_blank" href="#"><i class="ti-pinterest"></i></a></li>
                                <li><a class="social-icon instagram-icon text-xs-center" target="_blank" href="#"><i class="ti-instagram"></i></a></li>
                                <li><a class="social-icon linkedin-icon text-xs-center" target="_blank" href="#"><i class="ti-linkedin"></i></a></li>
                                <li><a class="social-icon email-icon text-xs-center" target="_blank" href="#"><i class="ti-email"></i></a></li>
                            </ul>
                        </div> */}
                                <div class="bt-1 border-color-1 mb-30"></div>
                                <figure class="single-thumnail mb-30">
                                    <img src={NewsDetails?.data?.get_images[0]?.image} alt="" />
                                    <div class="credit mt-15 font-small color-grey">
                                        <i class="ti-credit-card mr-5"></i><span>Image credit: pexels.com</span>
                                    </div>
                                </figure>
                                <div class="single-excerpt">
                                    <p class="font-large">Tolerably much and ouch the in began alas more ouch some then accommodating flimsy wholeheartedly after hello slightly the that cow pouted much a goodness bound rebuilt poetically jaguar groundhog</p>
                                </div>
                                <div class="entry-main-content">
                                    <h2>Design is future</h2>
                                    <hr class="wp-block-separator is-style-wide" />
                                    <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                                    <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>

                                    <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                                    <hr class="wp-block-separator is-style-dots" />
                                    <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>


                                </div>

                                {/* <!--author box--> */}

                                {/* <!--related posts--> */}
                                <div class="related-posts">
                                    <h3 class="mb-30">Related posts</h3>
                                    <div class="row">
                                        {
                                            NewsDetails?.related_post?.slice(0, 3).map((RelatedPostResult) => {
                                                return (
                                                    <article class="col-lg-4">
                                                        <div class="background-white border-radius-10 p-10 mb-30">
                                                            <div class="post-thumb d-flex mb-15 border-radius-15 img-hover-scale">
                                                                <Link to={`/RelatedPostResult/${RelatedPostResult?.id}`}>

                                                                    <img class="border-radius-15" src={RelatedPostResult?.get_images[0]?.image} alt="" />
                                                                </Link>
                                                            </div>
                                                            <div class="pl-10 pr-10">
                                                                <div class="entry-meta mb-15 mt-10">
                                                                    <Link class="entry-meta meta-2" to="#"><span class="post-in text-primary font-x-small">Politic</span></Link>
                                                                </div>
                                                                <h5 class="post-title mb-15">
                                                                    <span class="post-format-icon">
                                                                        <FaHeadphones />
                                                                        <ion-icon name="image-outline" role="img" class="md hydrated" aria-label="image outline"></ion-icon>
                                                                    </span>
                                                                    <Link to="#">The litigants on the screen are not actors</Link></h5>
                                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                                    <span class="post-by">By <Link to="#">John Nathan</Link></span>
                                                                    <span class="post-on">8m ago</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                )
                                            })
                                        }


                                    </div>
                                </div>

                            </div>
                            {/* <!--End col-lg-8--> */}
                            <div class="col-lg-4 col-md-12 sidebar-right">
                                <div class="sidebar-widget mb-50">
                                    <div class="widget-header mb-30">
                                        <h5 class="widget-title">Most <span>Popular</span></h5>
                                    </div>
                                    <div class="post-aside-style-3">
                                        <article class="bg-white border-radius-15 mb-30 p-10 wow fadeIn animated">
                                            <div class="post-thumb d-flex mb-15 border-radius-15 img-hover-scale">
                                                <Link to="#">
                                                    <video
                                                        controls
                                                        poster={news1}
                                                        autoplay
                                                        className="photo-item__video NewsDetailsVideos"
                                                        loop
                                                        muted
                                                        preload="auto"
                                                    >
                                                        <source src={video} type="video/mp4" />
                                                    </video>
                                                </Link>
                                            </div>
                                            <div class="pl-10 pr-10">
                                                <h5 class="post-title mb-15"><Link to="#">Vancouver woman finds pictures and videos of herself online</Link></h5>
                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                    <span class="post-in">In <Link to="#">Global</Link></span>
                                                    <span class="post-by">By <Link to="# ">K. Marry</Link></span>
                                                    <span class="post-on">4m ago</span>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="bg-white border-radius-15 mb-30 p-10 wow fadeIn animated">
                                            <div class="post-thumb d-flex mb-15 border-radius-15 img-hover-scale">
                                                <Link to="#">
                                                    <img class="border-radius-15" src={news22} alt="" />
                                                </Link>
                                            </div>
                                            <div class="pl-10 pr-10">
                                                <h5 class="post-title mb-15"><Link to="#">Fight breaks out at Disneyland</Link></h5>
                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                    <span class="post-in">In <Link to="#">Healthy</Link></span>
                                                    <span class="post-by">By <Link href="# ">Steven</Link></span>
                                                    <span class="post-on">14m ago</span>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="bg-white border-radius-15 mb-30 p-10 wow fadeIn animated">
                                            <div class="post-thumb d-flex mb-15 border-radius-15 img-hover-scale">
                                                <Link to="#">
                                                    <img class="border-radius-15" src={news20} alt="" />
                                                </Link>
                                            </div>
                                            <div class="pl-10 pr-10">
                                                <h5 class="post-title mb-15"><Link to="#">California sheriff’s deputy shot during ‘ambush’ at police station, officials say</Link></h5>
                                                <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                    <span class="post-in">In <Link to="#">US</Link></span>
                                                    <span class="post-by">By <Link to="# ">Murler</Link></span>
                                                    <span class="post-on">16m ago</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div class="sidebar-widget p-20 border-radius-15 bg-white widget-latest-comments wow fadeIn animated">
                                    <div class="widget-header mb-30">
                                        <h5 class="widget-title">Last <span>Comments</span></h5>
                                    </div>
                                    <div class="post-block-list post-module-6">
                                        {
                                            NewsDetails?.postComment?.map((RelatedPostComment) => {
                                                return (
                                                    < div class="last-comment mb-20 d-flex wow fadeIn animated">
                                                        <span class="item-count vertical-align">
                                                            <Link class="red-tooltip author-avatar" to={`RelatedPostComment/${RelatedPostComment}`}>
                                                                <img src={RelatedPostComment?.get_user?.profile} 
                                                                alt="" />
                                                                </Link>
                                                        </span>
                                                        <div class="alith_post_title_small">
                                                            <p class="font-medium mb-10"><Link to="#">{RelatedPostComment?.comment}</Link></p>
                                                            <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                                <span class="post-by">By <Link to="# ">{RelatedPostComment?.get_user?.name} {RelatedPostComment?.get_user?.lname}</Link></span>
                                                                {/* <span class="post-on">4m ago</span> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })

                                        }
                                    </div >
                                    {/* <div class="last-comment mb-20 d-flex wow fadeIn animated">
                                        <span class="item-count vertical-align">
                                            <a class="red-tooltip author-avatar" href="#"><img src={author9} alt="" /></a>
                                        </span>
                                        <div class="alith_post_title_small">
                                            <p class="font-medium mb-10"><a href="#">Riding the main trail was easy, a little bumpy because my mountain bike is a hardtail</a></p>
                                            <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                <span class="post-by">By <a href="# ">K. Harry</a></span>
                                                <span class="post-on">4m ago</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="last-comment d-flex wow fadeIn animated">
                                        <span class="item-count vertical-align">
                                            <a class="red-tooltip author-avatar" href="#"><img src={author3} alt="" /></a>
                                        </span>
                                        <div class="alith_post_title_small">
                                            <p class="font-medium mb-10"><a href="#">Teamwork begins by building trust. And the only way to do that is to overcome our need for invulnerability.</a></p>
                                            <div class="entry-meta meta-1 font-x-small color-grey float-left text-uppercase mb-10">
                                                <span class="post-by">By <a href="# ">D. Johny</a></span>
                                                <span class="post-on">4m ago</span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {/* <!--End col-lg-4--> */}

                    </div>
                    {/* <!--End row--> */}
                </main>

            </div>


        </div >

    )
}

export default NewsDeatils


