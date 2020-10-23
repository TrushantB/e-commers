import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductPageDetails from '../components/ProductPageDetails';


class SingleProduct extends Component{

    constructor(props){
        super(props);
        this.props.Products[this.props.match.params.key].forEach((product)=>{
            if(product.id === this.props.match.params.id ){
                this.product = product 
            }
        })
    }

    render(){
        return(
            <div className='container-fluid app'>
                <div className='row'>
                    <div className="col-md-12 col-lg-12 col-sm-12 breadcrumbsec">
                        <ul className="breadcrumbsmenu">
                            <li className="breadcrumbsitems">
                                <a href="#" className="breadcrumbslink">Home<i></i></a>
                            </li>
                            <li className="breadcrumbsitems">
                                <a href="#" className="breadcrumbslink">Fruits & Vegetables</a>
                            </li >
                            <li className="breadcrumbsitems">
                                <a href="#" className="breadcrumbslink">Fresh Vegetables</a>
                            </li>
                            <li className="breadcrumbsitems">
                                <a href="#" className="breadcrumbslink">Organic</a>
                            </li>
                            <li className="breadcrumbsitems">
                                <a href="#" className="breadcrumbslink">Fresh organic tomatoes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-6 col-sm-12"> 
                        <div className="back-btn">
                            <Link to='/'>
                            <i className="fa fa-arrow-left p-1" aria-hidden="true"></i>
                            </Link>
                        </div>
                        
                        <img className='img-fluid product-page-img' 
                            src={this.product.image}
                            alt={this.product.title}/>

                            <div className="row productdetailsimg-row">
                                <div className="col-4">
                                    <img className="product-page-imgtab" src={this.product.image} alt="productimg1"  />
                                </div>
                                <div className="col-4">
                                    <img className="product-page-imgtab" src={this.product.image} alt="productimg2"  />
                                </div>
                                <div className="col-4 mb-4">
                                    <img className="product-page-imgtab" src={this.product.image} alt="productimg3"  />
                                </div>
                            </div>
                    </div>
                    
                    <ProductPageDetails product={this.product}/>
                </div>
                
            </div>
        );
    }

}

const mapStateToProps = ({ product, cart }) => ({
    Products:product.products,
    cart:cart.cartProduct
  })

export default withRouter(connect(mapStateToProps)(SingleProduct));