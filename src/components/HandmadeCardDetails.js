import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { Link,Route } from 'react-router-dom';

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
              {
                this.props.product && 
                <>
                <h3 className='handmade-title mb-3'>{this.props.product.title}</h3>
                  <div className="mb-3 text-muted">
                      <ul className="handmadeinfo-list">
                        <p>{this.props.product.description}</p> 
                      </ul>
                  </div>
                      <h3 className="handmade-price my-3">{this.props.product.price}$</h3>


                  <div className="d-flex mt-4">
                  
                  <div className="">
                              <button  className="btn m-1 cst-btn explore">
                                <Link to={`/product/${this.props.product.id}`} className="explore-text">Explore</Link>
                              </button>
                                </div>
                  
                            <div className="ml-sm-2">
                                <button onClick={() => this.props.addToCart(this.props.product,1)}  className="btn m-1 buy-btn explore">
                                <span className="Addtocart">Buy Now</span>
                              </button>
                          </div>
                </div>
                </>
              }
              
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
    const { addToCart } = require('../redux/actions')
    return {
      addToCart: (data,quantity) => dispatch(addToCart(data,quantity))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HandmadeCardDetails);