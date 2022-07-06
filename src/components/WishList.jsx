import React from 'react';
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WishList = (props) => {

    const {saveCart,setSaveCart} = useState(true);

  const {addItem} =  useCart();
    const {cartItems} = props;
    const {handleRemoveProduct} = props;

  return (
    <div className='wishlist'>
        <Navbar/>
        <Header/>
       
        <div className="container">
            <h1 className='my-cart'>WishList</h1>

            {cartItems.length === 0 && (<>
                <div className="empty d-flex flex-column align-items-center justify-content-center">
            <div className=" d-flex col-12 justify-content-center eicon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="svg empty-icon"
                viewBox="0 0 45 52"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                    fill="currentColor"
                  ></path>
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                  ></path>
                </g>
              </svg>
            </div>

            <div className=" d-flex col-8 text-center justify-content-center">
              <p className="cc-e">You haven't added anything to your wishlist yet.</p>
            </div>

            <div className="d-flex col-12 justify-content-center">
              <Link to="/">
                <p className="shp">Shop for Games & Apps</p>
              </Link>
            </div>
          </div>
</>) }
           <div className="basket-area ">


<div className="cart-details">
    {cartItems.map((item,index)=>{
        return(
          <div  className="cart-a col-lg-12"  key={index}>
          <div className="cart-b d-flex justify-content-between">
              <div className='col-lg-2 col-md-2 col-sm-4'>
              <img src={item.img} alt="" className='img-fluid' />
              </div>
              <div className='col-lg-10 col-md-10 col-sm-8 d-flex  flex-column'>
                  <div className="col-12 d-flex justify-content-between ar-1">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="col-12">
                          <a href="#" className="btn btn-new text-uppercase">Base Game</a>
                          </div>
                          <div className="col-12">
                             <p className='cart-title'>{item.title}</p>
                          </div>

                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 ">
                          <div className="col-12 d-flex justify-content-end cc">
                              <button className={item.discountbuttonclass}>
                                  -20%
                              </button>
                              <p className='orig-price ms-2 mb-0'>
                              
                              </p>
                              <p className='dec-price ms-2 mb-0'>
                              ${item.price}
                              </p>
                          </div>
                          <div className="col-12 d-flex justify-content-end cc">
                              <p className='sale-time'>
                                {item.saletext}
                              </p>
                          </div>

                      </div>
                  </div>
              
                  <div className="col-12 d-flex justify-content-between dc">
                      <div className="col-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="svg cart-win" viewBox="0 0 512 512"><title>Windows</title><g><path fill="currentColor" d="M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z"></path></g></svg>
                      </div>
                      <div className="col-11 d-flex justify-content-end  aq">
                          <p className='move me-3' onClick={()=>handleRemoveProduct(item)} >Remove</p>
                          <button type="button" onClick={()=>addItem(item)} className="btn btn-add-to-cart">
              ADD TO CART
          </button>
                      </div>
                  </div>
              </div>
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

export default WishList