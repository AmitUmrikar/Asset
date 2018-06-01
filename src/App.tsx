import * as React from 'react';
import './App.css';
import AppHeader  from './AppHeader';

import AppBody from './Routes/AppBody';
class App extends React.Component {
  public render() {
    return (
        <div>
          <h1 className="App-title">Welcome to React</h1>
        <AppHeader/>
        <AppBody/>
      </div>
    );
  }
}

export default App;
