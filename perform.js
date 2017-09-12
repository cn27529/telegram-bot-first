//https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJsonByMainType&mainType=10

var request = require('request');
var cheerio = require('cheerio');

var url = 'https://cloud.culture.tw/frontsite/trans/emapOpenDataAction.do?method=exportEmapJsonByMainType&mainType=10';

function get_place_6220(url) {

    request(url, function(error, response, data) {
        //if (error) reject(error);
        //console.log(html)
        //let data = callback(html, weather_name)
        console.log(response)
        
    })

}

get_place_6220(url)



