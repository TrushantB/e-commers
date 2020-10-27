import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import Carousel from '../components/Carousel';
import HandmadeCards from '../components/HandmadeCards';
import CategoryList from '../components/CategoryList';

export default class Home extends Component {
  render() {
    return (
      <div className=' app'>
        
        
        <div className="container-fluid">
        
        <Carousel />
        <div className='container'> 
          <div className='feature-wrapper'>
            <div className="py-4">
              <ProductList />
            </div>
          </div>
          <div className='category-wrapper py-3'>
            <h3 className='cat-title'>Category</h3>
            <CategoryList />
          </div>
          <div className='handmade-wrapper py-4'>
            <h3 className='title mb-3'>Handmade Cards</h3>
            <HandmadeCards />
          </div>
        </div>  
        </div>
      </div>
    );
  }
}
