import React,{ Component} from 'react';
import {connect} from 'react-redux';

import ProductItem from '../components/ProductItem';
import Slider from 'react-slick';

class ProductList extends Component{
    createProduct(list){
        let productItem = list;

        let pList = [];
        productItem.map((product)=> {
            pList.push(<ProductItem key={product.id} product={product} page="Product"/>);
        });
        return pList;
    }

    render(){
        let settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return(
            <div className='col-md-12 col-lg-10 product-list'>
               <Slider className="row" {...settings}>
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
