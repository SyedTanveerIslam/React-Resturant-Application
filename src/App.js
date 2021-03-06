//import logo from './logo.svg';
import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
//import Menu from './components/MenuComponent';
//import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
