const Dev = require('../models/Dev')
const mongoose = require('mongoose')
const parseString = require('../utils/parseStringAsArray')

module.exports = {
    async index(request, response){
        const { latitude, longitude, techs } = request.query
        const techsArray = parseString(techs)
        const devs = await Dev.find({
            location:{
                $near:{
                    $geometry:{
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            },
            techs: {
                $in: techsArray
            }
        })

        console.log(techsArray)
        return response.json(devs)
    }
}