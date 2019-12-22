var Rooms = {
  _data: new Set,

  selected: 'lobby',

  isSelected: function(roomname) {

  }

  update: function(messages) {
    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));
  }

};