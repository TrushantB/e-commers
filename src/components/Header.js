import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Home/Header.css'
import { slide as Menu } from 'react-burger-menu'

class Header extends Component{
    state = {
        flag:false
    }

    handleSidenav() {
        if(!this.state.flag) {
            document.getElementById("mySidenav").style.width = "450px";
        } else {
            document.getElementById("mySidenav").style.width = "0px";

        }
        this.setState({flag:!this.state.flag})
    }

    render(){
        return(
            <nav className='container'>
                <div className='row align-items-center header-nav'>
                <div onClick={() => this.handleSidenav()}>
                     <img src= {require('../images/nav-icon.png') }/> 
                </div>

                    <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={() => this.handleSidenav()}>&times;</a>
                         <Link to="/about" onClick = {() => this.handleSidenav()}>
                            <img src= {require('../images/flipfairy-logo.png') }/>
                         </Link>
                        <Link to="/about" onClick = {() => this.handleSidenav()}>About</Link>
                        <Link to="/product" onClick = {() => this.handleSidenav()}>Product</Link>
                        <Link to="/Category" onClick = {() => this.handleSidenav()}>Category</Link>
                        
                    </div>

                    <Link to='/' className="navbar-brand rounded-0 ">
                        <img src= {require('../images/flipfairy-logo.png')}/> 
                    </Link>
                    <div className="header-search">
                        <form className="form-inline m-auto position-relative">
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Search product, store &amp; seller"/>
                            <button type="su bmit" className="btn btn-text position-absolute btn-search">
                                <img src={require('../images/search-icon.png')}/>
                            </button>
                        </form>
                    </div>
                    <Link to='/login' className='btn float-right user'>
                       <img src={require('../images/user.png')}/>
                        <span>login</span>
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