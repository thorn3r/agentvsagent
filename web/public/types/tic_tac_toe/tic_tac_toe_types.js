//
// Autogenerated by Thrift Compiler (0.9.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

if (typeof AgentVsAgent === 'undefined') {
  AgentVsAgent = {};
}
AgentVsAgent.Position = {
'X' : 1,
'O' : 2
};
AgentVsAgent.GameStatus = {
'NEXT_MOVE' : 1,
'END_GAME' : 2
};
AgentVsAgent.Move = function(args) {
  this.boardRow = null;
  this.boardCol = null;
  this.squareRow = null;
  this.squareCol = null;
  if (args) {
    if (args.boardRow !== undefined) {
      this.boardRow = args.boardRow;
    }
    if (args.boardCol !== undefined) {
      this.boardCol = args.boardCol;
    }
    if (args.squareRow !== undefined) {
      this.squareRow = args.squareRow;
    }
    if (args.squareCol !== undefined) {
      this.squareCol = args.squareCol;
    }
  }
};
AgentVsAgent.Move.prototype = {};
AgentVsAgent.Move.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.boardRow = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.boardCol = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.squareRow = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.squareCol = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentVsAgent.Move.prototype.write = function(output) {
  output.writeStructBegin('Move');
  if (this.boardRow !== null && this.boardRow !== undefined) {
    output.writeFieldBegin('boardRow', Thrift.Type.I32, 1);
    output.writeI32(this.boardRow);
    output.writeFieldEnd();
  }
  if (this.boardCol !== null && this.boardCol !== undefined) {
    output.writeFieldBegin('boardCol', Thrift.Type.I32, 2);
    output.writeI32(this.boardCol);
    output.writeFieldEnd();
  }
  if (this.squareRow !== null && this.squareRow !== undefined) {
    output.writeFieldBegin('squareRow', Thrift.Type.I32, 3);
    output.writeI32(this.squareRow);
    output.writeFieldEnd();
  }
  if (this.squareCol !== null && this.squareCol !== undefined) {
    output.writeFieldBegin('squareCol', Thrift.Type.I32, 4);
    output.writeI32(this.squareCol);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AgentVsAgent.EntryRequest = function(args) {
  this.version = '0.0.11';
  if (args) {
    if (args.version !== undefined) {
      this.version = args.version;
    }
  }
};
AgentVsAgent.EntryRequest.prototype = {};
AgentVsAgent.EntryRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.version = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentVsAgent.EntryRequest.prototype.write = function(output) {
  output.writeStructBegin('EntryRequest');
  if (this.version !== null && this.version !== undefined) {
    output.writeFieldBegin('version', Thrift.Type.STRING, 1);
    output.writeString(this.version);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AgentVsAgent.Ticket = function(args) {
  this.agentId = null;
  if (args) {
    if (args.agentId !== undefined) {
      this.agentId = args.agentId;
    }
  }
};
AgentVsAgent.Ticket.prototype = {};
AgentVsAgent.Ticket.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.agentId = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentVsAgent.Ticket.prototype.write = function(output) {
  output.writeStructBegin('Ticket');
  if (this.agentId !== null && this.agentId !== undefined) {
    output.writeFieldBegin('agentId', Thrift.Type.STRING, 1);
    output.writeString(this.agentId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AgentVsAgent.EntryResponse = function(args) {
  this.ticket = null;
  this.message = null;
  if (args) {
    if (args.ticket !== undefined) {
      this.ticket = args.ticket;
    }
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
AgentVsAgent.EntryResponse.prototype = {};
AgentVsAgent.EntryResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ticket = new AgentVsAgent.Ticket();
        this.ticket.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentVsAgent.EntryResponse.prototype.write = function(output) {
  output.writeStructBegin('EntryResponse');
  if (this.ticket !== null && this.ticket !== undefined) {
    output.writeFieldBegin('ticket', Thrift.Type.STRUCT, 1);
    this.ticket.write(output);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AgentVsAgent.GameInfo = function(args) {
  this.position = null;
  this.opponents_move = null;
  if (args) {
    if (args.position !== undefined) {
      this.position = args.position;
    }
    if (args.opponents_move !== undefined) {
      this.opponents_move = args.opponents_move;
    }
  }
};
AgentVsAgent.GameInfo.prototype = {};
AgentVsAgent.GameInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.position = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.opponents_move = new AgentVsAgent.Move();
        this.opponents_move.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentVsAgent.GameInfo.prototype.write = function(output) {
  output.writeStructBegin('GameInfo');
  if (this.position !== null && this.position !== undefined) {
    output.writeFieldBegin('position', Thrift.Type.I32, 1);
    output.writeI32(this.position);
    output.writeFieldEnd();
  }
  if (this.opponents_move !== null && this.opponents_move !== undefined) {
    output.writeFieldBegin('opponents_move', Thrift.Type.STRUCT, 2);
    this.opponents_move.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AgentVsAgent.GameResult = function(args) {
  this.winner = null;
  if (args) {
    if (args.winner !== undefined) {
      this.winner = args.winner;
    }
  }
};
AgentVsAgent.GameResult.prototype = {};
AgentVsAgent.GameResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.winner = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentVsAgent.GameResult.prototype.write = function(output) {
  output.writeStructBegin('GameResult');
  if (this.winner !== null && this.winner !== undefined) {
    output.writeFieldBegin('winner', Thrift.Type.I32, 1);
    output.writeI32(this.winner);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AgentVsAgent.MoveResult = function(args) {
  this.opponents_move = null;
  this.status = null;
  if (args) {
    if (args.opponents_move !== undefined) {
      this.opponents_move = args.opponents_move;
    }
    if (args.status !== undefined) {
      this.status = args.status;
    }
  }
};
AgentVsAgent.MoveResult.prototype = {};
AgentVsAgent.MoveResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.opponents_move = new AgentVsAgent.Move();
        this.opponents_move.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.status = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentVsAgent.MoveResult.prototype.write = function(output) {
  output.writeStructBegin('MoveResult');
  if (this.opponents_move !== null && this.opponents_move !== undefined) {
    output.writeFieldBegin('opponents_move', Thrift.Type.STRUCT, 1);
    this.opponents_move.write(output);
    output.writeFieldEnd();
  }
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.I32, 2);
    output.writeI32(this.status);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AgentVsAgent.GameAbortedException = function(args) {
  this.message = null;
  if (args) {
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(AgentVsAgent.GameAbortedException, Thrift.TException);
AgentVsAgent.GameAbortedException.prototype.name = 'GameAbortedException';
AgentVsAgent.GameAbortedException.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AgentVsAgent.GameAbortedException.prototype.write = function(output) {
  output.writeStructBegin('GameAbortedException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AgentVsAgent.CURRENT_VERSION = '0.0.11';
