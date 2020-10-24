import React,{ Component} from 'react';
import { connect } from 'react-redux';
class Terms extends Component {
    render() {
        return(
            <div>
                <h2>Terms  Page.</h2>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Terms)
