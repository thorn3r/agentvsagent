und = require 'underscore'
Card = require("./card")
CardPile = require "../cardPile"

module.exports = class Pile extends CardPile
  @createDeck: ->
    new Pile(Card.all())

  moveFirstCardToSlot: (slot, otherPile) ->
    otherPile.cards[slot] = @cards.shift()
