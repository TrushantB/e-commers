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
          <div className='feature-wrapper'>
            <div className="py-4">
              <h3 className='title mb-3'>Featured Products</h3>
              <ProductList />
            </div>
          </div>
          <div className='category-wrapper py-3'>
            <h3 className='title mb-3'>Category</h3>
            <CategoryList />
          </div>
          <div className='handmade-wrapper py-3'>
            <h3 className='title mb-3'>Handmade Cards</h3>
            <HandmadeCards />
          </div>
        </div>
      </div>
    );
  }
}