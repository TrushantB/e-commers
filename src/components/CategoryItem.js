import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { images } from '../common/images';


export default class CategoryItem extends Component{

    createLink(id){
        return `/category/${this.props.product.key}/${id}`;
    }

    render(){

        return(
            <div className="p-0">
                <Link to={ this.props.product.name ? this.createLink(this.props.product.id) : ''}>
                <img width='250px' height='250px' className="category-card-img"
                    src={this.props.product.image} alt={this.props.product.name} 
                />
                </Link>
            </div>
        );
    }
}
