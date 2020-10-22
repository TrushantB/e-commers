import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../styles/product.css'

import { addToCart } from '../actions/index';

class ProductPageDetails extends Component {

    constructor(props){
        super(props);
        console.log(this.props.product);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(event){
        this.props.addToCart(this.props.product.id);
        toastr.success('Item Added', 'to cart succesfully', {timeOut:2000});
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="row justify-content-between ml-1 mb-5 mt-1">
                    <h3 className=''>{this.props.product.title}</h3>
                    
                </div> 
                {/* <div className="row mb-3 ml-1">
                    <div className='bg-primary rounded text-white ml-1'>₹{this.props.product.price}</div>
                </div> */}
                <h4>1 kg, around 16 pieces </h4>
                <p className="mb-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.
                </p>
                <h3>₹{this.props.product.price}</h3>


                <div className="d-flex mb-sm-5 mt-sm-5 ">
                
				  	<div className=""><input type="text" class="productcount"></input></div>
				  	<div className="ml-sm-5"><button  onClick={this.addToCart} className="btn m-1 btn-primary addtocartbtn">
                        <i className="fa fa-shopping-cart fa-fw" aria-hidden="true" />
                        <span className="Addtocart">Add to Cart</span>
                    </button>
                    </div>
				  </div>
            </div>
        );
    }
}

function mapStatetoProps(state){
    return({
        cart: state.cartProducts
    });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        addToCart: addToCart,
    },dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductPageDetails);