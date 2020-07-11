import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        return (
          <div>
            <div className="top_bar">
                <div className="top_search">
                    <div className="search_text"><a href="#">Advanced Search</a></div>
                    <input type="text" className="search_input" name="search" />
                    <input type="image" src="images/search.gif" className="search_bt" />
                </div>
                
            </div>

            <div id="menu_tab">
                <div className="left_menu_corner"></div>
                <ul className="menu">
                    <li><a href="#" className="nav1"> Home</a></li>
                    <li className="divider"></li>
                    <li><a href="#" className="nav2">Products</a></li>
                    <li className="divider"></li>
                    <li><a href="#" className="nav3">Specials</a></li>
                    <li className="divider"></li>
                    <li><a href="#" className="nav4">My account</a></li>
                    <li className="divider"></li>
                    <li><a href="#" className="nav4">Sign Up</a></li>
                    <li className="divider"></li>
                    <li><a href="#" className="nav5">Shipping</a></li>
                    <li className="divider"></li>
                    <li><a href="contact.html" className="nav6">Contact Us</a></li>
                    <li className="divider"></li>
                    <li className="currencies">Currencies
                         <select>
                            <option>US Dollar</option>
                            <option>Euro</option>
                        </select>
                    </li>
                </ul>
                <div className="right_menu_corner"></div>
            </div>
        </div>
        );
    }
}