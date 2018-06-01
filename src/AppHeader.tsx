import * as React from 'react';
import { Link } from 'react-router-dom';
import './css/AppHeader.css';
export default class AppHeader extends React.Component {
 public  render() {
      return (
          
          <div className="something">

              <div className="tiles1">
                <Link to="/Contact">Contact</Link>
              </div>
              <br/>
              <div className="tiles2">
                <Link to="/About">About</Link>  
              </div> 

               <br/>
              <div className="tiles3">
                <Link to="/Asset">Asset</Link>  
              </div> 


          </div>
      );
  }

} 