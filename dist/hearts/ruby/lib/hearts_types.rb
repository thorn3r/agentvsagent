#
# Autogenerated by Thrift Compiler (0.9.0)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#

require 'thrift'

module AgentVsAgent
  module Suit
    CLUBS = 21
    DIAMONDS = 22
    SPADES = 23
    HEARTS = 24
    VALUE_MAP = {21 => "CLUBS", 22 => "DIAMONDS", 23 => "SPADES", 24 => "HEARTS"}
    VALID_VALUES = Set.new([CLUBS, DIAMONDS, SPADES, HEARTS]).freeze
  end

  module Rank
    ACE = 1
    TWO = 2
    THREE = 3
    FOUR = 4
    FIVE = 5
    SIX = 6
    SEVEN = 7
    EIGHT = 8
    NINE = 9
    TEN = 10
    JACK = 11
    QUEEN = 12
    KING = 13
    VALUE_MAP = {1 => "ACE", 2 => "TWO", 3 => "THREE", 4 => "FOUR", 5 => "FIVE", 6 => "SIX", 7 => "SEVEN", 8 => "EIGHT", 9 => "NINE", 10 => "TEN", 11 => "JACK", 12 => "QUEEN", 13 => "KING"}
    VALID_VALUES = Set.new([ACE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, JACK, QUEEN, KING]).freeze
  end

  module Position
    NORTH = 1
    EAST = 2
    SOUTH = 3
    WEST = 4
    VALUE_MAP = {1 => "NORTH", 2 => "EAST", 3 => "SOUTH", 4 => "WEST"}
    VALID_VALUES = Set.new([NORTH, EAST, SOUTH, WEST]).freeze
  end

  module GameStatus
    NEXT_ROUND = 1
    END_GAME = 2
    VALUE_MAP = {1 => "NEXT_ROUND", 2 => "END_GAME"}
    VALID_VALUES = Set.new([NEXT_ROUND, END_GAME]).freeze
  end

  class Card
    include ::Thrift::Struct, ::Thrift::Struct_Union
    SUIT = 1
    RANK = 2

    FIELDS = {
      SUIT => {:type => ::Thrift::Types::I32, :name => 'suit', :enum_class => ::AgentVsAgent::Suit},
      RANK => {:type => ::Thrift::Types::I32, :name => 'rank', :enum_class => ::AgentVsAgent::Rank}
    }

    def struct_fields; FIELDS; end

    def validate
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field suit is unset!') unless @suit
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field rank is unset!') unless @rank
      unless @suit.nil? || ::AgentVsAgent::Suit::VALID_VALUES.include?(@suit)
        raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Invalid value of field suit!')
      end
      unless @rank.nil? || ::AgentVsAgent::Rank::VALID_VALUES.include?(@rank)
        raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Invalid value of field rank!')
      end
    end

    ::Thrift::Struct.generate_accessors self
  end

  class Ticket
    include ::Thrift::Struct, ::Thrift::Struct_Union
    GAMEID = 1
    AGENTID = 2

    FIELDS = {
      GAMEID => {:type => ::Thrift::Types::STRING, :name => 'gameId'},
      AGENTID => {:type => ::Thrift::Types::STRING, :name => 'agentId'}
    }

    def struct_fields; FIELDS; end

    def validate
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field gameId is unset!') unless @gameId
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field agentId is unset!') unless @agentId
    end

    ::Thrift::Struct.generate_accessors self
  end

  class EntryResponse
    include ::Thrift::Struct, ::Thrift::Struct_Union
    TICKET = 1
    MESSAGE = 2

    FIELDS = {
      TICKET => {:type => ::Thrift::Types::STRUCT, :name => 'ticket', :class => ::AgentVsAgent::Ticket, :optional => true},
      MESSAGE => {:type => ::Thrift::Types::STRING, :name => 'message', :optional => true}
    }

    def struct_fields; FIELDS; end

    def validate
    end

    ::Thrift::Struct.generate_accessors self
  end

  class GameInfo
    include ::Thrift::Struct, ::Thrift::Struct_Union
    POSITION = 1

    FIELDS = {
      POSITION => {:type => ::Thrift::Types::I32, :name => 'position', :enum_class => ::AgentVsAgent::Position}
    }

    def struct_fields; FIELDS; end

    def validate
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field position is unset!') unless @position
      unless @position.nil? || ::AgentVsAgent::Position::VALID_VALUES.include?(@position)
        raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Invalid value of field position!')
      end
    end

    ::Thrift::Struct.generate_accessors self
  end

  class Trick
    include ::Thrift::Struct, ::Thrift::Struct_Union
    LEADER = 1
    PLAYED = 2

    FIELDS = {
      LEADER => {:type => ::Thrift::Types::I32, :name => 'leader', :enum_class => ::AgentVsAgent::Position},
      PLAYED => {:type => ::Thrift::Types::LIST, :name => 'played', :element => {:type => ::Thrift::Types::STRUCT, :class => ::AgentVsAgent::Card}}
    }

    def struct_fields; FIELDS; end

    def validate
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field leader is unset!') unless @leader
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field played is unset!') unless @played
      unless @leader.nil? || ::AgentVsAgent::Position::VALID_VALUES.include?(@leader)
        raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Invalid value of field leader!')
      end
    end

    ::Thrift::Struct.generate_accessors self
  end

  class RoundResult
    include ::Thrift::Struct, ::Thrift::Struct_Union
    NORTH = 1
    EAST = 2
    SOUTH = 3
    WEST = 4
    STATUS = 5

    FIELDS = {
      NORTH => {:type => ::Thrift::Types::I32, :name => 'north'},
      EAST => {:type => ::Thrift::Types::I32, :name => 'east'},
      SOUTH => {:type => ::Thrift::Types::I32, :name => 'south'},
      WEST => {:type => ::Thrift::Types::I32, :name => 'west'},
      STATUS => {:type => ::Thrift::Types::I32, :name => 'status', :enum_class => ::AgentVsAgent::GameStatus}
    }

    def struct_fields; FIELDS; end

    def validate
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field north is unset!') unless @north
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field east is unset!') unless @east
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field south is unset!') unless @south
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field west is unset!') unless @west
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field status is unset!') unless @status
      unless @status.nil? || ::AgentVsAgent::GameStatus::VALID_VALUES.include?(@status)
        raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Invalid value of field status!')
      end
    end

    ::Thrift::Struct.generate_accessors self
  end

  class GameResult
    include ::Thrift::Struct, ::Thrift::Struct_Union
    NORTH = 1
    EAST = 2
    SOUTH = 3
    WEST = 4

    FIELDS = {
      NORTH => {:type => ::Thrift::Types::I32, :name => 'north'},
      EAST => {:type => ::Thrift::Types::I32, :name => 'east'},
      SOUTH => {:type => ::Thrift::Types::I32, :name => 'south'},
      WEST => {:type => ::Thrift::Types::I32, :name => 'west'}
    }

    def struct_fields; FIELDS; end

    def validate
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field north is unset!') unless @north
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field east is unset!') unless @east
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field south is unset!') unless @south
      raise ::Thrift::ProtocolException.new(::Thrift::ProtocolException::UNKNOWN, 'Required field west is unset!') unless @west
    end

    ::Thrift::Struct.generate_accessors self
  end

end