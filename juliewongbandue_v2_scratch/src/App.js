import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Landing from './components/landing.js';
import Navigation from './components/navigation.js';
import style from "./styles/Global.css";

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      section: 'home',
      height: '',
      width: ''
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  
  render(){
    console.log(this.state)
    return(
      <div className={style.App}>
        <Landing 
          section={this.state.section}/>
      </div>
    );
  }
}

export default hot(module)(App);