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
    let data =[
      {
        id:1,
        category:"wildflower",
        title:"Thank You",
        subtitle:"Greeting Cards",
        label:"Loren ipsum",
        image:'https://www.sagefruit.com/wp-content/uploads/2017/02/apricots-1509634_1920-2-1300x500.jpg'
      },
      {
        id:2,
        category:"wildflower",
        title:"Thank You",
        subtitle:"Greeting Cards",
        label:"Loren ipsum",
        image:'https://delmonte-sitefinity-public.s3.amazonaws.com/images/default-source/hompage-carousel-backgrounds/delmonte-homepagecarousel--pride_rainbow_horizontal_hi_branded_heart_june2019_global-1300x500.jpg?sfvrsn=3eec0d17_2'
      },
      {
        id:3,
        category:"wildflower",
        title:"Thank You",
        subtitle:"Greeting Cards",
        label:"Loren ipsum",
        image:'https://iamherbalifenutrition.com/wp-content/uploads/2019/07/Exotic-Fruits-1300x500.png'
      },
      {
        id:4,
        category:"wildflower",
        title:"Thank You",
        subtitle:"Greeting Cards",
        image:'https://www.nutritionforostomates.com.au/wp-content/uploads/2016/06/food-nutrients-for-ostomates-1300x500.jpg',
        label:"Loren ipsum"
      }
    ]
    return (
      <div className="slider-wrapper">

        <Slider {...settings}>

          {data.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <img className="slick-slide-image" src={`${slide.image}`} />
              <label className="slick-slide-label mt-3 category-title">{slide.category}</label>
              <label className="slick-slide-label mt-3 thanks-title">{slide.title}</label> 
              <label className="slick-slide-label mt-3 descrip-title">{slide.subtitle}</label>
              <div className="mt-1 button-wrap">
                <button className =" btn-explore btn-primary mr-3">explore</button>
                <button className =" btn-buynow btn-primary">buy now</button>
              </div>
            </div>

          )}

        </Slider>

      </div>
    );
  }
};