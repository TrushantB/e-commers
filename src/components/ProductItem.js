import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import  '../styles/Home/ProductItem.css'
import { images } from '../common/images';
 class ProductItem extends Component{

    createLink(id){
        return `/product/${this.props.product.type}/${id}`;
    }

    render(){
   
        return(
            <div className="p-0" >
                <Link to={this.props.product.title ? this.createLink(this.props.product.id,this.props.product.type) : ''}>
                <img width='250px' height='250px' className="card-img-top"
                    src={images[this.props.product.image]} alt={this.props.product.title} 
                    // src={this.props.product.image} alt={this.props.product.title} 
                />
                </Link>
                <div className="card-body ">
                    <Link to={this.createLink(this.props.product.id,this.props.product.type)} className="no-underline text-decoration-none">
                        <div className="card-title product-title mt-1">{this.props.product.title}</div>
                    </Link>
                    <div className="card-text mt-3"><small className="text-muted "><p>Seller:{this.props.product.seller}</p></small></div>
                    <div>
                        <p className='text-left product-price mt-3'>{this.props.product.price}$</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ product }) => ({
    Products:product.products
  })

export default connect(mapStateToProps)(ProductItem);
