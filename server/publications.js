Meteor.publish('allData', function() {
    return Data.find();
})
