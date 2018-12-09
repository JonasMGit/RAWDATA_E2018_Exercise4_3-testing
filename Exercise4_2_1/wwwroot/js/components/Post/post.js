define(['knockout', 'dataService'], function (ko, ds) {

    return function (params) {

        var currentPost = ko.observable();
        var items = "post"
        var currentComponent = ko.observable("post");
        var hasAnswers = ko.observable(false);
        var curUrl = "";
        var currentPost = ko.observable();
        //var getPost = function(url) {
        //    $.getJSON(url, function (data) {
        //        $.getJSON(data.answers, function (answers) {
        //            hasAnswers(answers && answers.length > 0);
        //            data.answers = answers;
        //            currentPost(data)

        //        });
        //    });
        //};
        var getPost = function (url) {
        ds.getPost(url, function (data) {
            $.getJSON(data.answers, function (answers) {
                hasAnswers(answers && answers.length > 0);
                data.answers = answers;
                currentPost(data)

            });
        });
        }

        var back = function () {
            ds.getPosts("http://localhost:1891/api/posts?page=1&pageSize=10");
            currentComponent("post-list")
        };
        getPost("http://localhost:1891/api/posts/1053");
        //getPost();
        return {
            getPost,
            items,
            currentPost,
            hasAnswers,
           // getPost,
            //showPost,
            back,
            currentComponent,
            

        };
    };
});