import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HandmadeCardDetails from './HandmadeCardDetails';
import HandmadeList from './HandmadeList';

import Header from './Header';
import ProductList from './ProductList';
import ProductPageDetails from './ProductPageDetails';
import Slider from 'react-slick';

class HandmadeCards extends Component{

    constructor(props){
        super(props);
        // this.props.Products.forEach((product)=>{
        //     if(product.id === this.props.match.params.id ){
        //         this.product = product 
        //     }
        // })

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
            slidesToScroll: 1
          };
        return(
            // <div className='container-fluid app'>
            //     <div className='row header p-3'>
            //         <Header />
            //     </div>
            <div>

                <div className='row'>
                    <div className="col-md-8 p-0 bg-dark">
                        {/* <div className="back-btn">
                            <Link to='/'>
                            <i className="fa fa-arrow-left p-1" aria-hidden="true"></i>
                            </Link>
                        </div> */}
                        
                            <Slider {...settings}>
                                {
                                    this.props.Products.HandmadeProducts.map((product) => {
                                       return(
                                        <div><img className='img-fluid' 
                                            src={product.image}
                                            alt={product.title}/>
                                        </div>
                                       )
                                    })
                                }
                                </Slider>
                        
                    </div>
                    <HandmadeCardDetails />
                </div>
                <HandmadeList />
             </div>
        );
    }

}

function mapStateToProps(state){
    return({
        Products: state.Products
    });
}

export default withRouter(connect(mapStateToProps)(HandmadeCards));