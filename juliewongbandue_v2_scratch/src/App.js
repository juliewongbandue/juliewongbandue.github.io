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
      width: '',
      transform: ''
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.handleScroll);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  handleScroll() {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      transform: itemTranslate
    })
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