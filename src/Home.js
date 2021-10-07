import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='home-quote'>
                <h1>“Let food be thy medicine and medicine be thy food”</h1>
                <h2>-Hippocrates</h2>
                <img className='food' src='food.jfif' alt='a heart shaped veggie display' ></img>
            </div>
        )
    }
}
