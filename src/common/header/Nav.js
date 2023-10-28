import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav style={{}}>
        <ul style={{display:'flex', listStyle:'none'}}>
            {/* <li style={{padding:'5px 10px', margin:'0 10px'}}><a href='#' style={{textDecoration:'none'}}>Home</a></li> */}
            <li style={{padding:'5px 10px', margin:'0 10px'}}><Link to='/' style={{textDecoration:'none'}}>Home</Link></li>
            <li style={{padding:'5px 10px', margin:'0 10px'}}><a href='#about' style={{textDecoration:'none'}}>About</a></li>
            <li style={{padding:'5px 10px', margin:'0 10px'}}><a href='#special' style={{textDecoration:'none'}}>Menu</a></li>
            <li style={{padding:'5px 10px', margin:'0 10px'}}><Link to='/reservation' style={{textDecoration:'none'}}>Reservations</Link></li>
            <li style={{padding:'5px 10px', margin:'0 10px'}}><a href='#' style={{textDecoration:'none'}}>Order Online</a></li>
            <li style={{padding:'5px 10px', margin:'0 10px'}}><a href='#' style={{textDecoration:'none'}}>Login</a></li>
        </ul>
    </nav>
  )
}
