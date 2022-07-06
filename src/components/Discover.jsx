/* eslint-disable eqeqeq */
import React from "react";
import exploreimg from "../assets/newsimg/exploreimg.jpg";
import Data from "../data/Data";
import NewEpicGamesCard from "./NewEpicGamesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardimg1 from "../assets/img/ach1.jpg";
import cardimg2 from "../assets/img/ach2.jpg";
import cardimg3 from "../assets/img/ach3.jpg";
import cardimg4 from "../assets/img/ach4.jpg";
import cardimg5 from "../assets/img/ach5.jpg";
import cardimg6 from "../assets/img/ach6.jpg";
import freegame1 from "../assets/img/freegame1.jpg";
import freegame2 from "../assets/img/freegame2.jpg";
import freegame3 from "../assets/img/freegame3.jpg";
import { CarouselData } from '../data/CarouselData';
import { CarouselData2 } from '../data/CarouselData2';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";



import Slider from "react-slick";
import SliderGamesCard from "./SliderGamesCard";
// eslint-disable-next-line no-unused-vars
import DiscountCard from "./DiscountCard";
import Header from "./Header";
import { useTranslation } from "react-i18next";


const Discover = () => {

  const {t} = useTranslation();
  const newGameData = Data.filter((item) => {
    return item.typesl == "NewGame";
  });

  const MostPopular = Data.filter((item) => {
    return item.typesl == "MostPopular";
  });

  const recentlyUpdated = Data.filter((a) => {
    return a.typesl == "recentlyUpdated";
  });

  const achievmentsgame = Data.filter((a) => {
    return a.typesl == "achievmentsgame";
  });

  const salegamedata = Data.filter((a)=>{
    return a.typesl == "gameonsale"
  })

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
        },
      },

      {
        breakpoint: 1599,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="discover">
      <Navbar/>
          <Header/>
      <div className="container">

        <section className="main-carousel mb-5">

        <div  className="carousel mt-4">
      <Slider
        autoplay
        autoplaySpeed={2000}
        fade
        dots
        initialSlide={2}
        infinite
        
        customPaging={(i)=>{
          return (
            <div className=" carousel-box" key={(CarouselData2[i].id)}>
             <div className="all d-flex">
             <div className="carousel-image">
              <img src={(CarouselData2[i].img)}  alt="" style={{width:"60px", height:"80px", objectFit:"cover" , borderRadius:"4px"}} />
              </div>
              <div className="carousel-text d-flex align-items-center">
                <p  className="mb-0 text-light qq ms-3">{(CarouselData2[i].title)}</p>
              </div>
             </div>
            </div>
          )
        }}
    
        dotsClass="slick-dots custom-indicator"
      >
        {CarouselData.map((item) => (
          <div class="card bg-dark text-dark border-0">
          <img src={item.img} class="card-img" alt="..."/>
          <div class="card-img-overlay d-flex align-items-end      carousel-img ">
            <div className="text col-lg-4 col-md-4 col-sm-5 col-8">
            <div  className="" >
              <img src={item.miniimg}  alt="" />
            </div>
           <div className="mini-text">
           <p class="card-text-1 mb-3">{item.text1}</p>
            <p class="card-text-2 mb-4">{item.text2}</p>
           </div>
            <button className="btn learn-more">{t("Discover.btn2")}</button>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </div>

        </section>
        

        <section className="games-Sale">

        <div className="games-on-sale">
          <div className="justify-content-between">
            <p className="title-text">{t("Discover.title1")}</p>
            <Slider {...settings}>
            {salegamedata.map((item, index) => {
                return (
                   <Link to={`/games/${item.title}`} >  <div className="card col-lg-12 b-0 p-0 col-md-12 col-sm-12 mt-5 " >
    <img src={item.img} className="card-img-top" alt="..." />
    <div className="card-body text-light  p-0 mt-2">
      <p className="card-title ">{item.title}</p>
      <Link  className={item.class}>{item.btn}</Link>
      <div className="d-flex dd mt-2">
      <button href="#" className={item.discountbuttonclass} >{item.dicountrate}</button>
     <p className='ms-3 lt'>{item.price}</p>
     <p className='ms-3'>${item.discountedprice}</p>
      </div>
    </div>
  </div>

  </Link>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="games-with-achievments-row-cards mt-5 mb-4">
          <div className="update-games">
            <div className="card col-lg-4 border-0 p-0">
              <img src={cardimg4} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <p className="card-title">
                {t("Discover.cart-1")}
                </p>
                <p className="card-text">
                {t("Discover.cart-1-1")}
                </p>
                <p className="mt-2 price"></p>
              </div>
            </div>

            <div className="card col-lg-4 border-0 p-0">
              <img src={cardimg5} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <p className="card-title">{t("Discover.cart-2")}</p>
                <p className="card-text">
                {t("Discover.cart-2-1")}
                </p>
                <p className="mt-2 price">$59.99</p>
              </div>
            </div>

            <div className="card col-lg-4 border-0 p-0">
              <img src={cardimg6} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <p className="card-title">{t("Discover.cart-3")}</p>
                <p className="card-text">
                {t("Discover.cart-3-1")}
                </p>
                <p className="mt-2 price">$39.99</p>
              </div>
            </div>
          </div>
        </div>

          <div className="free-games">
            <div className="icon-text">
              <div className="col-lg-6 d-flex mt-3 ">
              <span class="css-pcnqjt" aria-hidden="true" data-testid="icon"><svg xmlns="http://www.w3.org/2000/svg" class="svg css-uwwqev" viewBox="0 0 32 32"><g fill="currentColor" fill-rule="evenodd"><path d="M30.443 16.605H19.72v-3.46h10.724v3.46zm-2.075 12.308c0 .397-.576.838-1.402.838h-7.247V17.99h8.648v10.924zm-14.876.838h4.843v-18.68h-4.843v18.68zm-10.033-.838V17.99h8.649v11.762H4.861c-.826 0-1.402-.441-1.402-.838zM1.384 13.146h10.724v3.46H1.384v-3.46zm1.773-4.324c0-1.622 1.319-2.94 2.94-2.94 2.752 0 5.093 3.78 5.575 5.88H6.097a2.944 2.944 0 0 1-2.94-2.94zm22.573-2.94c1.621 0 2.94 1.318 2.94 2.94 0 1.621-1.319 2.94-2.94 2.94h-5.574c.481-2.1 2.822-5.88 5.574-5.88zm5.405 5.88h-2.244a4.304 4.304 0 0 0 1.163-2.94 4.329 4.329 0 0 0-4.324-4.325c-2.89 0-5.227 2.813-6.341 5.294a.686.686 0 0 0-.362-.105H12.8a.686.686 0 0 0-.362.105c-1.114-2.481-3.45-5.294-6.34-5.294a4.329 4.329 0 0 0-4.325 4.325c0 1.136.444 2.168 1.163 2.94H.692a.692.692 0 0 0-.692.692v4.843c0 .382.31.692.692.692h1.384v10.924c0 1.246 1.223 2.222 2.785 2.222h22.105c1.562 0 2.785-.976 2.785-2.222V17.99h1.384c.382 0 .692-.31.692-.692v-4.843a.692.692 0 0 0-.692-.692zM15.914 4.151c.381 0 .691-.31.691-.692V.692a.692.692 0 0 0-1.383 0v2.767c0 .382.31.692.692.692"></path><path d="M19.546 5.362a.69.69 0 0 0 .49-.203l1.037-1.037a.692.692 0 1 0-.978-.979l-1.038 1.038a.692.692 0 0 0 .489 1.181M11.792 5.16a.69.69 0 0 0 .978 0 .692.692 0 0 0 0-.979l-1.038-1.038a.692.692 0 1 0-.978.979l1.038 1.037z"></path></g></svg></span>
              <p className="text-light">{t("Discover.title2")}</p>
              </div>
              <div className="col-lg-6  mt-3">
                <button className="btn view-more">{t("Discover.btn1")}</button>
              </div>
            </div>


            <div className="fgcard gap-3 mt-3">
            <div className="card col-lg-4 border-0">
                <img src={freegame1} className="card-img-top" alt="..." />
                <div className="card-body p-0">
                  <p className="new-game-div">{t("Discover.date-btn")}</p>
                </div>
                <div className="card-body px-0">
                  <p className="txt-1">Supraland</p>
                  <p className="txt-2">{t("Discover.date1")}</p>
                </div>
              </div>

              <div className="card col-lg-4 border-0">
                <img src={freegame2} className="card-img-top" alt="..." />
                <div className="card-body p-0">
                <p className="new-game-div-2">{t("Discover.date-btn2")}</p>
                </div>
                <div className="card-body px-0">
                  <p className="txt-1">A Game Of Thrones: The Board Game Digital Edition</p>
                  <p className="txt-2">{t("Discover.date2")}</p>
                </div>
              </div>

              <div className="card col-lg-4 border-0">
                <img src={freegame3} className="card-img-top" alt="..." />
                <div className="card-body p-0">
                <p className="new-game-div-2">{t("Discover.date-btn2")}</p>
                </div>
                <div className="card-body px-0">
                  <p className="txt-1">Car Mechanic Simulator 2018</p>
                  <p className="txt-2">{t("Discover.date2")}</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="games-with-achievments">
          <div className="justify-content-between">
            <p className="title-text">{t("Discover.title3")}</p>
            <Slider {...settings}>
              {achievmentsgame.map((item, index) => {
                return (
                <Link to={`/games/${item.title}`}>
                <div className="card col-lg-12 b-0 p-0 col-md-12 col-sm-12 mt-5 " >
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body text-light  p-0 mt-2">
                    <p className="card-title ">{item.title}</p>
                    <a href="#" className={item.class}>{item.btn}</a>
                   <p className='mt-2'>${item.price}</p>
                  </div>
                </div>
                </Link>  
                );
              })}
            </Slider>
          </div>
        </section>

        <section className="games-with-achievments-row-cards">
          <div className="update-games">
            <div className="card col-lg-4 border-0 p-0">
              <img src={cardimg1} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <p className="card-title">
                {t("Discover.cart-4")}
                </p>
                <p className="card-text">
                {t("Discover.cart-4-1")}
                </p>
                <p className="mt-2 price">$39.99</p>
              </div>
            </div>

            <div className="card col-lg-4 border-0 p-0">
              <img src={cardimg2} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <p className="card-title">{t("Discover.cart-5")}</p>
                <p className="card-text">
                {t("Discover.cart-5-1")}
                </p>
                <p className="mt-2 price">Free</p>
              </div>
            </div>

            <div className="card col-lg-4 border-0 p-0">
              <img src={cardimg3} className="card-img-top mt-3" alt="..." />
              <div className="card-body">
                <p className="card-title">{t("Discover.cart-6")}</p>
                <p className="card-text">
                {t("Discover.cart-6-1")}
                </p>
                <p className="mt-2 price">$39.99</p>
              </div>
            </div>
          </div>
        </section>

        <section className="recently-updated-games">
          <div className="justify-content-between">
            <p className="title-text">{t("Discover.title4")}</p>
            <Slider {...settings}>
              {recentlyUpdated.map((item, index) => {
                return (
                  <Link to={`/games/${item.title}`}>
                  <div className="card col-lg-12 b-0 p-0 col-md-12 col-sm-12 mt-5 " >
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body text-light  p-0 mt-2">
                    <p className="card-title ">{item.title}</p>
                    <a href="#" className={item.class}>{item.btn}</a>
                   <p className='mt-2'>${item.price}</p>
                  </div>
                </div>
                </Link>
                );
              })}
            </Slider>
          </div>
        </section>

        <section className="most-popular-games">
          <div className="justify-content-between">
            <p className="title-text">{t("Discover.title5")}</p>
            <Slider {...settings}>
              {MostPopular.map((item, index) => {
                return (
                  <Link to={`/games/${item.title}`}>
                  <div className="card col-lg-12 b-0 p-0 col-md-12 col-sm-12 mt-5 " >
                  <img src={item.img} className="card-img-top" alt="..." />
                  <div className="card-body text-light  p-0 mt-2">
                    <p className="card-title ">{item.title}</p>
                    <a href="#" className={item.class}>{item.btn}</a>
                   <p className='mt-2'>${item.price}</p>
                  </div>
                </div>
                </Link>
                );
              })}
            </Slider>
          </div>
        </section>

        <section className="new-release-games">
          <div className="row gx-0 justify-content-between">
            <p className="mt-5 title-text">{t("Discover.title6")}</p>
            {newGameData.map((item, index) => {
              return (
                <NewEpicGamesCard
                  item={item}
                  key={index}
                  img={item.img}
                  title={item.title}
                  btn={item.btn}
                  price={item.price}
                  class={item.class}
                />
              );
            })}
          </div>
        </section>

        <section className="explore">
          <div className="row">
            <div className="col-md-7 my-5 me-5">
              <img
                src={exploreimg}
                className="img-fluid card-img-top exploreimg"
                alt=""
              />
            </div>
            <div className="col-md-4 my-5 d-flex align-items-center">
              <div className="explore-text ">
                <h2 className="">{t("Discover.title7")}</h2>
                <p>
                {t("Discover.title8")}
                </p>

                <button className="btn learn-more">{t("Discover.btn2")}</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Discover;
