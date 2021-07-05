import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


import './App.css'
import Navbar from './Navbar'
import About from './About'
import History from './History'
import CurrencyDetails from './CurrencyDetails'



const BASE_URL = 'https://api.nomics.com/v1/currencies/ticker?key=5db2c43e1cd1d41799961d3171fc5d3ea28f2b85&interval=1d,30d&convert=USD&per-page=30&page=1'


function App() {

  // const [windowWidth , setWindowWidth] = useState(window.innerWidth)
  const [currency , setCurrency] = useState([])
  
  
  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(
        (currency) => {
        setCurrency(currency)
      })
  },[])
  
  const HomePage = () => {
    return(
      <>
        <div className="card-wrapper">
          {currency.map((currency) => (
                <div className="card">
                  <img key={currency.id} src={currency.logo_url} alt="logo" style={{width:"90px"}}/>
                  <div className= "currency-name-wrapper">{currency.name}</div>
                  <Link to={`/${currency.id}`}>
                    <div className="button-wrapper"><button className= "button-details" key="button "> See Details</button></div>
                  </Link>
                </div>
              )
            )
          }
        </div>
      </>
    )
  }

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about"  component={About} />
          <Route path="/history"  component={History} />
          <Route path="/:currency" currency = {currency} component={CurrencyDetails}/>
        </Switch>
      </Router>
      
    </>
  )
  
}

export default App;
