import React from 'react'
import { useState, useEffect } from 'react'

import './currencyDetails.css'



function CurrencyDetails({match} ){

    const [currencyRateAPI , setCurrencyRateAPI] = useState(null)
    // const [currencyRate , setCurrencyRate] = useState([])

    const [currency , setCurrency] = useState([])
  
    
     useEffect(() => {
        fetch('https://api.nomics.com/v1/currencies/ticker?key=5db2c43e1cd1d41799961d3171fc5d3ea28f2b85&interval=1d,30d&convert=USD&per-page=31&page=1')
        .then(response => response.json())
        .then(
            (currency) => {
            setCurrency(currency)
        })
    },[])
    
    useEffect(() => {
        fetchMyAPI()
    },[])

    const fetchMyAPI = async () => {
        let response = await fetch(`https://api.lunarcrush.com/v2?data=assets&key=s59cz5pcqbcqzpkoni417&symbol=${match.params.currency}`)
        response = await response.json()
        setCurrencyRateAPI(response)
        return 
    }

    
    if(currencyRateAPI && currency){

        let image = ""

        currency.forEach(currency => {
            if(match.params.currency === currency.id){
                image = currency.logo_url
            }
        })
        
        const name = currencyRateAPI.data[0].name
        const price = currencyRateAPI.data[0].price.toString().substring(0,8)
        const socialDominance = currencyRateAPI.data[0].social_dominance.toString().substring(0,4)
        const marketDominance = currencyRateAPI.data[0].market_dominance.toString().substring(0,4)
        const symbol = currencyRateAPI.data[0].symbol
        
        return(
            <div className="body">
                <div className="details-wrapper">
                    <img  src={image} alt="coin logo" />
                    <h1 className="details-name">{name}</h1>
                    <p>Price:</p>
                    <h1> ${price}</h1> 
                    <p>Social Media Dominance:</p>
                    <h1> %{socialDominance}</h1> 
                    <p>Market Dominance:</p>
                    <h1> %{marketDominance}</h1>
                    <p>Symbol:</p>
                    <h1> {symbol}</h1> 
                </div>
            </div>
        )
    }
    return(
        <div>

        </div>
    )
}
export default CurrencyDetails
