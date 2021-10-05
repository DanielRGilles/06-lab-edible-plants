import React, { Component } from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import request from 'superagent';
export default class Plants extends Component {
  state = {
    plant: []
  }
  componentDidMount = async () => {
    await this.fetchData();
    console.log(this.state.plant)
} 
fetchData = async() => {
  const search = await request.get(`https://murmuring-everglades-86690.herokuapp.com/edible-plants`)
  this.setState({ plant: search.body });
}
  render() {
    return (
      <ul>
       { this.state.plant.map(plantee => { return( 
           <li className='li-plant'key={plantee.id}>{plantee.name}<div>{plantee.plantId}</div>
           <Link to={`/Edit/${plantee.id}`}><img className='plant-image'src={plantee.imageurl} alt='plants'></img></Link>
           <p className='item-description'>{plantee.description}</p></li>
       ) }) }
      </ul>
    )
  }
}
