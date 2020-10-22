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
            <div className="col-md-6">
              
              <h3 className=''>5 Cornflower Blank Cards</h3>
                <p className="mb-5 text-muted">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.
                </p>
                <h3>38$</h3>


                <div className="d-flex mb-sm-5 mt-sm-5 ">
                
				  	<div className="">
                         <button  onClick={this.addToCart} className="btn m-1 btn-primary explore">
                           <span className="explore-text">Explore</span>
                         </button>
                          </div>
				  	
                      <div className="ml-sm-5">
                          <button  onClick={this.addToCart} className="btn btn-primary addtocartbtn">
                           <span className="Addtocart">Buy Now</span>
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