import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HandmadeCardDetails from './HandmadeCardDetails';
import HandmadeList from './HandmadeList';

import Header from './Header';
import ProductList from './ProductList';
import ProductPageDetails from './ProductPageDetails';


class HandmadeCards extends Component{

    constructor(props){
        super(props);
        // this.props.Products.forEach((product)=>{
        //     if(product.id === this.props.match.params.id ){
        //         this.product = product 
        //     }
        // })
        this.product=this.props.Products.HandmadeCard[0]
    }

    render(){
        return(
            // <div className='container-fluid app'>
            //     <div className='row header p-3'>
            //         <Header />
            //     </div>
            <div>

                <div className='row'>
                    <div className="col-md-8 p-0 bg-dark">
                        {/* <div className="back-btn">
                            <Link to='/'>
                            <i className="fa fa-arrow-left p-1" aria-hidden="true"></i>
                            </Link>
                        </div> */}
                        <img className='img-fluid product-page-img' 
                            src={this.product.image}
                            alt={this.product.title}/>
                    </div>
                    <HandmadeCardDetails product={this.product}/>
                </div>
                <HandmadeList />
             </div>
        );
    }

}

function mapStateToProps(state){
    return({
        Products: state.Products
    });
}

export default withRouter(connect(mapStateToProps)(HandmadeCards));