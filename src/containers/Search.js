import React,{ Component} from 'react';
import {connect} from 'react-redux';
import { getProduct, searchProduct } from '../services/product'
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';


class Search extends Component {
     state = {
         searchedData : []
     }
     componentDidMount() {
        searchProduct(this.props.searchText).then((response) => {
            this.setState({searchedData:response.data})
        })
     }
    componentWillReceiveProps(nextProps) {    
        searchProduct(nextProps.searchText).then((response) => {
            this.setState({searchedData:response.data})
        })
    }

    createProduct(list){
        let productItem = list;

        let pList = [];
        productItem.map((product)=> {
            pList.push(<ProductItem key={product.id} product={product} page="HandmadeProducts"/>);
        });
        return pList;
    }

    createGrid(){
        this.productItems = this.createProduct(this.state.searchedData);
        let row=[];
        for(let j=0; j<this.productItems.length; j++){
            row.push(<li key={this.productItems[j].key} className="col-sm-6 col-md-4 col-lg-3 product-item p-3">
                {this.productItems[j]}
            </li>)
        }
        return row;
    }

    render(){
        return(
            <ul className='row product-list'>
                { this.state.searchedData.length && this.props.searchText ?
                this.createGrid() :
                <div className="container data-not-found-wrapper">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="error-template">
                                <h1>
                                    Oops!</h1>
                                <h2>
                                    Result Not Found</h2>
                                <div className="error-details">
                                    Try to search for another product!
                                </div>
                                <div className="error-actions">
                                    <Link to="/" className="btn btn-primary btn-lg">
                                    <span className="glyphicon glyphicon-home"></span>
                                        Back To Home 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                }
            </ul>
        );
    }
}

const mapStateToProps = ({ product,common }) => ({
    Products:product.products,
    searchText:common.searchText
  })

  const mapDispatchToProps = (dispatch) => {
    const { getProductData } = require('../redux/actions')
    return {
        getProductData: (data) => dispatch(getProductData(data))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Search);
