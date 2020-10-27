import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Home/Header.css'
import { slide as Menu } from 'react-burger-menu'
import { getCategories } from '../services/category'

class Header extends Component{
    state = {
        flag:false
    }

    handleSidenav() {
        if(!this.state.flag) {
            document.getElementById("mySidenav").style.width = "510px";
        } else {
            document.getElementById("mySidenav").style.width = "0px";

        }
        this.setState({flag:!this.state.flag})
    }
    componentDidMount() {
        getCategories().then((response) => {
            console.log(response.data);
          this.props.getCategoryData(response.data)
        })
      }

    render(){
        return(
            <nav className='container'>
                <div className='row align-items-center header-nav'>
                <div onClick={() => this.handleSidenav()}>
                     <img src= {require('../images/nav-icon.png') }/> 
                </div>

                    <div>
                            <div id="mySidenav" className="sidenav">
                        <a href="javascript:void(0)" className="closebtn" onClick={() => this.handleSidenav()}><i class="fa fa-times" aria-hidden="true"></i></a>
                         <Link to="/" onClick = {() => this.handleSidenav()}>
                            <img src= {require('../images/flipfairy-logo.png') }/>
                         </Link>
                          <Link to="/about" onClick = {() => this.handleSidenav()}>
                                shop by category 
                          </Link>
                          {
                              this.props.categoryData.map((item) => {
                                  return (
                                      <Link key ={item.id} to={`/category/${item.key}/${item.id}`} onClick = {() => this.handleSidenav()}>{item.name} <i className="fa fa-angle-right arw-position" aria-hidden="true"></i></Link>
                                  )
                              })
                          }
                        {/* <Link to="/about" onClick = {() => this.handleSidenav()}>fruits <i className="fa fa-angle-right arw-position" aria-hidden="true"></i></Link>
                        <Link to="/Category" onClick = {() => this.handleSidenav()}>bakery <i className=" fa fa-angle-right arw-position" aria-hidden="true"></i></Link>
                        <Link to="/Category" onClick = {() => this.handleSidenav()}>dairy <i className=" fa fa-angle-right arw-position" aria-hidden="true"></i></Link>
                        <Link to="/Category" onClick = {() => this.handleSidenav()}>handmade card <i className="fa fa-angle-right arw-position" aria-hidden="true"></i></Link> */}
                        
                    </div>
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
const mapStateToProps = ({ category, cart }) => ({
    cart:cart.cartProducts,
    categoryData:category.categoryData
  })

  const mapDispatchToProps = (dispatch) => {
    const { getCategoryData } = require('../redux/actions')
    return {
        getCategoryData: (data) => dispatch(getCategoryData(data))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Header);