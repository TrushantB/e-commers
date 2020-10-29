import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import '../styles/Home/Header.css'
import { slide as Menu } from 'react-burger-menu'
import { getCategories } from '../services/category'

class Header extends Component{
    state = {
        flag:false,
        searchText:''
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
      keyPress(e,history){
          e.preventDefault()
          history.push("/search")
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
                        <a className="closebtn" onClick={() => this.handleSidenav()}><i className="fa fa-times" aria-hidden="true"></i></a>
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
                    </div>
                    </div>
                    <div className={this.state.flag ? "overlay-nav" : null }
                         onClick = {() => {
                            this.setState({flag:false})
                            this.handleSidenav()
                         }}
                    ></div>

                    <Link to='/' className="navbar-brand rounded-0 ">
                        <img src= {require('../images/flipfairy-logo.png')}/> 
                    </Link>
                    <div className="header-search">
                        <form className="form-inline m-auto position-relative" onSubmit={(e) => this.keyPress(e,this.props.history)}>
                            <input type="text" className="form-control" id="inputPassword2" 
                            placeholder="Search product, store &amp; seller"
                            // onChange={(e) => this.keyPress(e)}
                            onChange={(e) => this.setState({searchText:e.target.value})}
                            // onKeyEnter={(e) => this.keyPress(e)}
                            />
                            <button type="submit" className="btn btn-text position-absolute btn-search" 
                            onClick={() => this.props.searchText(this.state.searchText)}>
                                <Link to="/search">
                                    <img src={require('../images/search-icon.png')}/>
                                </Link>
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
    const { getCategoryData, searchText } = require('../redux/actions')
    return {
        getCategoryData: (data) => dispatch(getCategoryData(data)),
        searchText: (data) => dispatch(searchText(data)),
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));