import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Data from '../data/Data';
import {useCart} from 'react-use-cart';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TabTitle } from "../pages/GeneralFunctions";


const GameDetails = ({handleAddProduct}) => {

//   TabTitle(Data.title)



    const {addItem} = useCart();

    const [fix,setFix] = useState(false);

    function setFixed(){
        if(window.innerWidth > 768){
            if(window.scrollY >=250 && window.scrollY <= 2400){
                setFix(true)
            }
            else{setFix(false)}
        }
        else{
            setFix(false)
        }

        
    }

    window.addEventListener("scroll",setFixed) 
    const {gameId} = useParams();

    const detailData = Data.find(game => game.title == gameId) ;

TabTitle(detailData.title)


  return (
    <div className='game-details' handleAddProduct={handleAddProduct}>
        <Navbar/>
        <Header/>
        <div className="container">
            <hr  className='my-4'/>
            <h1 className='gm-name'>{detailData.title}</h1>
            <div className="row gx-0 esas justify-content-between">
         
               <div className="left-sidebar">
              
                <div className="col-lg-12 ">
                    <img src={detailData.gamedetailimg} className='img-fluid' alt="" />
                </div>
                <div className="col-lg-12">
                <p className='about-text mt-4'>{detailData.text1}</p>
                <div className="row gx-0">
                    <div className="col-lg-6 mb-4 bd pb-4 col-sm-6">
                       
                        <p className='gnr-text ms-3'>{detailData.gnr}</p>
                        <a className='genre-text ms-3 '>{detailData.genre[0]}</a>
                        <a className='genre-text ms-2'> {detailData.genre[1]}</a>
                    </div>

                    <div className="col-lg-6 mb-4 bd pb-4 col-sm-6">
                        <p className='gnr-text ms-3'>{detailData.ftr}</p>
                        <a className='genre-text ms-3'>{detailData.features}</a>
                    </div>
                </div>
                <div className="col-lg-12">
                   <p className='inform-title'>{detailData.title}</p>
                   <div className="col-lg-12">
                   <p className='inform-text'>{detailData.inform1}</p>
                   <p className='about-txt'>{detailData.about1}</p>
                   </div>
                   <div className="col-lg-12">
                   <p className='inform-text'>{detailData.inform2}</p>
                   <p className='about-txt'>{detailData.about2}</p>
                   </div>
                   <div className="col-lg-12">
                   <p className='inform-text'>{detailData.inform3}</p>
                   <p className='about-txt'>{detailData.about3}</p>
                   </div>
                   <p className='text-2'>{detailData.about4}</p>

                   <p className='text-3'>{detailData.about5}</p>
                </div>
                <div className="col-lg-12 img-gallery mb-5">
                    <div className="col-lg-12">
                        <img src={detailData.detailimg1} alt="" className='img-fluid' />
                    </div>
                    <div className="row gx-4">
                    <div className="col-lg-6 mt-3">
                    <img src={detailData.detailimg2} alt="" className='img-fluid' />
                    </div>
                    <div className="col-lg-6 mt-3">
                    <img src={detailData.detailimg3} alt="" className='img-fluid' />
                    </div>
                    </div>
                    <div className="col-lg-12 my-3">
                        <img src={detailData.detailimg4} alt="" className='img-fluid' />
                    </div>

                </div>
                <h1 className='spf'>Specifications</h1>
                <div className="col-lg-12 sp ">

                    <div className="specifications">
                        <p className='text-light mt-3 mb-4'>Windows</p>
                        <hr />
                        <div className="row pt-3">
                            <div className="col-6">
                                <p className='min-max mt-2'>Minimum</p>
                            </div>
                            <div className="col-6">
                                <p className='min-max mt-2'>Recommended</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p className='system-type'>OS</p>
                                <p className='system'>{detailData.minsystem}</p>
                            </div>

                            <div className="col-6">
                                <p className='system-type'>OS</p>
                                <p className='system'>{detailData.maxsystem}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p className='system-type'>Processor</p>
                                <p className='system'>{detailData.minprocessor}</p>
                            </div>

                            <div className="col-6">
                                <p className='system-type'>Processor</p>
                                <p className='system'>{detailData.maxprocessor}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p className='system-type'>Memory</p>
                                <p className='system'>{detailData.minmemory}</p>
                            </div>

                            <div className="col-6">
                                <p className='system-type'>Memory</p>
                                <p className='system'>{detailData.maxmemory}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p className='system-type'>Storage</p>
                                <p className='system'>{detailData.minstorage}</p>
                            </div>

                            <div className="col-6">
                                <p className='system-type'>Storage</p>
                                <p className='system'>{detailData.maxstorage}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p className='system-type'>Direct X</p>
                                <p className='system'>{detailData.directx}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p className='system-type'>Graphics</p>
                                <p className='system'>{detailData.mingraphics}</p>
                            </div>

                            <div className="col-6">
                                <p className='system-type'>Graphics</p>
                                <p className='system'>{detailData.maxgraphics}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <p className="system-type">Logins</p>
                                <p className='system'>{detailData.logins}</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                            <p className="system-type">Languages Supported</p>
                                <p className='system mb-0' style={{lineHeight:"20px"}}>{detailData.audio}</p>
                                <p className='system'>{detailData.text}</p>
                                
                            </div>
                        </div>

                        <hr className='mt-4'/>

                        <div className="row">
                            <p className='privacy text-center' style={{lineHeight:"20px"}}>
                            {detailData.privacytext}
                            </p>
                            <p className='text-center pv'>Privacy Policy</p>
                        </div>
                    </div>
                    
                </div>
                </div>
               </div>

               <div className={fix ? "right-sidebar-fixed" : "right-sidebar"}>
                <div className="logo mt-5  d-flex justify-content-center ">
                    <img src={detailData.detailminilogo} alt="" className='right-side-img img-fluid' />
                    <img src={detailData.gamedetailimg} alt="" className='mf-main img-fluid' />
                </div>
                <div className="col-12 d-flex justify-content-center">
                <a href="#" className="btn btn-new mt-2">Base Game</a>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <p className='game-price'>${detailData.price}</p>
                </div>

                <div className="col-12">
                    <button className={detailData.buybtn}>
                        BUY NOW
                    </button>
                </div>

                <div className="col-12 mt-2">
                    <button type="button" onClick={()=>addItem(detailData)} className="btn btn-add-to-cart">
                        ADD TO CART
                    </button>
                </div>

                
                <div className="col-12 mt-2">
                    <button className="btn btn-add-to-wishlist" type='button' onClick={()=>handleAddProduct(detailData)}>
                        ADD TO WISHLIST
                    </button>
                </div>

                <div className="col-12 mt-2">
                    <div className="row">
                        <div className="col-3">
                            <img src={detailData.matureimg} className="img-fluid mtr-logo" alt="" />
                        </div>
                        <div className="col-9">
                            <p className='mtr-txt'>MATURE 17+</p>
                            <p className='mtr-text'>{detailData.maturetext}</p>
                            <p className='mtr-text'>In-Game Purchases</p>
                        </div>
                    </div>
                </div>

                <div className="col-12 mt-3">
                    <div className="row">
                        <div className="col-6">
                            <p className='info'>Developer</p>
                        </div>
                        <div className="col-6">
                            <p className='info-name text-end'>{detailData.developername}</p>
                        </div>
                        <hr />
                    </div>

                    <div className="row mt-2">
                        <div className="col-6">
                            <p className='info'>Publisher</p>
                        </div>
                        <div className="col-6">
                            <p className='info-name text-end'>{detailData.publishername}</p>
                        </div>
                        <hr />
                    </div>

                    <div className="row mt-2">
                        <div className="col-6">
                            <p className='info'>Release Date</p>
                        </div>
                        <div className="col-6">
                            <p className='info-name text-end'>{detailData.releasedate}</p>
                        </div>
                        <hr />
                    </div>

                    <div className="row mt-2">
                        <div className="col-6">
                            <p className='info'>Platform</p>
                        </div>
                        <div className="col-6">
                            <p className='info-name text-end'>
                            <div className='wn-logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg css-uwwqev" viewBox="0 0 512 512"><title>Windows</title><g><path fill="currentColor" d="M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z"></path></g></svg>
                            </div>
                            </p>
                        </div>
                        <hr />
                    </div>
                </div>


               </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default GameDetails