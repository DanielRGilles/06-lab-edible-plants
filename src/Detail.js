import React, { Component } from 'react';
import request from 'superagent';

export default class Detail extends Component {
    state = {
        plant: []
    }
    componentDidMount = async () => {
        await this.fetchData();
        console.log(this.state.plant)
    } 
    fetchData = async() => {
        const search = await request.get(`https://murmuring-everglades-86690.herokuapp.com/edible-plants/${this.props.match.params.id}`)
        this.setState({ plant: search.body });
      }
    render() {
        return (
            <>    
           <li className='li-plant'key={this.state.plant.id}>{this.state.plant.name}<div>{this.state.plant.plantId}</div>
           <img className='plant-image'src={this.state.plant.imageurl} alt='plants'></img>
           <p className='item-description'>{this.state.plant.description}</p></li>
       
            </>
        )
    }
}
