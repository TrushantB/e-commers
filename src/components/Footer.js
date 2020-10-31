import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return(
        <footer className="text-center text-lg-left site-footer text-white py-4">
          <div className="container p-4">
            <div className="row align-items-md-center footer-wrapper align-items-start">
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
                <ul className='list-unstyled d-flex justify-content-center social-menu align-self-md-end align-self-start'>
                  <li>
                    <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1653993517&extra_1=s%7Cc%7C318504236042%7Ce%7Cfacebook%7C&placement=&creative=318504236042&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1653993517%26adgroupid%3D63066387003%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D9062097%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjwit_8BRCoARIsAIx3Rj7shPmr1f5hZF13-7s54nrrepHSbVlTNCrpMxgHJ7kBKU8aT0Ra51IaArW8EALw_wcB" target="_blank"><i className='fa fa-facebook'></i></a>
                  </li>
                  <li className='px-5'>
                    <a href="https://twitter.com/login?lang=en" target="_blank"><i className='fa fa-twitter'></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank"><i className='fa fa-instagram'></i></a>
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