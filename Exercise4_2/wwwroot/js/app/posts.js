define(['jquery', 'knockout'], function($, ko) {

    var posts = ko.observableArray([]);
    var canPrev = ko.observable(false);
    var prevUrl = "";
    var curUrl = "";
    var canNext = ko.observable(false);
    var nextUrl = "";
    var currentView = ko.observable("posts");
    var currentPost = ko.observable();
    var hasAnswers = ko.observable(false);

    var getPost = function(url) {
        $.getJSON(url, function (data) {
            $.getJSON(data.answers, function (answers) {
                hasAnswers(answers && answers.length > 0);
                data.answers = answers;
                currentPost(data);
            });
        });
    };

    var showPost = function(post) {
        getPost(post.link);
        currentView("post");
    };

    var getPosts = function (url) {
        url = url === undefined ? "api/posts" : url;
        $.getJSON(url, function (data) {
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

    var next = function() {
        getPosts(nextUrl);
    };

    var prev = function() {
        getPosts(prevUrl);
    };

    var back = function() {
        getPosts(curUrl);
        currentView("posts");
    };

    getPosts();

    return {
        posts,
        prev,
        canPrev,
        next,
        canNext,
        currentView,
        currentPost,
        showPost,
        back,
        hasAnswers
    };
});