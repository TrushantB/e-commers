import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
        <footer className="text-center text-lg-left site-footer text-white py-4">
          <div className="container p-4">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <Link to='/' className="navbar-brand rounded-0 ">
                        <img src= {require('../images/FlipFairy-footer-logo.png')}/> 
                    </Link>
              </div>
              

              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
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
              
              <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
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
            
              <div className='col-lg-5 col-md-6'>
                <ul className='list-unstyled d-flex justify-content-center social-menu'>
                  <li className='px-2'>
                    <a href="#."><i className='fa fa-facebook'></i></a>
                  </li>
                  <li className='px-2'>
                    <a href="#."><i className='fa fa-twitter'></i></a>
                  </li>
                  <li className='px-2'>
                    <a href="#."><i className='fa fa-instagram'></i></a>
                  </li>
                </ul>
                <div className="text-center p-3 copyright-text">
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