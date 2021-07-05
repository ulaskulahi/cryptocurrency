import React,{useState} from 'react'
import './Navbar.css'
import SidebarData from './SidebarData'
import { Link } from 'react-router-dom'
import Logo from './assets/cryptoLogo.png'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Navbar(){

    const [sidebar , setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    // const navStyle = {
    //     color:'#797979',
    //     textDecoration:'none'
    // }
    return(
        <>
            <div className="nav-wrapper">
            
                <Link to="/">
                    <img className="logo" src={Logo} alt="logo" />
                </Link>

                <ul className="list-links">
                    <Link className="link"  to="/about">
                        <li className="link">About</li>
                    </Link>
                    
                    <Link className="link" to="/history">
                        <li className="link">History</li>
                    </Link>
                    <Link className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items'>
                            <li className="navbar-toggle">
                                <Link to='#' onClick={showSidebar} className='outline-close'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {
                                SidebarData.map((item,index) =>{
                                    return(
                                        <div key= {index} className={item.name}>
                                        <Link onClick={showSidebar} to={item.path}>
                                            <span>{item.title}</span>
                                        </Link>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </ul>
            </div>  
        </>
    )

}







export default Navbar