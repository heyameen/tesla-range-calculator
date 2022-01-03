import './App.css';

import React, { Component } from 'react';

import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import TeslaCarContainer from './containers/TeslaCarContainer';
import TeslaClimateContainer from './containers/TeslaClimateContainer';
import TeslaNotice from './components/TeslaNotice/TeslaNotice';
import TeslaSpeedCounterContainer from './containers/TeslaSpeedCounterContainer';
import TeslaStatsContainer from './containers/TeslaStatsContainer';
import TeslaTempCounterContainer from './containers/TeslaTempCounterContainer';
import TeslaWheelsContainer from './containers/TeslaWheelsContainer';
import appReducer from './reducers/teslaRangeApp';
import { createStore } from 'redux';

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <Header />
        <div className="wrapper">
          <form className="tesla-battery">
            <h1><center>Range Per Charge</center></h1>
            <TeslaCarContainer />
            <TeslaStatsContainer />
            <div className="tesla-controls cf">
              <TeslaSpeedCounterContainer />
              <div className="tesla-climate-container cf">
                <TeslaTempCounterContainer />
                <TeslaClimateContainer />
              </div>
              <TeslaWheelsContainer />
            </div>   
            <TeslaNotice />
          </form>
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;