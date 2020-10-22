import React,{ Component} from 'react';
import {connect} from 'react-redux';

import ProductItem from '../components/ProductItem';
import Slider from 'react-slick';
import { Button } from 'bootstrap';

class ProductList extends Component{
    createProduct(list){
        let productItem = list;

        let pList = [];
        productItem.map((product)=> {
            pList.push(<ProductItem key={product.id} product={product} page="Product"/>);
        });
        return pList;
    }
    next = () => {
        this.slider.slickNext(); 
      }
      previous = () => {
        this.slider.slickPrev();
      }

    render(){
        let settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows:false
          };
        return(
            <div className='col-md-12 col-lg-10 product-list'>
                <div style={{ textAlign: "center" }}>
                    <button className="button" onClick={this.previous}>
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                    </button>
                    <button className="button" onClick={this.next}>
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                    </button>
                </div>

               <Slider className="row" ref={c => (this.slider = c)}  {...settings}>
                   {
                       this.createProduct(this.props.Products.Product)
                   }
                    
                </Slider>
            </div>
        );
    }
}

function mapStateToProps(state){
    return({ 
        Products: state.Products
    });
}

export default connect(mapStateToProps)(ProductList);
