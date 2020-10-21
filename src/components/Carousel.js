import React, { Component } from "react";
import Slider from 'react-slick';


export default class Carousel extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider className="row main-slider" {...settings}>
        <div>
          <img width="100%" height="528px" src='https://images.unsplash.com/photo-1568045244282-e63a8b6b2b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
        </div>
        <div >
          <img width= "100%" height="528px" src='https://images.unsplash.com/photo-1541507638585-94ea969f4608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'/>
          </div>
        <div>
          <img width= "100%" height="528px" src='https://images.unsplash.com/photo-1537617173434-be35dd906e61?ixlib=rb-1.2.1&auto=format&fit=crop&w=741&q=80'/>
          </div>
        <div>
          <img width="100%" height="528px" src='https://images.unsplash.com/photo-1580926608062-464f40bdcec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
        </div>
        <div>
          <img width="100%" height="528px" src='https://images.unsplash.com/photo-1582273941194-b9512bd33030?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
        </div>
      </Slider>
    );
  }
};