import React,{ Component} from 'react';
import {connect} from 'react-redux';

import ProductItem from './ProductItem';
import '../styles/category/handmadecardlist.css'


class HandmadeList extends Component{
    createProduct(list){
        let productItem = list;

        let pList = [];
        productItem.map((product)=> {
            pList.push(<ProductItem key={product.id} product={product} page="HandmadeProducts"/>);
        });
        return pList;
    }

    createGrid(){
        this.productItems = this.createProduct(this.props.Products);
        let row=[];
        for(let j=0; j<this.productItems.length; j++){
            row.push(<li key={this.productItems[j].key} className="col-sm-6 col-md-4 col-lg-3 product-item p-3">
                {this.productItems[j]}
            </li>)
        }
        return row;
    }

    render(){
        return(
            <ul className='row product-list handmadecard-list'>
                {this.createGrid()}
            </ul>
        );
    }
}

const mapStateToProps = ({ product }) => ({
    Products:product.handMadeCards
  })

export default connect(mapStateToProps)(HandmadeList);
