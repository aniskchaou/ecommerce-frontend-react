import React, { Component, useEffect,useState } from 'react'
import data from './data.js'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import listProducts from '../../actions/productActions.js';
export default function Products() {

  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
      useEffect(()=>{
           
                dispatch(listProducts());
            return()=>{
    
            };
        },[]);
        return (
           loading?<div>loading ....</div>:
           error? <div>{error}</div>:
            products.map(product=>
            <div className="prod_box">
            <div className="top_prod_box"></div>
            <div className="center_prod_box">
              <div className="product_title"><Link to={'/products/'+product._id}> {product.name} </Link></div>
              <div className="product_img"><img src={product.image} alt="" border="0" /></div>
              <div className="prod_price"><span className="reduce">350$</span> <span className="price">{product.price}$</span></div>
            </div>
            <div className="bottom_prod_box"></div>
            <div className="prod_details_tab"> <a href="#" title="header=[Add to cart] body=[&nbsp;] fade=[on]"><img src="css/images/cart.gif" alt="" border="0" className="left_bt" /></a> <a href="#" title="header=[Specials] body=[&nbsp;] fade=[on]"><img src="css/images/favs.gif" alt="" border="0" className="left_bt" /></a> <a href="#" title="header=[Gifts] body=[&nbsp;] fade=[on]"><img src="css/images/favorites.gif" alt="" border="0" className="left_bt" /></a> <a href="details.html" className="prod_details">details</a> </div>
          </div>)
    );
    
}