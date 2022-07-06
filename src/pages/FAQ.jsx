import React from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TabTitle } from './GeneralFunctions';


const FAQ = () => {
  TabTitle("Epic Games Store FAQs | Get Answers to Your Frequent Questions - Epic Games")
  const {t} = useTranslation();

  return (
    <div className="faq">
        <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-4">
            <h1>{t("FAQPage.maintitle")}</h1>
          </div>

          <div className='col-12 text-start'>
            <p className='italic my-4'>{t("FAQPage.date")}</p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-1")}</p>
            <p>{t("FAQPage.ans-1")}</p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-2")}</p>
            <p>{t("FAQPage.ans-2")}</p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-3")}</p>
            <p>
            {t("FAQPage.ans-3.1")}
            </p>
            <p>
            {t("FAQPage.ans-3.2")}
            </p>
            <p>
            {t("FAQPage.ans-3.3")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-4")}</p>
            <p>
            {t("FAQPage.ans-4")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-5")}</p>
            <p>
            {t("FAQPage.ans-5")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-6")}</p>
            <p>
            {t("FAQPage.ans-6")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-7")}</p>
            <p>
            {t("FAQPage.ans-7")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-8")}</p>
            <p>
            {t("FAQPage.ans-8")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-9")}</p>
            <p>
            {t("FAQPage.ans-9")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-10")}</p>
            <p>
            {t("FAQPage.ans-10-1")}
            </p>
            <p>
            {t("FAQPage.ans-10-2")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-11")}</p>
            <p>
            {t("FAQPage.ans-11")}
            </p>
          </div>


          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-12")}</p>
            <p>
            {t("FAQPage.ans-12")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-13")}</p>
            <p>
            {t("FAQPage.ans-13")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-14")}</p>
            <p>
            {t("FAQPage.ans-14")}
            </p>
          </div>

          <div className="col-12 text-start">
            <p className='main-title'>{t("FAQPage.ques-15")}</p>
            <p>
            {t("FAQPage.ans-15-1")}
            </p>
            <p>
            {t("FAQPage.ans-15-2")}
            </p>
          </div>



        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FAQ