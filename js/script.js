
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
var street = $('#street').val();
var city = $('#city').val();
var requestUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+ street+',' + city;

console.log(street);
console.log(city);
console.log(requestUrl);

$body.append("<img class='bgimg' src="+ requestUrl +"></img>");

    // YOUR CODE GOES HERE!'

    ////NYT

    var url = "https://api.noytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({'api-key': "c10b75e5bbd94b5490fc6e17f7f4979a", 'q': street });

$.getJSON(url, function(data){
    console.log(data);
    
    data.response.docs.forEach(function(element) {
        $nytElem.append("<li>"+element.snippet+"</li>");
          console.log(element.snippet);

    }, this);
}).error(function(){
    $nytElem.text("can not be loaded!!!");
}

);

    return false;
};

$('#form-container').submit(loadData);
