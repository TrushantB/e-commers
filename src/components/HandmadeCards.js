import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HandmadeCardDetails from './HandmadeCardDetails';
import HandmadeList from './HandmadeList';

import Slider from 'react-slick';

class HandmadeCards extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentSlide:0
        }
        // this.props.Products.forEach((product)=>{
        //     if(product.id === this.props.match.params.id ){
        //         this.product = product 
        //     }
        // })

    }
    componentDidMount() {

    }

    HandmadeCardGallery() {
       this.product = this.props.Products.HandmadeCard
    }

    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            beforeChange: (prev, next) => {
                this.setState({ currentSlide: next });
              },
          };

          console.log("currentSlide",this.state.currentSlide);
        return(
            // <div className=''>
            //     <div className='row header p-3'>
            //         <Header />
            //     </div>
            <div>
                <div className='row   align-items-center'>
                    <div className="col-md-6">
                        <Slider {...settings}>
                            {
                                this.props.handMadeCards.length &&  this.props.handMadeCards.map((product) => {
                                    return(
                                    <div key={product.id}><img className='img-fluid handmade-page-img' 
                                        src={product.image}
                                        alt={product.title}/>
                                    </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                    {/* <div className="col-md-6"> */}
                    <HandmadeCardDetails product = {this.props.handMadeCards[this.state.currentSlide]}/>

                    {/* </div> */}
                </div>
                <HandmadeList />
             </div>
        );
    }

}

const mapStateToProps = ({ product }) => ({
    handMadeCards:product.handMadeCards
  })

export default withRouter(connect(mapStateToProps)(HandmadeCards));