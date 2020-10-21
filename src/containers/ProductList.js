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
            row.push(<div key={this.productItems[j].key} className="col-sm-6 col-md-4 col-lg-3 product-item p-3">
                {this.productItems[j]}
            </div>)
        }
        return row;
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
                    <div>
                        <img width="100%" height="528px" src='https://images.unsplash.com/photo-1568045244282-e63a8b6b2b3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
                    </div>
                    <div >
                        <img width= "100%" height="528px" src='https://images.unsplash.com/photo-1541507638585-94ea969f4608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'/>
                    </div>
                    <div >
                        <img width= "100%" height="528px" src='https://images.unsplash.com/photo-1541507638585-94ea969f4608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'/>
                    </div>
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
