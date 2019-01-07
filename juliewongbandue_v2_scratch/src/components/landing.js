import React, { Component } from 'react'
import Navigation from './navigation.js';
import style from '../styles/landing.css'

export default class Landing extends Component {
    render() {
        return(
            <div className={style.wrapper}>
                <div className={style.container}>
                <Navigation/>
                </div>
            </div>
        )
    }
}