import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class CategoryDetails extends Component {
    render() {
        return(
            <div>
                <h2>Category products here.</h2>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({ 
        Products: state.Products
    });
}

export default connect(mapStateToProps)(CategoryDetails);
