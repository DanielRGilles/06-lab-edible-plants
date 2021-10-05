import React, { Component } from 'react';
import { createPlant } from './utils-fetch.js';
import { getCategories } from './utils-fetch.js';

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
        this.setState({categories:categoryRetrieval})
        
    } 

    handleSubmit = async (e) => {
        e.preventDefault();
      
        
        await createPlant({
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

    render() {
        console.log(this.state)
        return (
            <div className='form-cnt'>
                <form className='form-create' onSubmit={this.handleSubmit}>
                    <label>Scientific Name<input onChange={(e) => this.setState({plantid: e.target.value})} /></label>

                    <label>Common Name <input onChange={(e) => this.setState({name: e.target.value})} /></label>

                    <label>
                       Category <select onChange={(e) => this.setState({category: e.target.value})} >
                       {this.state.categories.map(categor => 
                                <option key={`${categor.category_name}-${categor.id}`} value={categor.id}>
                                    {categor.category_name}
                                </option>)}
                        </select>
                    </label>
                    <label>
                       Growing Zone Number <input onChange={(e) => this.setState({growzonenumber: e.target.value})} />
                    </label>
                    <label>
                        Watering Interval <input onChange={(e) => this.setState({wateringinterval: e.target.value})} />
                    </label>
                    <label>
                        Image<input onChange={(e) => this.setState({imageurl: e.target.value})} />
                    </label>
                    <label>
                       Description <textarea onChange={(e) => this.setState({description: e.target.value})} />
                    </label>

                <button>Submit</button>
                </form>
            </div>
        )
    }
}
