if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: [
      { text: "This is task 1" },
      { text: "This is task 2" },
      { text: "This is task 3" }
    ]
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
      //var app = require(myMain);
    // code to run on server at startup
  });
}
