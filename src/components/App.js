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
        <div className='row'>
          <h3>Featured Products</h3>
          <ProductList />
        </div>
        <div className='row'>
          <h3 >Category</h3>
          <CategoryList />
        </div>
        <div className='row'>
          <h3 >Handmade Cards</h3>
          <HandmadeCards />
        </div>
        </div>
    );
  }
}