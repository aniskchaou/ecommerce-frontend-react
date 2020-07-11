import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
            
            <div className="left_footer"> 
            <img src="images/footer_logo.png" alt="" width="170" height="49"/> 
            </div>

            <div className="center_footer"> Template name. All Rights Reserved 2008<br/>
              <a href="http://csscreme.com"><img src="images/csscreme.jpg" alt="csscreme" border="0"/></a><br/>
              <img src="images/payment.gif" alt=""/> 
            </div>
            
            <div className="right_footer">
             <a href="#">home</a> <a href="#">about</a>
              <a href="#">sitemap</a> <a href="#">rss</a> 
              <a href="contact.html">contact us</a>
               </div>
        </div>
           
        
    );
    }
}