import React, { Component} from "react";
import {hot} from "react-hot-loader";
import style from "./styles/App.css";

class App extends Component{
  render(){
    return(
      <div className={style.App}>
        <h1> Hello, World!</h1>
      </div>
    );
  }
}

export default hot(module)(App);