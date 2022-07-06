import React, { useState } from "react";
import cardimg1 from "../assets/newsimg/cardimg1.png";
import cardimg2 from "../assets/newsimg/cardimg2.png";
import detailimg from "../assets/newsimg/detailimg1.jpg";
import NewsData from "../data/NewsData";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TabTitle } from "../pages/GeneralFunctions";

import ReactPaginate from "react-paginate";
import Header from "./Header";

import { Link } from "react-router-dom";

const News = () => {
  TabTitle("Epic Games News - Latest Blog Articles About Games & The Store")

  const [cards,setCard] = useState(NewsData);
  const [pageNumber,setPageNumber] = useState(0)

  const cardsPerPage = 4;
  const pagesVisited = pageNumber  * cardsPerPage;


  const displayCards = cards.slice(pagesVisited,pagesVisited + cardsPerPage).map((item) => {
    return(
      <Link to={`/epicnews/${item.id}`}>
       <div class="card col-lg-12 " key={item.id}>
        <hr className="mt-2" />
  <div class="row">
    <div class=" col-lg-3 col-md-4 col-xl-2 ">
      <img src={item.img} class="img-fluid" alt="..."/>
    </div>
    <div class=" col-lg-9 col-md-8 col-xl-10 " >
      <div class="card-body ">
      <p class="card-title">{item.date}</p>
        <h2 class="text-light">
        {item.title}
        </h2>
        <a class="read-more" href="">{item.btn}</a>
      </div>
    </div>
  </div>
</div>
      </Link>
    )
  })
  

  const pageCount = Math.ceil(cards.length / cardsPerPage);
  const changePage = ({selected})=>{

    setPageNumber(selected)

  }
  return (
    
    <div className="news ">
      <Navbar/>
      <Header/>
      <div className="container">
        <div className="two-news">
          <div className="row gx-0 justify-content-between ">
            <span className="text-start text-light mt-3">News</span>

            <div class="card  col-md-6 col-12 border-0 my-3 ">
              <img src={cardimg1} class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-title">17H AGO</p>
                <h2 class="card-text ">
                  The Lord of the Rings: Return to Moria’s announcement reveals
                  a multiplayer survival game
                </h2>
                <a className="read-more" href="">
                  Read more
                </a>
              </div>
            </div>

            <div class="card  col-md-6 col-12 border-0 my-3">
              <img src={cardimg2} class="card-img-top " alt="..." />
              <div class="card-body">
                <p class="card-title">4D AGO</p>
                <h2 class="card-text ">
                  The Epic Games Store Summer Showcase Round-Up.
                </h2>
                <a className="read-more" href="">Read more</a>
              </div>
            </div>
          </div>
        </div>

        <div className="detailed-news ">
       {displayCards}
       <ReactPaginate
       previousLabel={"Previous"}
       nextLabel={"Next"}
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
      <Footer/>
    </div>
  );
};

export default News;
