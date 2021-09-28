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
  const search = await request.get(`https://quiet-ocean-88903.herokuapp.com/edible-plants/`)
  this.setState({ plant: search.body });
}
  render() {
    return (
      <ul>
       { this.state.plant.map(plantee => { return( 
           <li className='li-plant'key={plantee.id}>{plantee.name}<div>{plantee.plantId}</div>
           <Link to={`/Detail/${plantee.id}`}><img className='plant-image'src={plantee.imageUrl} alt='plants'></img></Link>
           <p className='item-description'>{plantee.description}</p></li>
       ) }) }
      </ul>
    )
  }
}
