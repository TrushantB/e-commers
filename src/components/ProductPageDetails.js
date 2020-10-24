import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import '../styles/Home/ProductPageDetails.css'

class ProductPageDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
          count:1
        }

    }
    handleProductCount(count) {
        if(0 < count  && count < 99) {
            this.setState({count:count})
        }
    }

    addToCart = () => {
          let product = {
              id:this.props.product.id,
              title:this.props.product.title,
              quantity:this.state.count,
              image:this.props.product.image,
              price: this.state.count * this.props.product.price
          }
        this.props.addToCart(product);
        // toastr.success('Item Added', 'to cart succesfully', {timeOut:2000});
    }

    render() {
        return (
            <div className="col-md-12 col-lg-6">
                <div className="row justify-content-between ml-1 mb-5 mt-1 flex-column">
                    <h3 className='product-detail-title'>{this.props.product.title}</h3>
                    <div className="mt-1">
                        <h4 className="productinfo-title mt-2">Seller,{this.props.product.seller}</h4>
                        <h3 className="productinfo-subtitle mb-1 mt-3">{this.props.product.subtitle}</h3>
                    </div>
                    
                </div> 
                {/* <div className="row mb-3 ml-1">
                    <div className='bg-primary rounded text-white ml-1'>₹{this.props.product.price}</div>
                </div> */}
                
                
                <p className="productdesc">
                {this.props.product.discription}
                </p>
                <h2 className="mt-5 mb-5">₹{this.props.product.price}</h2>
                <div className="d-flex mb-4 mt-5">
                
				  	<div className="">
                          <input type="number" class="productcount" value={this.state.count} onChange={(e) => this.handleProductCount(e.target.value)}></input>
                          </div>
				  	<div className="ml-3"><button  onClick={this.addToCart} className="btn m-1 btn-primary addtocartbtn">
                        {/* <i className="fa fa-shopping-cart fa-fw" aria-hidden="true" /> */}
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
        cartProducts: state.cartProducts
    });
}

const mapDispatchToProps = (dispatch) => {
    const { addToCart } = require('../redux/actions')
    return {
      addToCart: (data) => dispatch(addToCart(data))
    }
  }

export default connect(mapStatetoProps, mapDispatchToProps)(ProductPageDetails);