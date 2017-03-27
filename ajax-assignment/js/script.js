function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var streetstr = $("#street").val();
    var citystr = $("#city").val();
    var address = streetstr + ' ' + citystr;
    $greeting.text('So, you want to live at ' + address + '?');
    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    var streetViewURL = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + address;
    $("body").append('<img class="bgimg" src="' + streetViewURL + '">');
    // Your NYTimes AJAX request goes here
    var nytimesURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + citystr + "&sort=newest&api-key=1db7c2996d7f4cda9374269193d3b9eb";
    $.getJSON(nytimesURL, function(data) {
        $nytHeaderElem.text('Articles About ' + citystr);
        articles = data.response.docs;
        console.log(articles);
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">' + '<a href="' + article.web_url + '">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
        };
    });

    var wikiUrl = 'http://en.wikipedia.org/w/api.php' +
        '?action=opensearch&search=' + citystr +
        '&format=json&callback=wikiCallback';

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        success: function(response) {
            console.log(response);
            var articleList = response[1];
            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki' +
                    articleStr;
                $wikiElem.append('<li><a href="' + url + '">' +
                    articleStr + '</a></li>');
            };
        }
    });
    return false;
}
$('#form-container').submit(loadData);
