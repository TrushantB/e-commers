import React, { Component } from 'react';
import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class Cart extends Component{

    
    removeFromCart(id){
        // toastr.success('Item Removed', 'from cart succesfully', {timeOut:2000});
        toastr.success('The title', 'The message')
        this.props.removeFromCart(id);
    }

    render(){
      var total = this.props.cart.reduce(function(prev, cur) {
        return prev + cur.price;
      }, 0);

        return(
            <div className='container-fluid app'>
                <div className="row">
                        <div className="container-fluid">
                            <div className="heading">
                                <h1 className="title">My Cart</h1>
                            </div>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th><abbr>ID</abbr></th>
                                        <th><abbr>Image</abbr></th>
                                        <th><abbr>Title</abbr></th>
                                        <th><abbr>Quality</abbr></th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Total:₹{total}</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        this.props.cart.map((item) => {
                                            return(
                                              <tr>
                                              <td>{item.id}</td>
                                              <td><img className='img-thumbnail' src={item.image} alt={item.title}/></td>
                                              <td><Link to={`product/${item.id}`}>{item.title}</Link></td>
                                              <td>{item.quantity}</td>
                                              <td>₹{item.price}</td>
                                              <td>
                                                  <button onClick={()=>{ this.props.removeFromCart(item.id) }} className="btn btn-outline-danger" >
                                                      <span className="icon is-small"> <i className="fa fa-trash" aria-hidden="true"></i> </span>
                                                  </button>
                                              </td>
                                          </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>

            
        );
    }

}

const mapStateToProps = ({cart,product}) => {
  return {
    cart: cart.cartProducts,
    products: product.products
  }
}

const mapDispatchToProps = (dispatch) => {
    const { removeFromCart, addToCart } = require('../redux/actions')
    return {
      removeFromCart: (data) => dispatch(removeFromCart(data))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);