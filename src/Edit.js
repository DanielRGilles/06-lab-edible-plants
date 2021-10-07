import React, { Component } from 'react';
import { deletePlant, editPlant, getEdiblePlant } from './utils-fetch.js';
import { getCategories } from './utils-fetch.js';
import './App.css';

export default class Create extends Component {
    state = {
        plantid: '',
        name: '',
        category: 1,
        categories: [],
        growzonenumber: '',
        wateringinterval: '',
        imageurl: '',
        description: '',
        edible: true

    };

    componentDidMount = async () => {
        const categoryRetrieval = await getCategories();
        const specificPlant = await getEdiblePlant(this.props.match.params.id)
        this.setState({categories:categoryRetrieval, ...specificPlant})
        
    } 

    handleSubmit = async (e) => {
        e.preventDefault();
      
        
        await editPlant(this.props.match.params.id,{
            plantid: this.state.plantid,
            name: this.state.name,
            category: this.state.category,
            growzonenumber: this.state.growzonenumber,
            wateringinterval: this.state.wateringinterval,
            imageurl: this.state.imageurl,
            description: this.state.description,
            edible: this.state.edible
        })
        this.props.history.push('/Plants')
    
    }
    handleDelete = async e => {
        await deletePlant(this.props.match.params.id)
        this.props.history.push('/Plants')
    }

    render() {
        console.log(this.state)
        return (
            <div className='form-cnt'>
                <form className='form-create' onSubmit={this.handleSubmit}>
                    <label>Scientific Name<input onChange={(e) => this.setState({plantid: e.target.value})} value={this.state.plantid}/></label>

                    <label>Common Name <input onChange={(e) => this.setState({name: e.target.value})} value={this.state.name}/></label>

                    <label>
                       Category <select onChange={(e) => this.setState({category: e.target.value})} >
                       {this.state.categories.map(categor => 
                                <option key={`${categor.category_name}-${categor.id}`} value={categor.id} >
                                    {categor.category_name}
                                </option>)}
                        </select>
                    </label>
                    <label>
                       Growing Zone Number <input onChange={(e) => this.setState({growzonenumber: e.target.value})} value={this.state.growzonenumber}/>
                    </label>
                    <label>
                        Watering Interval <input onChange={(e) => this.setState({wateringinterval: e.target.value})} 
                        value={this.state.wateringinterval}/>
                    </label>
                    <label>
                        Image<input onChange={(e) => this.setState({imageurl: e.target.value})} value={this.state.imageurl}/>
                    </label>
                    <label>
                       Description <textarea type='text' className='descript' onChange={(e) => this.setState({description: e.target.value})} value={this.state.description}/>
                    </label>

                <button>Submit Changes</button>
                </form>
                <button className='delete-btn' onClick={this.handleDelete}>Delete Item</button>
            </div>
        )
    }
}

