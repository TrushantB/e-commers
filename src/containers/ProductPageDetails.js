import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
            <div className="col-md-4">
                <div className="row justify-content-between ml-1 mb-1 mt-1">
                    <h3 className='col-10'>{this.props.product.title}</h3>
                    
                </div> 
                {/* <div className="row mb-3 ml-1">
                    <div className='bg-primary rounded text-white ml-1'>₹{this.props.product.price}</div>
                </div> */}
                <h3>1 kg, around 16 pieces </h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble
                </p>
                <h3>₹{this.props.product.price}</h3>


                <div className="row ml-1">
                    <button onClick={this.addToCart} className="btn m-1 btn-primary">
                        <i className="fa fa-shopping-cart fa-fw" aria-hidden="true" />
                        Add to cart
                    </button>
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