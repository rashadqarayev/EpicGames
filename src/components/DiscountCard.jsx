import React from 'react'

const DiscountCard = (props) => {
  return (
    <div className="card col-lg-12 b-0 p-0 col-md-12 col-sm-12 mt-5 " >
    <img src={props.img} className="card-img-top" alt="..." />
    <div className="card-body text-light  p-0 mt-2">
      <p className="card-title ">{props.title}</p>
      <a href="#" className={props.class}>{props.btn}</a>
      <div className="d-flex dd mt-2">
      <button href="#" className={props.discountbuttonclass} >{props.dicountrate}</button>
     <p className='ms-3 lt'>{props.price}</p>
     <p className='ms-3'>{props.discountedprice}</p>
      </div>
    </div>
  </div>
  )
}

export default DiscountCard