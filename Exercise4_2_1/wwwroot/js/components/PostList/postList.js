define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {

    return function (params) {
        var posts = ko.observableArray([]);
        var currentComponent = ko.observable("post")
        var canPrev = ko.observable(false);
        var prevUrl = "";
        var canNext = ko.observable(false);
        var nextUrl = "";



        var getPosts = function (url) {

            ds.getPosts(url, function (data) {
                curUrl = data.cur;
                prevUrl = data.prev;
                canPrev(false);
                data.prev !== null && canPrev(true);
                nextUrl = data.next;
                canNext(false);
                data.next !== null && canNext(true);
                posts(data.items);
            });
        };

        var next = function () {
            getPosts(nextUrl);
        };

        var prev = function () {
            getPosts(prevUrl);
        };

        var showPost = function (post) {
            
            postman.publish("selectedComponent", { item: "post", params: { link: post.link } });

            //currentComponent("post");
            //ds.getPost(post.link);
            //answers
        };

        getPosts();

        return {
            posts,
            prev,
            canPrev,
            next,
            canNext,


           // selectComponent,
            showPost,
            currentComponent


        };

    };

});