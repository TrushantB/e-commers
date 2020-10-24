import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Login extends Component {
    render() {
        return(
            <div>
                <h2>Login Page</h2>
            </div>
        )
    }
}


const mapStateToProps = ({ product }) => ({
    product:product.featureProduct
  })
  
  const mapDispatchToProps = (dispatch) => {
    // const { loginUserData } = require('@redux/actions')
    return {
    //   loginUserData: (data) => dispatch(loginUserData(data))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Login)
