import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'


const Header = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className='Navbar container'>
        <p>Cart Project</p>
        <ul className='ullist'>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart - {items.length}</Link></li>
            {/* <li>Cart</li>
            <li>Home</li> */}
        </ul>
    </div>
  )
}

export default Header