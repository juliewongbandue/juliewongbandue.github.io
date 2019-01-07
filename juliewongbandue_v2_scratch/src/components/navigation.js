import React, { Component } from 'react'
import style from '../styles/navigation.css'

export default class Navigation extends Component {
    render() {
        return(
            <div className={style.wrapper}>
                <div>About</div>
                <div>Skills</div>
                <div>Projects</div>
                <div>Contact</div>
            </div>
        )
    }
}