import React,{ Component} from 'react';
import {connect} from 'react-redux';

import ProductItem from './ProductItem';
import Slider from 'react-slick';
import '../styles/Home/ProductList.css'


class ProductList extends Component{
    createProduct(list){
        let productItem = list;

        let pList = [];
        productItem.map((product)=> {
            pList.push(<ProductItem key={product.id} product={product}/>);
        });
        return pList;
    }
    next = () => {
        this.slider.slickNext(); 
      }
      previous = () => {
        this.slider.slickPrev();
      }
      // componentDidMount() {
      //   getProduct().then((response) => {
      //     this.props.getProductData(response.data)
      //   })
      // }

    render(){
        let settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows:false
          };
        return(
            <div className="row">
              <div className='col-12'>
                <div className="d-flex justify-content-between">
                <h3 className='catogory-title mb-3'>Featured Products</h3>
                  <div className="featurep-navigation">
                    <button className="button-left  mb-2" onClick={this.previous}>
                      <i className="fa fa-angle-left pl-2 pr-2" aria-hidden="true"></i>
                    </button>
                    <button className="button-right" onClick={this.next}>
                      <i className="fa fa-angle-right pl-2 pr-2" aria-hidden="true"></i>
                    </button>
                    </div>
                </div>

               <Slider className="row" ref={c => (this.slider = c)}  {...settings}>
                   {
                       this.props.products.length && this.createProduct(this.props.products)
                   }
                    
                </Slider>
            </div>
            </div>
        );
    }
}

const mapStateToProps = ({ product }) => ({
    products:product.featureProducts
  })

  const mapDispatchToProps = (dispatch) => {
    const { getProductData } = require('../redux/actions')
    return {
        getProductData: (data) => dispatch(getProductData(data))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
