import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Nav/>
        <section>
            <Outlet/>
        </section>
    </div>
  )
}

export default Main