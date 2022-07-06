import React from 'react'

const NewEpicGamesCard = (props) => {
  return (
    <div className="card col-lg-3 b-0 p-0 col-md-3 col-sm-6" >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body text-light p-0 mt-2">
          <p className="card-title ">{props.title}</p>
          <a href="#" className={props.class}>{props.btn}</a>
         <p className='mt-2'>${props.price}</p>
        </div>
      </div>
  )
}

export default NewEpicGamesCard