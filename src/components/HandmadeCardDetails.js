import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';

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
            <div className="col-md-5 ml-5">
              <h3 className='handmade-title mb-3'>5 Cornflower Blank Cards</h3>
                <p className="mb-3 text-muted">
                    <ul className="handmadeinfo-list">
                      <li>x7 folded cards 140lb</li>
                      <li>140lb paper with matching envelopes</li>
                      <li>Off-white textured paper</li>
                      <li>Hand drawn in ink, with </li>
                      <li>watercolour accents</li>
                    </ul>
                </p>
                <h3 className="handmade-price">38$</h3>


                <div className="d-flex mt-4">
                
				  	<div className="">
                         <button  onClick={this.addToCart} className="btn m-1 cst-btn explore">
                           <span className="explore-text">Explore</span>
                         </button>
                          </div>
				  	
                      <div className="ml-sm-2">
                          <button  onClick={this.addToCart} className="btn m-1 buy-btn explore">
                           <span className="Addtocart">Buy Now</span>
                         </button>
                    </div>
				  </div>
            </div>
        );
    }
}

// function mapStatetoProps(state){
//     return({
//         cart: state.cartProducts,
//         Products: state.Products
//     });
// }

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({ 
//         addToCart: addToCart,
//     },dispatch);
// }
const mapStateToProps = ({ product, cart }) => ({
    Products:product.products,
    cart:cart.cartProduct
  })
  
  const mapDispatchToProps = (dispatch) => {
    // const { loginUserData } = require('@redux/actions')
    return {
    //   loginUserData: (data) => dispatch(loginUserData(data))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HandmadeCardDetails);