define(['jquery', 'knockout'], function($, ko) {

    var hasAnswers = ko.observable(false);

  var getPosts = function (url, callback){
        url = url === undefined ? "api/posts" : url;
        $.getJSON(url, callback);
    };

    //var getPost = function (url, callback) {
    //    $.getJSON(url, function (data) {
    //        $.getJSON(data.answers, callback);// {
    //            //hasAnswers(answers && answers.length > 0);
    //            //data.answers = answers;
                
    //       // });
    //    });
    //};
    //var getPost = function (url, callback) {
    //    $.getJSON(url, function (data) {
    //        $.getJSON(data.answers, function (answers) {
    //            hasAnswers(answers && answers.length > 0);
    //            data.answers = answers;
    //        });
    //    });
    //};

    var getPost = function (url, callback) {
        $.getJSON(url, callback);
    };

    //var getPost = function (url, callback) {
    //    $.getJSON(url, data => {
    //        var post = {
    //            title: data.title,
    //            score: data.score,
    //            creationDate: data.creationDate,
    //            body: data.body
    //        }

    //        $.getJSON(data.answers, ans => {
    //            post.answers = ko.observableArray(ans);
    //            callback(post);
    //        });
    //    });
    //};
 

 return {
        getPosts,
       getPost
    };

});