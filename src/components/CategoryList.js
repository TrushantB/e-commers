import React,{ Component} from 'react';
import {connect} from 'react-redux';
import CategoryItem from './CategoryItem';
import { getCategories } from '../services/category'


class CategoryList extends Component{
    createProduct(list){
        let productItem = list;

        let pList = [];
        productItem.map((product)=> {
            pList.push(<CategoryItem key={product.id} product={product} page="category"/>);
        });
        return pList;
    }

    createGrid(){
        this.productItems = this.createProduct(this.props.categoryData);
        let row=[];
        for(let j=0; j<this.productItems.length; j++){
            row.push(<li key={this.productItems[j].key} className="col-sm-6 col-md-4 col-lg-3 product-item p-3">
                {this.productItems[j]}
            </li>)
        }
        return row;
    }

    componentDidMount() {
        getCategories().then((response) => {
            console.log(response.data);
          this.props.getCategoryData(response.data)
        })
      }


    render(){
        return(
            <ul className='row product-list'>
                { this.props.categoryData.length &&  this.createGrid()}
            </ul>
        );
    }
}

const mapStateToProps = ({ category }) => ({
    categoryData:category.categoryData
  })

  const mapDispatchToProps = (dispatch) => {
    const { getCategoryData } = require('../redux/actions')
    return {
        getCategoryData: (data) => dispatch(getCategoryData(data))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
