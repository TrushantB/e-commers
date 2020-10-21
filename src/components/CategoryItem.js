import React,{ Component} from 'react';
import { Link } from 'react-router-dom';


export default class CategoryItem extends Component{

    createLink(id){
        return `/product/${this.props.page}/${id}`;
    }

    render(){

        return(
            <div className=" p-0 float-left">
                <Link to={this.createLink(this.props.product.id)}>
                <img width='250px' height='250px' className="card-img-top"
                    src={this.props.product.image} alt={this.props.product.title} 
                />
                </Link>
                <div className="card-body">
                    <Link to={this.createLink(this.props.product.id)} className="no-underline">
                        <h6 className="card-title product-title mt-1">{this.props.product.title}</h6>
                    </Link>
                    <div className="card-text"><small className="text-muted"><p>Seller:{this.props.product.brand}</p></small></div>
                    <div>
                        <p className='text-left'>₹{this.props.product.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}