import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navigation from "./components/Navigation.js";
import Crsl from "./components/Carousel.js";
import ItemBuku from "./components/ItemBuku.jsx";
import Footer from "./components/Footer.js";
import Search from "./components/Search.jsx";



function App() {
  return (
        <div className="App">
        <Navigation /> 
        <Crsl />
        <Search />
        <ItemBuku />
        <Footer />
        
        

      </div>
 );
}

export default App;
