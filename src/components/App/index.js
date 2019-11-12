import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


//styles
import './App.css'


// pages
import Products from '../../Pages/Products'
import ProductsDetails from '../../Pages/ProductsDetails'
import Purchases from '../../Pages/Purchases'
import Header from '../../components/Header'

//store
import store from '../../store';

class App extends React.Component{
  
  render(){
    return (
      <Provider store={ store }>
        <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/" component={ Products }/>
              <Route exact path="/product/:id" component={ ProductsDetails }/>
              <Route exact path="/purchases" component={ Purchases }/>
            </Switch>
          </Router>
      </Provider>    
    )
  }
}

export default App
