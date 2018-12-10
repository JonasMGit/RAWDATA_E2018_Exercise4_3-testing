define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {

    return function (params) {

        var currentPost = ko.observable();
        var currentPost = ko.observable();
        var currentComponent = ko.observable("post");
        var hasAnswers = ko.observable(false);
        var curLink = params.link;
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
            ds.getPost(url , function (data) {
                $.getJSON(data.answers, function (answers) {
                    hasAnswers(answers && answers.length > 0);
                    data.answers = answers;
                    currentPost(data)

                });
            });
        }

        getPost(curLink);


        //var postLink = function (som) {
        //    curLink(som);
        //}

        


        //getPost(curUrl());

        var back = function () {
            ds.getPosts("api/posts");
            postman.publish("selectedComponent", { item: "post-list", params: {} });

        };



        return {
            getPost,
            //curLink,
            //postLink,
            currentPost,
            hasAnswers,
            back,
            currentComponent



        };
    };
});