import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductByCategory } from '../services/product'
import ProductItem from '../components/ProductItem';
class Category extends Component {

    state = {
        category:null,
        categoryProducts:[]
    }

    componentDidMount() {
        getProductByCategory(this.props.match.params.id).then((response) => {
        this.setState({categoryProducts:response.data})
    })
    }

    componentWillReceiveProps(nextProps) {
        getProductByCategory(nextProps.match.params.id).then((response) => {
            this.setState({categoryProducts:response.data})
        })

    }
    createProduct(list){
        let productItem = list;

        let pList = [];
        productItem.map((product)=> {
            pList.push(<ProductItem key={product.id} product={product}/>);
        });
        return pList;
    }

    createGrid(){
        this.productItems = this.createProduct(this.state.categoryProducts);
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
                {this.createGrid()}
            </ul>
        );
    }
}


const mapStateToProps = ({ product }) => ({
    Products:product.products
  })

export default connect(mapStateToProps)(Category);
