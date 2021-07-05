import React from 'react'
import timeLine from './assets/timeline.png'

import './History.css'


function History(){
    return(
        <div className="history">
            <img src={timeLine} alt="timeline" />
            <div className='history-wrapper'>
                <p>
                    In 1983, the American cryptographer David Chaum conceived an anonymous cryptographic electronic money called ecash. Later, in 1995, he implemented 
                    it through Digicash, an early form of cryptographic electronic payments which required user software in order 
                    to withdraw notes from a bank and designate specific encrypted keys before it can be sent to a recipient. This allowed the digital currency to be untraceable by the issuing bank, the government, or any third party.
                </p>
                <p>
                    In 1996, the National Security Agency published a paper entitled How to Make a Mint: the Cryptography of Anonymous Electronic Cash,
                     describing a Cryptocurrency system, first publishing it in an MIT mailing list and later in 1997, in The American Law Review 
                </p>    
                <p>
                    In 1998, Wei Dai published a description of "b-money", characterized as an anonymous, distributed electronic cash system. Shortly thereafter, Nick Szabo described bit gold. 
                    Like bitcoin and other cryptocurrencies that would follow it, bit gold (not to be confused with the later gold-based exchange,
                     BitGold) was described as an electronic currency system which required users to complete a proof of work function with solutions being cryptographically put together and published.
                </p>  
                <p>
                    In 2009, the first decentralized cryptocurrency, bitcoin, was created by presumably pseudonymous developer Satoshi Nakamoto. It used SHA-256, a cryptographic hash function, in its proof-of-work scheme.
                    In April 2011, Namecoin was created as an attempt at forming a decentralized DNS, which would make internet censorship very difficult. 
                    Soon after, in October 2011, Litecoin was released. It used scrypt as its hash function instead of SHA-256. Another notable cryptocurrency, Peercoin used a proof-of-work/proof-of-stake hybrid.
                </p>  
                <p>
                    On 6 August 2014, the UK announced its Treasury had been commissioned a study of cryptocurrencies, and what role, if any, they could play in the UK economy. The study was also to report on whether regulation should be considered. 
                </p>  
                <p>
                    In June 2021, El Salvador became the first country to accept Bitcoin as legal tender, after the Legislative Assembly had voted 62–22 to pass a bill submitted by President Nayib Bukele classifying the cryptocurrency as such.
                </p>  
        </div>
        </div>
        
    )
}
export default History