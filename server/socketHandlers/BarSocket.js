const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/servemedb')
const actions = require('../actionsConstants');
const moment = require('moment')
const Bar = require('../classes/Bar.js')()

//===============================================================
const action_map = {
    "0":Bar.beginOrderItem,
    "1":Bar.pickUpOrderItem
}
//===============================================================
//in this socket we want to recive the following
//input -> action
exports = module.exports = function(socket,io){
    socket.on('barServer', data => {
        console.log("in barServer")
        action_map[data.action](data,io)
    });
  } 
