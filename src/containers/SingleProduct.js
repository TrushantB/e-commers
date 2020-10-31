import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { images } from '../common/images';
import ProductPageDetails from '../components/ProductPageDetails';
import { getProductById } from '../services/product'

class SingleProduct extends Component{
  
    state = {
        product:null
    }
    componentDidMount() {
        getProductById(this.props.match.params.id).then((response) => {
            this.setState({product:response.data})
        })
    }

    render(){
        return(
            <div className='container-fluid app'>
                {
                    this.state.product && 
                <div className='row'>
                    <div className="col-md-12 col-lg-12 col-sm-12 breadcrumbsec">
                        <ul className="breadcrumbsmenu">
                            <li className="breadcrumbsitems">
                                <Link to= "" className="breadcrumbslink">
                                 Home
                                </Link>
                            </li>
                            <li className="breadcrumbsitems">
                               <Link to= "/product" className="breadcrumbslink">
                                 Fruits & Vegetables
                                </Link>                            
                            </li >
                            <li className="breadcrumbsitems">
                                <Link to= "/product" className="breadcrumbslink">
                                   Fresh Vegetables
                                </Link>
                            </li>
                            <li className="breadcrumbsitems">
                                <Link to= "/product" className="breadcrumbslink">
                                    Organic
                                </Link>
                            </li>
                            <li className="breadcrumbsitems">
                                <Link to= "/product" className="breadcrumbslink">
                                Fresh organic tomatoes
                                </Link>
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
                            src={this.state.product.image}
                            alt={this.state.product.title}/>

                            <div className="row productdetailsimg-row">
                                <div className="col-4">
                                    <img className="product-page-imgtab" src={this.state.product.image} alt="productimg1"  />
                                </div>
                                <div className="col-4">
                                    <img className="product-page-imgtab" src={this.state.product.image} alt="productimg2"  />
                                </div>
                                <div className="col-4 mb-4">
                                    <img className="product-page-imgtab" src={this.state.product.image} alt="productimg3"  />
                                </div>
                            </div>
                    </div>
                    
                    <ProductPageDetails product={this.state.product}/>
                </div>
                }
                
            </div>
        );
    }

}

const mapStateToProps = ({ product, cart }) => ({
    Products:product.products,
    cart:cart.cartProduct
  })

export default withRouter(connect(mapStateToProps)(SingleProduct));