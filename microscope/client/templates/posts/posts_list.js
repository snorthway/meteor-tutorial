Template.postsList.helpers({
    postsWithRank: function() {
        // return Posts.find({}, {sort: {submitted: -1}});
        return this.posts.map(function(post, index, cursor) {
            post._rank = index;
            return post;
        });
    }
});