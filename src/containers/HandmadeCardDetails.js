import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../actions/index';

class HandmadeCardDetails extends Component {

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
        let cardDetails=this.props.Products.HandmadeCard;
        return (
            <div >
                <div className="row justify-content-between ml-1 mb-1 mt-1">
                    <h3 className='col-10'>{cardDetails.title}</h3>
                    
                </div> 
                {/* <div className="row mb-3 ml-1">
                    <div className='bg-primary rounded text-white ml-1'>₹{this.props.product.price}</div>
                </div> */}
                <h3>1 kg, around 16 pieces </h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble
                </p>
                <h3>₹30</h3>
                <div className="row">
                <div className="row ml-1">
                    <button onClick={this.addToCart} className="btn m-1 btn-primary">
                        {/* <i className="fa fa-shopping-cart fa-fw" aria-hidden="true" /> */}
                        Explore
                    </button>
                </div>
                <div className="row ml-5">
                    <button onClick={this.addToCart} className="btn m-1 btn-primary">
                        {/* <i className="fa fa-shopping-cart fa-fw" aria-hidden="true" /> */}
                        Buy Now
                    </button>
                </div>
                </div>
            </div>
        );
    }
}

function mapStatetoProps(state){
    return({
        cart: state.cartProducts,
        Products: state.Products
    });
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ 
        addToCart: addToCart,
    },dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(HandmadeCardDetails);