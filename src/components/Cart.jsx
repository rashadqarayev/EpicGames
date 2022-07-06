import React, { useState } from "react";
import Header from "./Header";
import mature from "../assets/newsimg/mature.jpg";
import { useCart } from "react-use-cart";
import { Link, NavLink } from "react-router-dom";
import img from "../assets/img/battleff.jpg";


import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  // const [openModal,setOpenModal] = useState(false);

  const [EpicWallet, setEpicWallet] = useState(false);
  const [paypalWallet, setPaypalWallet] = useState(false);
  const [creditCart,setCreditCart] = useState(false);

  const openWallet = () => {
    setEpicWallet(true);
    setPaypalWallet(false)
    setCreditCart(false)
  };
  const openPaypal =()=>{
    setPaypalWallet(true)
    setEpicWallet(false);
    setCreditCart(false)
  }
  const openCredit = ()=>{
    setCreditCart(true)
    setEpicWallet(false);
    setPaypalWallet(false)

  }
  const {
    isEmpty,

    items,
    cartTotal,
    removeItem,
  } = useCart();

  if (isEmpty)
    return (
      <div className="empty-cart">
        <Navbar/>
        <Header />
        <div className="container">
          <h1 className="my-cart">My Cart</h1>
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

            <div className=" d-flex col-12 justify-content-center">
              <p className="cc-e">Your cart is empty.</p>
            </div>

            <div className="d-flex col-12 justify-content-center">
              <Link to="/">
                <p className="shp">Shop for Games & Apps</p>
              </Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );

  return (
    <div className="basket">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-body d-flex">
              <div className="wallet-selector col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="title d-flex justify-content-between">
                  <div className="col-lg-2">
                    <p className="mdl-title">CHECKOUT</p>
                  </div>
                  <div className="col-lg-2 d-flex justify-content-end me-2 user-sm">
                    <div className="user-ic">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="payment-icon"
                      >
                        <path
                          d="M8.25205 24C9.39178 24 10.6411 24 11.4082 24C11.6712 24 11.8904 24 12 24C12.1096 24 12.3288 24 12.5918 24C13.3589 24 14.6082 24 15.7479 24C19.0795 24 20 22.7872 20 21.5277C20 19.7551 15.0904 17.4694 15.0904 15.8601C15.0904 12.9213 18.3562 11.6851 18.3562 7.23032C18.4 3.24198 15.6384 0 12.2411 0C12.1534 0 11.8466 0 11.7589 0C8.38356 0 5.62192 3.24198 5.62192 7.25364C5.62192 11.7318 8.88767 12.9446 8.88767 15.8834C8.90959 17.4927 4 19.7551 4 21.551C4 22.7872 4.94247 24 8.25205 24Z"
                          fill="white"
                        ></path>
                      </svg>
                    </div>
                    <div className="user-name">
                      <p className="usr-name">RESHADQR</p>
                    </div>
                  </div>
                </div>

                <div className="all-wallets">
                  <div className="epic-games-wallet" onClick={openWallet}>
                    <div className="wallet-title">
                      <p className="mb-0">WALLET BALANCE</p>
                    </div>
                  <div className="wallet-cart">
                      <div className="cart-selector d-flex">
                        <div className="check d-flex align-items-center">
                          <input
                            class="checkbox-round"
                            type="radio"
                            name="fav_language"
                          />
                        </div>
                        <div className="epic-loq">
                          <div className="py-icon"></div>
                        </div>
                        <div className="wallet-balance d-flex align-items-center">
                          <p className="mb-0 caq">Wallet $0.00</p>
                        </div>
                      </div>
                      {EpicWallet && (
                        <div class="payment-wallet-form">
                          <span class="payment-wallet-form__note">
                            Your online wallet can store funds and be used to
                            make Epic Games purchases. An Epic Games Wallet can
                            be funded using a registered payment method.{" "}
                            <a
                              href="https://www.epicgames.com/site/wallet-terms?lang=en_US"
                              target="_blank"
                            >
                                   Learn more about your Epic Games Wallet
                            </a>
                          </span>
                          <button class="payment-btn payment-wallet-form__btn payment-btn--outlined">
                            <div class="payment-loading">
                              <div class="payment-loading__container">
                                <span>Add Funds to Wallet</span>
                              </div>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="other-payment-method">
                    <div className="wallet-title">
                      <p className="mb-0">OTHER PAYMENT METHODS</p>
                    </div>
                    <div className="wallet-cart" onClick={openCredit}>
                      <div className="cart-selector d-flex">
                        <div className="check d-flex align-items-center">
                          <input
                            class="checkbox-round"
                            type="radio"
                            name="fav_language"
                          />
                        </div>
                        <div className="credit-loq">
                          <div className="credit-icon"></div>
                        </div>
                        <div className="wallet-balance d-flex align-items-center">
                          <p className="mb-0 caq">Credit Card</p>
                        </div>
                      </div>
                      {creditCart && 
                      <div className="credit-cart-details">
                        <div className="col-lg-12 d-flex justify-content-between">
                          <div className="col-md-5 col-3">
                            <p className="mb-0 crt-d">CART DETAILS</p>
                          </div>
                          <div class="payment-bank-icon__container payment-chase-form__card-icons">
                            <span class="payment-bank-icon payment-bank-icon__visa"></span>
                            <span class="payment-bank-icon payment-bank-icon__discover"></span>
                            <span class="payment-bank-icon payment-bank-icon__discover_diners"></span>
                            <span class="payment-bank-icon payment-bank-icon__jcb"></span>
                            <span class="payment-bank-icon payment-bank-icon__amex"></span>
                            <span class="payment-bank-icon payment-bank-icon__master"></span>
                            </div>
                        </div>
                        <form action="">
                          <div className="cart-number-input col-lg-12">
                            <input type="tel" placeholder="Card Number" />
                          </div>
                          <div className="exp-and-cvv d-flex justify-content-between">
                            <div className="expiration col-lg-6 col-md-6 col-6">
                            <input type="tel" placeholder="mm/yy" maxlength={3} />
                            </div>
                            <div className="cvv col-lg-6 col-md-6 col-6 d-flex justify-content-end">
                              <input type="tel" placeholder="CVV" />
                            </div>
                          </div>
                          <div className="zip-city d-flex justify-content-between">
                            <div className="zip-code col-lg-4 col-md-4 col-4">
                              <input type="tel"placeholder="ZIP code" />
                            </div>
                            <div className="state col-lg-4 col-md-4 col-4">
                              <input type="text" placeholder="State" />
                            </div>
                            <div className="city col-lg-4 col-md-4 col-4">
                              <input type="text" placeholder="City" />
                            </div>
                          </div>
                        </form>
                        <div className="payment-saving mt-4">
                          <p className="mb-1 caq">Saved credit cards are authorized for future purchases.</p>
                          <div className="d-flex align-items-center mb-3">
                            <input type="checkbox" />
                            <p className="mb-0 ms-2">Do not save my credit card</p>
                          </div>
                        </div>
                      </div>
                      }
                    </div>

                    <div className="wallet-cart mt-3" onClick={openPaypal}>
                      <div className="cart-selector d-flex">
                        <div className="check d-flex align-items-center">
                          <input
                            class="checkbox-round"
                            type="radio"
                            name="fav_language"
                          />
                        </div>
                        <div className="paypal-loq">
                          <div className="paypal-icon"></div>
                        </div>
                        <div className="wallet-balance d-flex align-items-center">
                          <p className="mb-0 caq">Paypal</p>
                        </div>
                      </div>
                      {paypalWallet && 
                      <div className="paypal-details">
                        <p className="mb-0 caq">Saved PayPal payment information is authorized for future purchases.</p>
                        <div className="payment-saving mt-1">
                          <div className="d-flex align-items-center mb-3">
                            <input type="checkbox" />
                            <p className="mb-0 ms-2 caq">Do not save my Paypal payment information</p>
                          </div>
                        </div>
                        <p className="text-muted pyp1">You will be directed to PayPal to authorize your payment method, then you will be returned to Epic Games to complete this purchase.</p>
                      </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-summary col-lg-4 col-md-4 col-sm-12 col-12  ">
                <div className="order-going">
                  <div className="or-close d-flex justify-content-between">
                    <div>
                      <p className="mdl-title">ORDER SUMMARY</p>
                    </div>
                    <div className="close-mdl-btn col-lg-1 d-flex justify-content-end">
                      <i
                        class="fa-solid fa-xmark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></i>
                    </div>
                  </div>
                  <div className="game-list">
                    {items.map((item)=>{
                      return (
                        <div className="game-box col-12 d-flex">
                      <div className="col-lg-3 col-md-4 col-sm-2 col-2">
                        <img src={item.img} alt="" className="img-fluid" />
                      </div>
                      <div className="col-lg-9 col-md-8 col-sm-10 col-10 d-flex flex-column align-items-left justify-content-center ms-2">
                        <h6>{item.title}</h6>
                        <p className="game-pr">${item.price}</p>
                      </div>
                    </div>
                      )
                    })}

                  
                  </div>
                  <div className="order-price">
                    <div className="col-12 d-flex justify-content-between">
                      <div className="col-lg-2">
                        <p className="mb-0">Price</p>
                      </div>
                      <div className="col-lg-2 d-flex justify-content-end">
                        <p className="mb-0">${cartTotal.toFixed(2)}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="col-12 d-flex justify-content-between">
                      <div className="col-lg-2">
                        <p>Total</p>
                      </div>
                      <div className="col-lg-2 d-flex justify-content-end ">
                        <p>${cartTotal.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="creator-tag-help">
                    <div className="col-12 creator-i">
                      <input
                        type="text"
                        className="creator-input"
                        placeholder="Enter a creator tag"
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <p className="mb-0">Need Help?</p>
                      <a href="#" className="ms-1">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>

                <div className="purchase">
                  <button className="btn btn-primary">
                    PLACe holder
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar/>
      <Header />
      <div className="container">
        <h1 className="my-cart">My Cart</h1>
        <div className="basket-area ">
          <div className="cart-details">
            {items.map((item, index) => {
              return (
                <div key={index} className="cart-a col-lg-12">
                  <div className="cart-b d-flex justify-content-between">
                    <div className="col-lg-2 col-md-2 col-sm-4">
                      <img src={item.img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-8 d-flex  flex-column">
                      <div className="col-12 d-flex justify-content-between ar-1">
                        <div className="col-lg-8 col-md-8 col-sm-8">
                          <div className="col-12">
                            <a href="#" className="btn btn-new text-uppercase">
                              Base Game
                            </a>
                          </div>
                          <div className="col-12">
                            <p className="cart-title">{item.title}</p>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 ">
                          <div className="col-12 d-flex justify-content-end cc">
                            <button className={item.discountbuttonclass}>
                              -20%
                            </button>
                            <p className="orig-price ms-2 mb-0">
                              {item.discountedprice}
                            </p>
                            <p className="dec-price ms-2 mb-0">${item.price}</p>
                          </div>
                          <div className="col-12 d-flex justify-content-end cc">
                            <p className="sale-time">{item.saletext}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between">
                        <div className="col-12 d-flex">
                          <div className="col-1">
                            <img src={mature} className="img-fluid-1" alt="" />
                          </div>
                          <div className="col-11">
                            <p className="matur-text mb-0">MATURE 17+</p>
                            <p className="matur-text-2">{item.maturetext}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex justify-content-between align-items-end dc">
                        <div className="col-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="svg cart-win"
                            viewBox="0 0 512 512"
                          >
                            <title>Windows</title>
                            <g>
                              <path
                                fill="currentColor"
                                d="M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z"
                              ></path>
                            </g>
                          </svg>
                        </div>
                        <div className="col-11 d-flex justify-content-end ">
                          <p className="move me-3 ">Move to Wishlist</p>
                          <p
                            onClick={() => removeItem(item.id)}
                            className="remove"
                          >
                            Remove
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="price-details">
            <div className="col-lg-12">
              <div className="row">
                <h1 className="text-light">Games and Apps Summary</h1>
              </div>
              <div className="row gx-0 justify-content-between">
                <div className="col-2 mt-3">
                  <p className=" sl-text">Price</p>
                </div>
                <div className="col-3 text-end  mt-3">
                  <p className=" sl-text">${cartTotal.toFixed(2)}</p>
                </div>
              </div>

              <div className="row gx-0 justify-content-between">
                <div className="col-6 mt-3">
                  <p className=" sl-text">Sale Discount</p>
                </div>
                <div className="col-3 text-end  mt-3">
                  <p className=" sl-text">-$10.00</p>
                </div>
              </div>

              <div className="row gx-0 justify-content-between">
                <div className="col-2 mt-3">
                  <p className=" sl-text">Taxes</p>
                </div>
                <div className="col-10 text-end  mt-3">
                  <p className="sl1-text">Calculated at Checkout</p>
                </div>
              </div>

              <hr />

              <div className="row gx-0 justify-content-between">
                <div className="col-6 my-2">
                  <p className=" sl-text">Subtotal</p>
                </div>
                <div className="col-6 text-end  my-2">
                  <p className=" sl-text">${(cartTotal - 10).toFixed(2)}</p>
                </div>
              </div>

              <div className="row row gx-0 justify-content-between  checkoutbtn">
                <div className="col-12">
                  <button
                    className="btn btn-danger text-uppercase"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
