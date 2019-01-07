import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Landing from './components/landing.js';
import style from "./styles/Global.css";
import { TweenLite, TimelineLite } from 'gsap'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      section: 'home',
      height: '',
      width: '',
      transform: ''
    }
    this.mountSection = null;
    this.animation = null;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateWindowDimensions);
    this.animation = new TimelineLite ({paused: true})
      .from(this.mountSection, 1, {y: 100, opacity: 0, ease:Sine.easeInOut})
      .play();
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
    let section
    switch (this.state.section){
      case 'home':

      break
      default:
        <Landing/>
      break
    }
    return(
      <div className={style.App} ref={div => this.mountSection = div}>
        <Landing/>
      </div>
    );
  }
}

export default hot(module)(App);