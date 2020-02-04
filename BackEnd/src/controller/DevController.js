const axios = require('axios')
const Dev = require('../models/Dev')
const parse = require('../utils/parseStringAsArray')

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body
        let dev = await Dev.findOne({github_username})
        if (!dev){
            
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)
            const { name = login, bio, avatar_url } = apiResponse.data
            const techsArray = parse(techs)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            } 
            
            dev = await Dev.create({
                name,
                github_username,
                bio,
                avatar_url,
                techs: techsArray,
                location
            })
        }
        return response.json(dev)
    },

    async index(request, response){
        const dev = await Dev.find()
        return response.json(dev)
    }
}