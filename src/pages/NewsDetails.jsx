import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import NewsData from '../data/NewsData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NewsDetails = () => {
  const {newsId} = useParams();

  const detailData = NewsData.find(a => a.id == newsId) ;


  return (
    <div className='news-details'>
      <Navbar/>
      <Header/>
    
      <div className="container">
      <div className="col-lg-12 mt-3">
        <img src={detailData.img1} alt="" className='img-fluid' />
        </div>
        <div className="news-texts">
          <h1>{detailData.title}</h1>
          <p className='mt-3 mb-4'>
          {detailData.newsdate}
          </p>

          <p className='mb-4'>{detailData.creator}</p>
          <p>{detailData.text1}</p>
          <p className='mb-5'>
          {detailData.text2}

          </p>
          <div className={detailData.iframeclass}>
          {detailData.iframe}
          </div>
          <img src={detailData.img2} className={detailData.img3class} alt="" />
          <h6 className='mb-3'>{detailData.text3}</h6>
          <p className={detailData.text4class}>{detailData.text4}
</p>
<img src={detailData.img3} className={detailData.img3class} alt="" />
<h6 className='mb-3'>
{detailData.text6}
</h6>
<p className='mb-4'>
{detailData.text7}
</p >
<p className='mb-5'>
  {detailData.text8}
</p>
<p>{detailData.text9} <a href={detailData.link}>{detailData.link}</a></p>
<p className={detailData.href1class}><a href={detailData.href1}>{detailData.link1}</a></p>
<p className='mb-0'><a href={detailData.href2}>{detailData.link2}</a></p>
<p><a href={detailData.href3}>{detailData.link3}</a></p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default NewsDetails