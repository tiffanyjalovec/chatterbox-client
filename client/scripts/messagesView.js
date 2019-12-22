var MessagesView = {

  $chats: $('#chats'),

  initialize: function () { },

  render: function (msg) {
    // var compiled = _.template(
    //   '<div>' + '<%= username %>' + '</div>' + '<div>' + '<%= text %>' + '</div>'
    // );
    // console.log(data);

    // var html = '';

    // for (var i = 0; i < msg.length; i++) {
    //   html += compiled(msg[i]);
    // }
    // console.log(html);
    // $('#chats').append(html);

    //msg.forEach(el => MessagesView.$chats.append(MessagesView.render(el)));

    //try this
    msg.forEach(el => MessageView.$chats.append(MessageView.render(el)));

    //Messages.items().each((message) => {
      //var $message = MessageView.render(message);
      //MessagesView.$chats.append($message);
      //});
    }

    //
  }

};

// array.forEach(el => someAction)
// looping through storage.results [via Messages.js]
// every el --> [obj[render[function[el]]]]
// append to $chats
