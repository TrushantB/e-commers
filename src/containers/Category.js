import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategoryById } from '../services/category'
class Category extends Component {

    state = {
        category:null
    }

    componentDidMount() {
       this.getCategory(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        this.getCategory(nextProps.match.params.id)

    }

    getCategory(id) {
        getCategoryById(id).then((response) => {
            this.setState({category:response.data})
        })
    }
    
    render() {
        return(
            <div>
                {
                    this.state.category ? <h2>{this.state.category.name} products here.</h2> : null
                }
            </div>
        )
    }
}

const mapStateToProps = ({ product }) => ({
    Products:product.products
  })

export default connect(mapStateToProps)(Category);
