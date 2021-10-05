import request from 'superagent';

export async function getEdiblePlants() {
    const response = await request.get('https://murmuring-everglades-86690.herokuapp.com/edible-plants')
    return response.body;
}
export async function getEdiblePlant(id) {
    const response = await request.get(`https://murmuring-everglades-86690.herokuapp.com/edible-plants/${id}`)
    return response.body;
}
export async function getCategories() {
    const response = await request.get('https://murmuring-everglades-86690.herokuapp.com/categories')
    return response.body;
}
export async function getCategory(id) {
    const response = await request.get(`https://murmuring-everglades-86690.herokuapp.com/categories/${id}`)
    return response.body;
}
export async function deletePlant(id) {
    const response = await request.delete(`https://murmuring-everglades-86690.herokuapp.com/categories/${id}`)
    return response.body;
}
export async function createPlant(ediblePlant) {
    const response = await request.post('https://murmuring-everglades-86690.herokuapp.com/edible-plants/')
    .send(ediblePlant)
    return response.body;
}
export async function editPlant(id, ediblePlant) {
    const response = await request.put(`https://murmuring-everglades-86690.herokuapp.com/categories/${id}`)
    .send(ediblePlant)
    return response.body;
}
