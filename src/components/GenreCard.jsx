import React from 'react'

const GenreCard = (props) => {
  return (
    <div className="card col-lg-12 col-md-12 col-sm-12 mt-3 mb-5" >
    <div className="card-body ">
      <div className="img-pos d-flex justify-content-between ">
        <div className="box-1">
          <img src={props.img1} alt=""  />

        </div>
        <div className="box-2 ">
          <img src={props.img2} alt=""  />

        </div>
        <div className="box-3 ">
          <img src={props.img3} alt=""  />
        </div>
      </div>
      <h2 className="card-title  text-center">{props.gametype}</h2>
    </div>
  </div>
  )
}

export default GenreCard