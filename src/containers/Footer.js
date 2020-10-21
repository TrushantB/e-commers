import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
        <footer className=" text-center text-lg-left site-footer text-white">
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <a href="#.">Flipfairy</a>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-0">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="nav-link">Product</a>
                  </li>
                  <li>
                    <a href="#!" className="nav-link">About US </a>
                  </li>
                  <li>
                    <a href="#!" className="nav-link">Contact Us</a>
                  </li>
                </ul>
              </div>
              
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="nav-link">Terms of use</a>
                  </li>
                  <li>
                    <a href="#!" className="nav-link">Privacy policy</a>
                  </li>
                  <li>
                    <a href="#!" className="nav-link">Cookies Policy</a>
                  </li>
                </ul>
              </div>
            
              <div className='col-lg-3 col-md-6'>
                <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://flipfairy.com/">2020 © Flipfairy  All Rights Reserved</a>
              </div>
            </div>
            </div>
          </div>
        </footer>
        )
    }
}

function mapStateToProps(state){
    return({
        cart: state.cartProducts,
    });
}

export default connect (mapStateToProps)(Footer);