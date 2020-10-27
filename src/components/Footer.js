import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
        <footer className="text-center text-lg-left site-footer text-white py-4">
          <div className="container p-4">
            <div className="row align-items-center footer-wrapper">
              <div className="footer-logo">
              <Link to='/' className="navbar-brand rounded-0 ">
                        <img src= {require('../images/FlipFairy-footer-logo.png')}/> 
                    </Link>
              </div>
              

              <div className="footer-menu">
                <ul className="list-unstyled">
                  <li>
                    <Link to='/product' className="nav-link">Product</Link>
                  </li>
                  <li>
                    <Link to="/about" className="nav-link">About US </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                  </li>
                </ul>
                <div className="footer-submenu">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/terms" className="nav-link">Terms of use</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="nav-link">Privacy policy</Link>
                  </li>
                  <li>
                    <Link to="/policy" className="nav-link">Cookies Policy</Link>
                  </li>
                  </ul>
                </div>
              </div>            
              <div className='social-wrap'>
                <ul className='list-unstyled d-flex justify-content-center social-menu'>
                  <li>
                    <a href="#."><i className='fa fa-facebook'></i></a>
                  </li>
                  <li className='px-5'>
                    <a href="#."><i className='fa fa-twitter'></i></a>
                  </li>
                  <li>
                    <a href="#."><i className='fa fa-instagram'></i></a>
                  </li>
                </ul>
                <div className="text-center p-3 copyright-text">
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