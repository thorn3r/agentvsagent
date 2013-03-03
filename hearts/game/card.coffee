Suit = require("./suit")
Rank = require("./rank")

module.exports = class Card
  @all: ->
    # Just use the Thrift types?
    cards = []
    for suit in Suit.all()
      for rank in Rank.all()
        cards.push new Card(suit, rank)
    cards

  constructor: (@suit, @rank) ->
