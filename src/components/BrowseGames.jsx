import React, {Component, useState } from "react";
import {useCart} from 'react-use-cart'


import Slider from "react-slick";
import SliderGamesCard from "./SliderGamesCard";
import DiscountCard from "./DiscountCard";
import Data from "../data/Data";
import NewEpicGamesCard from "./NewEpicGamesCard";

import { Link, NavLink } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from "./GameCard";

import ReactPaginate from "react-paginate";

import actionsliderimg1 from '../assets/img/actionslider1.jpg';
import actionsliderimg2 from '../assets/img/actionslider2.jpg';
import actionsliderimg3 from '../assets/img/actionslider3.jpg';
import GenresData from "../data/GenresData";
import GenreCard from "./GenreCard";
import Header from "./Header";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BrowseGames = () => {

  const { addItem } = useCart();

  const filterGenre =(a)=>{

    const b = Data.filter((searched)=>{

      if(searched.genre.includes(a)){
        return searched
      }

    })

    setfilteredCart(b)

  }

  const filterFeatures =(a)=>{

    const b = Data.filter((searched)=>{

      if(searched.features.includes(a)){
        return searched
      }

    })

    setfilteredCart(b)

  }

  const filterType =(a)=>{

    const b = Data.filter((searched)=>{

      if(searched.type == a){
        return searched
      }

    })

    setfilteredCart(b)

  }

  const filterPlatform =(a)=>{

    const b = Data.filter((searched)=>{

      if(searched.platform.includes(a)){
        return searched
      }

    })

    setfilteredCart(b)

  }


  const [card, setcard] = useState(Data);
  const [filteredCart, setfilteredCart] = useState(Data)
  const [pageNumber, setPageNumber] = useState(0);

  const filterNames = (e) =>{
    const search  =  e.target.value.toLowerCase();
    const filteredNames = card.filter(card=> card.title.toLocaleLowerCase().includes(search))
    setfilteredCart(filteredNames)
  }

  const cardsPerPage = 16;
  const pagesVisited = pageNumber * cardsPerPage;

  const displayCards = filteredCart
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((item) => {
      return (
        <div className="card col-lg-3 col-md-3 col-sm-6 b-0 p-0 my-3  " key={item.id} >
    <Link to={`/games/${item.title}`}>
    <img src={item.img} className="card-img-top" alt="..." />
    <div className="card-body text-light  p-0 mt-2">
      <p className="card-title ">{item.title}</p>
      <a  className={item.class}>{item.btn}</a>
      <div className="d-flex dd mt-2">
      <button href="#"  className={item.discountbuttonclass}>{item.dicountrate}</button> 
     <p className={item.priceclass}>{item.price}</p>
     <p className={item.discountedpriceclass}>${item.discountedprice}</p>
      </div>
    </div>
    </Link>
  </div>
      );
    });

  const pageCount = Math.ceil(card.length / cardsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const MostPopular = Data.filter((item) => {
    return item.type == "MostPopular";
  });

  

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [

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
    <div className="browse-games">
      <Navbar/>
      <Header/>
      <div className="container">

        <div  class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
                 <p className="middle-text">Filters</p>
               
            
          </div>
          <div class="offcanvas-body">
          <div className="search-area mb-2">
                <a href="#" class="search_icon">
                  <i class="fas fa-search"></i>
                </a>
                <input
                  type="text"
                  placeholder="Keywords"
                  className="search_input-2"
                />
              </div>
              <hr className="mt-3" />
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    PRICE
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        <div>
                          <button className="accordion-txt">Free</button>
                        </div>
                      </li>

                      <li>
                        <div>
                          <button className="accordion-txt">Under $5.00</button>
                        </div>
                      </li>

                      <li>
                        <div>
                          <button className="accordion-txt">
                            Under $10.00
                          </button>
                        </div>
                      </li>

                      <li>
                        <div>
                          <button className="accordion-txt">
                            Under $20.00
                          </button>
                        </div>
                      </li>

                      <li>
                        <div>
                          <button className="accordion-txt">
                            Under $30.00
                          </button>
                        </div>
                      </li>

                      <li>
                        <div>
                          <button className="accordion-txt">
                            $14.99 and above
                          </button>
                        </div>
                      </li>

                      <li>
                        <div>
                          <button className="accordion-txt">Discounted</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr />

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    GENRE
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                  <ul>
                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Action")} className="accordion-txt">Action</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Adventure")} className="accordion-txt">Adventure</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Card")} className="accordion-txt">Card Game</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Casual")} className="accordion-txt">Casual</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("City")} className="accordion-txt">
                              City Builder
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Comedy")} className="accordion-txt">Comedy</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Exploration")} className="accordion-txt">
                              Exploration
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Fight")} className="accordion-txt">Fighting</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("First Person")} className="accordion-txt">
                              First Person
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Horror")} className="accordion-txt">Horror</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Indie")} className="accordion-txt">Indie</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Music")} className="accordion-txt">Music</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Narration")} className="accordion-txt">Narration</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Open World")} className="accordion-txt">
                              Open World
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Party")} className="accordion-txt">Party</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Racing")} className="accordion-txt">Racing</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("RPG")} className="accordion-txt">RPG</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Simulator")} className="accordion-txt">
                              Simulation
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Sports")} className="accordion-txt">Sports</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Stealth")} className="accordion-txt">Stealth</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button  onClick={()=>filterGenre("Strategy")} className="accordion-txt">Strategy</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Survival")} className="accordion-txt">Survival</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("TurnBased")} className="accordion-txt">
                              Turn Based
                            </button>
                          </div>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>

              <hr />

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    FEATURES
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                  <ul>
                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Achievements")} className="accordion-txt">
                              Achievements
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Challenging Combat")} className="accordion-txt">
                              Challenging Combat
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Co-Op")} className="accordion-txt">Co-op</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Controller Support")} className="accordion-txt">
                              Controller Support
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Single Player")} className="accordion-txt">
                              Single Player
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("VR")} className="accordion-txt">VR</button>
                          </div>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>

              <hr />

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFour"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFour"
                  >
                    TYPES
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFour"
                >
                  <div class="accordion-body">
                  <ul>
                        <li>
                          <div>
                            <button onClick={()=>filterType("Oyun")} className="accordion-txt">OYUN</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterType("Editor")} className="accordion-txt">Editor</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterType("Game")} className="accordion-txt">Game</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterType("Game Add-On")} className="accordion-txt">
                              Game Add-On
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button  onClick={()=>filterType("Game Bundle")} className="accordion-txt">
                              Game Bundle
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterType("Game Demo")} className="accordion-txt">Game Demo</button>
                          </div>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>

              <hr />

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseFive"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseFive"
                  >
                    PLATFORM
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingFive"
                >
                  <div class="accordion-body">
                    <ul>
                      <li>
                        <div>
                          <button className="accordion-txt" onClick={()=>filterPlatform("Windows")}>Windows</button>
                        </div>
                      </li>

                      <li>
                        <div>
                          <button className="accordion-txt" onClick={()=>filterPlatform("Mac OS")}>Mac OS</button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <hr />
            </div>
           
          </div>

          <div className="close-area">
             <div className="my-3 d-flex">
             <a className="btn btn-clear ms-3  ">
                CLEAR
              </a>

              <a className="btn close-tab" data-bs-dismiss="offcanvas" aria-label="Close">
                DONE
              </a>
             </div>
            </div>
          
        </div>


        

        <section className="most-popular-genres mt-4">
          <div className="justify-content-between">
            <p className="title-text mb-0">Popular Genres</p>
            <Slider {...settings}>
              {GenresData.map((item, index) => {
                return (
                  <GenreCard
                    item={item}
                    key={index}
                    img1={item.img1}
                    img2={item.img2}
                    img3={item.img3}
                    gametype={item.gametype}
                   
                  />
                );
              })}
            </Slider>
          </div>
        </section>

        <section className="game-database ">
          <div className="middle-text justify-content-between d-flex">
            <p className="title-text mb-0 ">Sort By</p>
            <div>
              <a
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
                className="text-light"
              >
                <p className="text-filter   ">Filters</p>

                <span
                  class="filterIcon css-10y4g3l"
                  aria-hidden="true"
                  data-testid="icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg css-uwwqev"
                    viewBox="0 0 14 7"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-331.000000, -121.000000)"
                        fill="currentColor"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(331.000000, 121.000000)">
                          <g>
                            <polygon points="5 7 9 7 9 6 5 6"></polygon>
                            <polygon points="0 0 0 1 14 1 14 0"></polygon>
                            <polygon points="2 4 12 4 12 3 2 3"></polygon>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="show-filters d-flex justify-content-between">
            <div className="left-side-game-show">
              <div className="row gx-0 justify-content-between">
                {displayCards}

                <ReactPaginate
                  previousLabel={""}
                  marginPagesDisplayed={3}
                  breakLabel={"..."}
                  nextLabel={">"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </div>

            <div className="right-side-game-filter">
              <div className="search-area my-2">
                <a href="#" class="search_icon">
                  <i class="fas fa-search"></i>
                </a>
                <input
                  type="text"
                  placeholder="Keywords"
                  className="search_input-2"
                  onChange={(e)=>filterNames(e)}
                />
              </div>

              <hr className="mt-3" />
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      PRICE
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <div>
                            <button className="accordion-txt">Free</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button className="accordion-txt">
                              Under $5.00
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button className="accordion-txt">
                              Under $10.00
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button className="accordion-txt">
                              Under $20.00
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button className="accordion-txt">
                              Under $30.00
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button className="accordion-txt">
                              $14.99 and above
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button className="accordion-txt">
                              Discounted
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <hr />

                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      GENRE
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Action")} className="accordion-txt">Action</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Adventure")} className="accordion-txt">Adventure</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Card")} className="accordion-txt">Card Game</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Casual")} className="accordion-txt">Casual</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("City")} className="accordion-txt">
                              City Builder
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Comedy")} className="accordion-txt">Comedy</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Exploration")} className="accordion-txt">
                              Exploration
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Fight")} className="accordion-txt">Fighting</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("First Person")} className="accordion-txt">
                              First Person
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Horror")} className="accordion-txt">Horror</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Indie")} className="accordion-txt">Indie</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Music")} className="accordion-txt">Music</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Narration")} className="accordion-txt">Narration</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Open World")} className="accordion-txt">
                              Open World
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Party")} className="accordion-txt">Party</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Racing")} className="accordion-txt">Racing</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("RPG")} className="accordion-txt">RPG</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Simulator")} className="accordion-txt">
                              Simulation
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Sports")} className="accordion-txt">Sports</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Stealth")} className="accordion-txt">Stealth</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button  onClick={()=>filterGenre("Strategy")} className="accordion-txt">Strategy</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("Survival")} className="accordion-txt">Survival</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterGenre("TurnBased")} className="accordion-txt">
                              Turn Based
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <hr />

                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      FEATURES
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Achievements")} className="accordion-txt">
                              Achievements
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Challenging Combat")} className="accordion-txt">
                              Challenging Combat
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Co-Op")} className="accordion-txt">Co-op</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Controller Support")} className="accordion-txt">
                              Controller Support
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("Single Player")} className="accordion-txt">
                              Single Player
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterFeatures("VR")} className="accordion-txt">VR</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <hr />

                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      TYPES
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFour"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <div>
                            <button onClick={()=>filterType("Apps")} className="accordion-txt">Apps</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterType("Editor")} className="accordion-txt">Editor</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterType("Game")} className="accordion-txt">Game</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterType("Game Add-On")} className="accordion-txt">
                              Game Add-On
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button  onClick={()=>filterType("Game Bundle")} className="accordion-txt">
                              Game Bundle
                            </button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterType("Game Demo")} className="accordion-txt">Game Demo</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <hr />

                <div class="accordion-item">
                  <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      PLATFORM
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFive"
                  >
                    <div class="accordion-body">
                      <ul>
                        <li>
                          <div>
                            <button onClick={()=>filterPlatform("Windows")} className="accordion-txt">Windows</button>
                          </div>
                        </li>

                        <li>
                          <div>
                            <button onClick={()=>filterPlatform("Mac OS")} className="accordion-txt">Mac OS</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default BrowseGames;
