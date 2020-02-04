const mongoose = require('mongoose')
const PointSchema = require('./utils/PointSchema')

const devSchema = new mongoose.Schema({
    name: 'string',
    github_username: 'string',
    bio: 'string',
    avatar_url: 'string',
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    } 
})

module.exports = mongoose.model('Dev', devSchema) 