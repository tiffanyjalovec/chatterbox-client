var Messages = {
  //add function
  //update function
//items: function () {
  //return _.chain(Messages._data)
//}
//add conform

  _storage: {},
  message: [],

  load: function (data) {
    // console.log('results ' , data.results);
    // console.log('data ' , data);
    // load the data via function prop
    // store messages data --> data.results
    storage = data.results;
    // console.log(storage);
    // access username and text
    // console.log(typeof storage);

    // storage.map(function(msg) {
    //   //  return those props --> message
    //   message.push(msg.username, msg.text);
    // });

    // console.log(storage.results);


    //for message object in data

    MessagesView.render(storage);
  },


};