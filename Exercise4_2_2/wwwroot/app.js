(function () {

    var model = {
        searchString: ko.observable(""),
        data: ko.observableArray([]),
        view: ko.observable("default")
    };

    model.show = function (data) {
        model.searchString(data.login);
        model.search();
    };

    model.search = function() {
        model.data([]);
        $.getJSON("https://api.github.com/users/" + model.searchString() + "/repos")
            .done(function(data) {
                model.view("repos");
                model.data(data);
            })
            .fail(function() {
                $.getJSON("https://api.github.com/search/users?q=" + model.searchString(),
                    function(data) {
                        model.view("users");
                        model.data(data.items);
                    });
            });
    };

    ko.applyBindings(model);


})();