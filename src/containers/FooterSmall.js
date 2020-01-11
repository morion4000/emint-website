import React, { Component } from 'react';


class FooterSmall extends Component {
  render() {
    return (
      <footer className="footer-short">
       <div className="container">
         <hr />
         <nav className="row justify-content-between align-items-center">
           <div className="col-auto">
             <ul className="list-inline">
               <li className="list-inline-item">
                 <a href="#">
                   <img src="assets/img/logo_black_square.png" height="30" />
                 </a>
               </li>
             </ul>
           </div>
         </nav>
         <div className="row">
           <div className="col">
             <small>&copy; 2020 Emint</small>
           </div>
         </div>
       </div>
     </footer>
   );
 }
}

export default FooterSmall;
