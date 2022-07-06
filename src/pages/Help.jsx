import React from 'react';
import fortinite from '../assets/img/fortinite.jpg'
import epicgames from '../assets/img/epicgames.jpg'
import HelpData from '../data/HelpData';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TabTitle } from './GeneralFunctions';

const Help = () => {
  TabTitle("Epic Games Technical Support & Customer Service | Epic Games")

  const {t} = useTranslation();

  return (
    <div className="help">
      <Navbar/>
      <section className="search">
          <div className="container">
          <div className="row py-5">
            <div className="col-12 pt-2">
              <h1>{t("HelpPage.maintitle")}</h1>
              <div className="search-area mt-4">
                <a href="#" class="search_icon">
                  <i class="fas fa-search"></i>
                </a>
                <input
                  type="text"
                  placeholder={t("HelpPage.placeholder")}
                  className="search_input-2"
                />
              </div>
            </div>
          </div>
          </div>
        </section>
        <div className="questions py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className='mb-3'>{t("HelpPage.title")}</h1>
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-lg-4 col-md-6">

                <div className="row">

                  <div className="col-12 mt-3 mb-2">
                    <hr />
                    <a href="" className='act'>
                    <p>
                    {t("HelpPage.topic-1")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                    </a>
                    
                  </div>

                  <div className="col-12  mb-2">
                    <hr />
                    <a href="" className='act'>
                    <p>
                    {t("HelpPage.topic-2")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                    </a>
                  
                  </div>

                  <div className="col-12 mb-2">
                    <hr />
                    <a href="" className='act'>

                    <p>
                    {t("HelpPage.topic-3")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                    </a>
                  
                  </div>

                  <div className="col-12 mb-2">
                  <hr />
                   <a href="" className='act'>
                   <p>
                   {t("HelpPage.topic-4")}</p>
                   <a href="#">{t("HelpPage.btn")}</a>
                   </a>
                    <hr  className=''/>
                  </div>

                  
                </div>
              </div>

              <div className="col-lg-4  d-n">

                <div className="row">

                  <div className="col-12 mt-3 mb-2">
                    <hr />
                    <a href="" className='act'>
                    <p>
                    {t("HelpPage.topic-5")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                    </a>
                  </div>

                  <div className="col-12 mb-2">
                    <hr />
                    <a href="" className='act'>
                    <p>
                    {t("HelpPage.topic-6")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                    </a>
                  </div>

                  <div className="col-12 mb-2">
                    <hr />
                   <a href="" className='act'>
                   <p>
                   {t("HelpPage.topic-7")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                   </a>
                  </div>

                  
                </div>
              </div>

              <div className="col-lg-4 col-md-6 ">

                <div className="row">

                  <div className="col-12 mt-3 mb-2">
                    <hr className='d-n-2' />
                    <a href="" className='act'>
                    <p>
                    {t("HelpPage.topic-8")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                    </a>
                  </div>

                  <div className="col-12 mb-2">
                    <hr />
                    <a href="" className='act'>
                    <p>
                    {t("HelpPage.topic-9")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                    </a>
                  </div>

                  <div className="col-12 mb-2">
                    <hr />
                    <a href="" className='act'>
                    <p>
                    {t("HelpPage.topic-10")}
                    </p>
                    <a href="#">{t("HelpPage.btn")}</a>
                    </a>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="help-gallery py-5">
          <div className="container">
            <div className="row ">
            <div className="col-12">
                <h1 className='mb-3'>{t("HelpPage.title2")}</h1>
              </div>
            </div>

            <div className="row gx-0 justify-content-between">
            <div class="card text-white col-lg-6 col-md-6 img-hover-zoom img-hover-zoom--basic">
        <img src={fortinite} class="card-img" alt="..."/>
        <hr />
         <div class="card-img-overlay d-flex align-items-end justify-content-between">
    
      
       <a href="" className='text-light'><p class="card-text text-start ">FORTINITE</p></a>
       <i class="fa-solid fa-arrow-right"></i>
      
       </div>
      </div>

      <div class="card text-white col-lg-6 col-md-6 img-hover-zoom img-hover-zoom--basic">
        <img src={epicgames} class="card-img" alt="..."/>
        <hr />
         <div class="card-img-overlay d-flex align-items-end justify-content-between">
    
      
       <a href="" className='text-light'><p class="card-text text-start ">EPIC GAMES STORE</p></a>
       <i class="fa-solid fa-arrow-right"></i>
      
       </div>
      </div>


            </div>

             <div className="row gx-0 justify-content-between">
           {HelpData.map((item)=>{
            return (
              <div class="card text-white col-lg-3 col-md-3 col-sm-6 py-1 img-hover-zoom img-hover-zoom--basic" >
              <img src={item.img} class="card-img" alt="..."/>
              <hr />
               <div class="card-img-overlay d-flex align-items-end justify-content-between">
          
            
             <a href="" className='text-light'><p class="card-text text-start text-uppercase">{item.name}</p></a>
             <i class="fa-solid fa-arrow-right"></i>
            
             </div>
            </div>
            )
           })}

     


            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Help