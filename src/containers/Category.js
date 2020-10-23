import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Category extends Component {
    render() {
        return(
            <div>
                <h2>Category products here.</h2>
            </div>
        )
    }
}

const mapStateToProps = ({ product }) => ({
    Products:product.products
  })

export default connect(mapStateToProps)(Category);
