import React, { Component } from 'react'
import data from './data.js'
import Footer from '../template/footer.js';
import NavBar from '../template/navbar.js';

export default class ShowProduct extends Component {
    render() {
        console.log(this.props.match.params.id)
        const product=data.products.find(product=>product._id==this.props.match.params.id)
        return (
            
            <div>
            
            <div class="prod_box_big">
            <div class="top_prod_box_big"></div>
            <div class="center_prod_box_big">
              <div class="product_img_big"> <a href="javascript:popImage('images/big_pic.jpg','Some Title')" title="header=[Zoom] body=[&nbsp;] fade=[on]"><img src="images/laptop.gif" alt="" border="0" /></a>
                <div class="thumbs"> <a href="#" title="header=[Thumb1] body=[&nbsp;] fade=[on]"><img src="images/thumb1.gif" alt="" border="0" /></a> <a href="#" title="header=[Thumb2] body=[&nbsp;] fade=[on]"><img src="images/thumb1.gif" alt="" border="0" /></a> <a href="#" title="header=[Thumb3] body=[&nbsp;] fade=[on]"><img src="images/thumb1.gif" alt="" border="0" /></a> </div>
              </div>
              <div class="details_big_box">
                <div class="product_title_big">{product.name}</div>
                <div class="specifications"> Disponibilitate: <span class="blue">In stoc</span><br />
                  Garantie: <span class="blue">24 luni</span><br />
                  Tip transport: <span class="blue">Mic</span><br />
                  Pretul include <span class="blue">TVA</span><br />
                </div>
                <div class="prod_price_big"><span class="reduce">{product.price}$</span> <span class="price">270$</span></div>
                <a href="#" class="addtocart">add to cart</a> <a href="#" class="compare">compare</a> </div>
            </div>
            <div class="bottom_prod_box_big"></div>
          </div>
          
          </div>
           );
    }
}