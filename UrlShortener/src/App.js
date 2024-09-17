import React from "react";
import "./assets/styles/pages/App.css";
import { Header, Banner, Footer, Shortener, Statistics, Booster } from "./components/sections";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Shortener />
      <Statistics />
      <Booster />
      <Footer />
    </div>
  );
}

export default App;
