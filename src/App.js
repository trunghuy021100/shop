
import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavBar from './Component/Navbar'
import Home from './page/Home';
import Product from './page/Product'
import Detail from './Component/Detail'
import Cart from './Component/Cart'
import Quanli from './Component/Quanli'
import Footer from './Component/Footer'

const App = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/"><Home></Home></Route>
       
        <Route path="/product"><Product></Product></Route>
        <Route path="/chitiet/:id"><Detail></Detail></Route>
        <Route path="/cart"><Cart></Cart></Route>
  
        <Route></Route>
        
      </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default App

