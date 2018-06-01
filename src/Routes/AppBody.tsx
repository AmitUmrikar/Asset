import * as React from 'react';
import { Route , Switch } from 'react-router-dom';
import Contact from '../Components/Contact';
// tslint:disable-next-line:ordered-imports
import About from '../Components/About';
import Asset from '../Components/Asset';

class AppBody extends React.Component {  
  public  render() {
        return(
        <Switch>
          <Route exact={true} path="/Contact" component={Contact}/>
          <Route exact={true} path="/About" component={About}/>
          <Route  path="/Asset/:AssetId" component={Asset}/>
          <Route  path="/Asset" component={Asset}/>
        </Switch>
      );
  }
}
export default AppBody;