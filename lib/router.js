Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('allData');}
});

Router.route('/', {name: 'homePage'});
Router.route('/recruit', {name: 'recruit'});
Router.route('/introduction', {name: 'introduction'});
Router.route('/members', {name: 'members'});
Router.route('/records', {name: 'records'});
Router.route('/integrals', {name: 'integrals'});
Router.route('/login', {name: 'login'});
