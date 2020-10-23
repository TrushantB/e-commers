import React, { Component } from "react";
import Slider from 'react-slick';
import '../styles/Carousel.css'

export default class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 2000,
      fade:true,
      arrows:false,
      autoplaySpeed:5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const slide=['slide-one','slide-two','slide-three',"slide-four"]
    let data =[
      {
        id:1,
        image:'https://via.placeholder.com/1300x500'
      },
      {
        id:1,
        image:'https://images.unsplash.com/photo-1541507638585-94ea969f4608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
      },
      {
        id:1,
        image:'https://images.unsplash.com/photo-1537617173434-be35dd906e61?ixlib=rb-1.2.1&auto=format&fit=crop&w=741&q=80'
      },
      {
        id:1,
        image:'https://images.unsplash.com/photo-1580926608062-464f40bdcec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
      }
    ]
    return (
      <Slider className="row main-slider" {...settings}>
        {  data.map((item,index) => {
                return (
            <div className="slick-wrapper" key={index}>
                <div className={`slider `}>
                  <img src={item.image} className={`${slide[index]}`} />
                  
                    {/* <div className="sliderMax">
                        <h1 className="white">Organic Fresh tomato</h1>
                        <h3 className="mb-4 white">tomato 1 kg</h3>
                        <button className="btn">Read More</button>
                    </div> */}
                </div>
            </div>
          )
          })
  }  

        {/* <div>
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
        </div> */}
      </Slider>
    );
  }
};