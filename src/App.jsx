import React from "react";
import Nav from "./Component/Nav";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Gallery from "./Component/Gallery";
import Noida from "./Component/Noida";
import Banglore from "./Component/Banglore";
import Gurugram from "./Component/Gurugram";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Router>
        <Nav />
        <section>
          <Routes>
            <Route path="" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="gallery" element={<Gallery />}/>
            <Route path="contact" element={<Contact />}>
              <Route path="" element={<Noida/>}></Route>
              <Route path="noida" element={<Noida/>}></Route>
              <Route path="banglore" element={<Banglore/>}></Route>
              <Route path="gurugram" element={<Gurugram/>}></Route>
            </Route>
          </Routes>
        </section>
      </Router>
    </main>
  )
}

export default App;
