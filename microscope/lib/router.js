// configure
Router.configure({
    layoutTemplate: "layout",
    loadingTemplate: "loading",
    notFoundTemplate: "notFound",
    waitOn: function() { return Meteor.subscribe("posts"); }
});

// route
Router.route("/", {name: "postsList"});

Router.route("/posts/:_id", {
    name: "postPage",
    data: function() { return Posts.findOne(this.params._id); }
});

Router.route("/submit", {name: "postSubmit"});

// onBeforeAction
var requireLogin = function() {
    if (!Meteor.user()) {
        this.render("accessDenied");
    } else {
        this.next();
    }
}

Router.onBeforeAction("dataNotFound", {only: "postPage"});
Router.onBeforeAction(requireLogin, {only: "postSubmit"});   