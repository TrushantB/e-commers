import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import SingleProduct from './containers/SingleProduct';
import Cart from './containers/Cart';
import Home from './containers/Home';
import Product from "./containers/Product";
import Header from "./components/Header";
import Category from "./containers/Category";
import Footer from "./components/Footer";
import store from '../src/redux/store';
import Login from "./containers/Login";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Policy from "./containers/Policy";
import PrivacyPolicy from "./containers/PrivacyPolicy";
import Terms from "./containers/Terms";


ReactDOM.render(
<Provider store={store}>
    <div>
        <HashRouter >
            <div>
          <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/product/:type/:id' component={SingleProduct} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/category/:key/:id' component={Category} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/policy' component={Policy} />
            <Route exact path='/privacy-policy' component={PrivacyPolicy} />
            <Route exact path='/terms' component={Terms} />
          <Footer />
            </div>
        </HashRouter>
        {/* <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar/> */}
    </div>
</Provider>, document.getElementById('root'));
registerServiceWorker();
