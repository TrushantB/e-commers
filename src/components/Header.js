import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <nav className='container'>
                <div className='row py-4 align-items-center'>
                <div>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </div>
                    <Link to='/' className="navbar-brand rounded-0 ">
                        <img src= {require('../images/flipfairy-logo.png')}/> 
                    </Link>
                    <div className="header-search">
                        <form className="form-inline w-100 m-auto position-relative">
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Search product, store &amp; seller"/>
                            <button type="su bmit" className="btn btn-text position-absolute btn-search">
                            <i 
                                className="fa fa-search fa-fw" 
                                aria-hidden="true" 
                            />
                            </button>
                        </form>
                    </div>
                    <Link to='/login' className='btn float-right user'>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        login
                    </Link>
                    <Link to='/cart' className='btn float-right nav-cart position-relative'>
                        <i 
                            className="fa fa-shopping-cart fa-fw" 
                            aria-hidden="true" 
                        />
                        <span className="badge badge-light position-absolute">{this.props.cart.length}</span>
                    </Link>

                    
                </div>
            
            </nav>
        );
    }
}

const mapStateToProps = ({ cart }) => ({
    cart:cart.cartProducts
  })

export default connect (mapStateToProps)(Header);