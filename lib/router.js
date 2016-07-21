Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('allData');}
});

Router.route('/', {name: 'homePage'})
