import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Header from '../containers/Header';
import Carousel from './Carousel';
import HandmadeCards from '../containers/HandmadeCards';
import CategoryList from '../containers/CategoryList';

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid app'>
        <Carousel />
        <div className='container'>
          <div className='row'>
            <div className="py-4">
              <h3 className='title'>Featured Products</h3>
              <ProductList />
            </div>
          </div>
          <div className='row'>
            <h3 className='title'>Category</h3>
            <CategoryList />
          </div>
          <div className='row'>
            <h3 className='title'>Handmade Cards</h3>
            <HandmadeCards />
          </div>
        </div>
    </div>
    );
  }
}