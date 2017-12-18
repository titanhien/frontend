'use strict'
const path = require('path')

global.rootDirectory = path.normalize(path.join(__dirname, '..'))
global.fileServeRoot = path.join(rootDirectory, 'public')

const appConfig = require(rootDirectory + '/config')
module.exports = require(`./webpack.${appConfig.env}.js`)