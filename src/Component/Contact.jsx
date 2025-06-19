import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h2>Contact Us</h2>
        <section className='container'>
            <div className='sidebar'>
              <li><Link to=''></Link></li>
                <li><Link to='noida'>Noida</Link></li>
                <li><Link to='gurugram'>Gurugram</Link></li>
                <li><Link to='banglore'>Banglore</Link></li>
            </div>
            <div className='content'>
                <Outlet/>
            </div>
        </section>
    </div>
  )
}

export default Contact