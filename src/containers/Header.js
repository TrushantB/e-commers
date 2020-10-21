import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component{

    render(){
        return(
            <nav className='container'>
                <div className='row justify-content-between py-4'>
                    <Link to='/' className="navbar-brand rounded-0">
                        <i className="fa fa-home" aria-hidden="true"></i> FlipFairy
                    </Link>
                    <div className="header-search px-5">
                        <form className="form-inline w-100 position-relative">
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Search product, store &amp; seller"/>
                            <button type="submit" className="btn btn-text position-absolute btn-search">
                            <i 
                                className="fa fa-search fa-fw" 
                                aria-hidden="true" 
                            />
                            </button>
                        </form>
                    </div>
                    
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

function mapStateToProps(state){
    return({
        cart: state.cartProducts,
    });
}

export default connect (mapStateToProps)(Header);