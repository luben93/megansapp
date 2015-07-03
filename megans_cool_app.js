if (Meteor.isClient) {

  var loves=new Array();

  Tasks = new Mongo.Collection("tasks");
  var topPosts = Tasks.find({}, {sort: {score: -1}});
  var count = 0;
  topPosts.forEach(function (post) {
    loves.push(post.text)
    //console.log("Title of post " + count + ": " + post.title);
    count += 1;
  });
  Session.setDefault('counter', 0);

  //------------------------------------------------------------
  // This code only runs on the client
  Template.body.helpers({
  tasks: function () {
    // Show newest tasks first
    return Tasks.find({}, {sort: {createdAt: -1}});
  }
  'click button': function () {
      // random the counter when button is clicked
      Session.set('counter',Math.floor((Math.random() * count)));
    }
});
  // Inside the if (Meteor.isClient) block, right after Template.body.helpers:
Template.body.events({
  "submit .new-task": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }

  
  
  counter: function () {
      return Tasks.find().skip(Session.get('counter')).limit(1)
     // return loves[Session.get('counter')];
    }
  
  });




if (Meteor.isServer) {
  Meteor.startup(function () {
      //var app = require(myMain);
    // code to run on server at startup
  });
}
