Game = require './game'

#TODO: Remove me

module.exports = class HeartsBuilder
  constructor: (@gameOptions={}) ->
    @numberOfPlayers = Game.positions().length
    @Game = Game

  positions: ->
    @Game.positions()

  createGame: ->
    new @Game({heartsMaxPoints: @gameOptions.heartsMaxPoints})

