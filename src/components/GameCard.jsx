import React from 'react'

const GameCard = (props) => {
  return (
    <div className="card col-lg-3 col-md-3 col-sm-6 b-0 p-0 my-3  " >
    <img src={props.img} className="card-img-top" alt="..." />
    <div className="card-body text-light  p-0 mt-2">
      <p className="card-title ">{props.title}</p>
      <a href="#" className={props.class}>{props.btn}</a>
      <div className="d-flex dd mt-2">
      <button href="#" className={props.discountbuttonclass}>{props.dicountrate}</button> 
     <p className={props.priceclass}>{props.price}</p>
     <p className={props.discountedpriceclass}>{props.discountedprice}</p>
      </div>
    </div>
  </div>
  )
}

export default GameCard