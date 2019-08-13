var facebookProfile = {
    name: "John",
    friends: 69,
    messages: ["Dank", "Meme", "KFC",],

  postMessage: function(message) {
    return facebookProfile.messages.push(message);
  },

  deleteMessage: function(index) {
    return facebookProfile.messages.splice(index, 1);
  },

  addFriend: function addFriend() {
    facebookProfile.friends += 1;
},
removeFriend: function removeFriend() {
    facebookProfile.friends -= 1;
},
}


//postMessage(message) - adds a new message string to the array
//deleteMessage(index) - removes the message corresponding to the index provided
//addFriend() - increases the friend count by 1
//removeFriend() - decreases the friend count by 1
