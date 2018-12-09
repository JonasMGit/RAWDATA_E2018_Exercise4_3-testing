
require.config({
    baseUrl: "js",
    paths: {
        jquery: "lib/jQuery/dist/jquery.min",
        knockout: "lib/knockout/dist/knockout.debug",
        dataService: "services/ds",
        text: "lib/text/text",
        postman: 'services/postman'

    }
});

require(['knockout'], function (ko) {
    ko.components.register("post-list",
        {
            viewModel: { require: 'components/PostList/postList'},
            template: { require: 'text!components/PostList/postListView.html'}
        });

    ko.components.register("post",
        {
            viewModel: { require: 'components/Post/post' },
            template: { require: 'text!components/Post/postView.html' }
        });

});

require(['knockout', 'app/posts'], function(ko, postVm) {
    ko.applyBindings(postVm);
});
