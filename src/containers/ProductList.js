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

    createGrid(){
        this.productItems = this.createProduct(this.props.Products.Product);
        let row=[];
        for(let j=0; j<this.productItems.length; j++){
            row.push(<li key={this.productItems[j].key} className="col-sm-6 col-md-4 col-lg-3 product-item p-3">
                {this.productItems[j]}
            </li>)
        }
        return row;
    }

    render(){
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
          };
        return(
            <ul className='col-md-12 col-lg-10 product-list'>
                <Slider {...settings}>
                {this.createGrid()}
                </Slider>
               
            </ul>
        );
    }
}

function mapStateToProps(state){
    return({ 
        Products: state.Products
    });
}

export default connect(mapStateToProps)(ProductList);
