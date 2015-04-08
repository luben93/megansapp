if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      arr=['jag älskar dig Megan',
      'i love you Megan',
      '<3',
      'du är mitt livs kärlek',
      'mitt hjärta slår för dig']
      return arr[Session.get('counter')];
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      

      Session.set('counter',Math.floor((Math.random() * 5)));
      
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
