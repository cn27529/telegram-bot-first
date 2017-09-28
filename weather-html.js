var request = require('request');
var cheerio = require('cheerio');

var moment = require('moment');


var url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm';

function weather_html(url, weather_name, callback) {

    request(url, function(error, response, html) {
        //if (error) reject(error);
        //console.log(html)
        let data = callback(html, weather_name)
        console.log(data)
    })

}

var weather_names = ['Keelung_City', 'Taipei_City', 'New_Taipei_City', 'Taoyuan_City', 'Hsinchu_County', 'Hsinchu_City', 'Miaoli_County', 'Taichung_City', 'Changhua_County', 'Nantou_County', 'Yunlin_County', 'Chiayi_County', 'Chiayi_City', 'Tainan_City', 'Kaohsiung_City', 'Pingtung_County', 'Taitung_County', 'Hualien_County', 'Yilan_County']


for (var each_index in weather_names) {
    var name = weather_names[each_index]
    url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/' + name + '.htm';
    weather_html(url, name, cb_weather_html)
        //console.log(url)
}

// name = 'Changhua_County'
// url = 'http://www.cwb.gov.tw/V7/forecast/taiwan/' + name + '.htm';
// weather_html(url, name, cb_weather_html)

var firebase = require('firebase');
// 初始化 Firebase
var config = {
    apiKey: "AIzaSyAg0tGWsKqtjZcRnFPrBroVn8r111Q4EKY",
    authDomain: "bkappdb.firebaseapp.com",
    databaseURL: "https://bkappdb.firebaseio.com",
    storageBucket: "bkappdb.appspot.com",
};
firebase.initializeApp(config);
// 建立 DB
var db = firebase.database();

function save2firebase(data, weather_name) {

    var yyyymmdd = moment().format('YYYYMMDD')

    //set
    var db_path = 'weathers/-tw-' + yyyymmdd + '/' + weather_name

    //db root
    var ref = db.ref(db_path);

    ref.set(data);

    //console.log(data)
}

function cb_weather_html(html, weather_name) {
    //console.log(html)

    var $ = cheerio.load(html);
    let returnData = [];

    //取得標題
    let target_html = $('table.FcstBoxTable01').eq(0);

    target_html.find('thead th').each(function(i, element) {

        let data = $(this).text().split('\n')
            //console.log(JSON.stringify(data))
            // data.map(function(value, i, data){
            //     //console.log(value)
            // })
        returnData.push({
            key: $(this).text(),
            values: []
        })

    });

    //console.log(returnData)

    var item_len = target_html.find('tbody tr').length

    //內容值
    for (var i = 0; i < item_len; i++) {
        target_html.find('tbody tr').eq(i).each(function(i, element) {

            let data = $(this).text().split('\n')
                //console.log(JSON.stringify(data))

            let val0 = data[1].split('\t\t')
            returnData[i].values.push(val0[1])

            let val1 = data[2].split('\t\t')
            returnData[i + 1].values.push(val1[1])

            let val3 = data[5].split('\t\t')
            returnData[i + 3].values.push(val3[1])

            let val6 = data[6].split('\t\t')
            returnData[i + 4].values.push(val6[1])

            //console.log(JSON.stringify(data[1]))

            // returnData2.push({
            //     item: $(this).text()
            // })
        })
    }

    //console.log(returnData)

    save2firebase(returnData, weather_name)

    return returnData

    // target_html.find('tbody tr').eq(0).each(function(i, element) {

    //     let data = $(this).text().split('\n')
    //         //console.log(JSON.stringify(data))

    //     // data.map(function(val, i, data) {
    //     //     return {
    //     //         qq: val[0]
    //     //     }
    //     // })

    //     //console.log(data)

    //     returnData2.push({
    //         item: $(this).text()
    //     })
    // });

    //console.log(returnData2)


}



// var $ = cheerio.load(html);

// let returnData = [];
// $('.FcstBoxTable01 > td').each(function (i, element) {

//     console.log(i)

//     // returnData.push({
//     //     val: $(this).text()
//     // })
// });
//resolve(returnData);

// const $ = cheerio.load('<ul id="fruits">' +
//     '<li class="apple">Apple</li>' +
//     '<li class="orange">Orange</li>' +
//     '<li class="pear">Pear</li>' +
//     '</ul>');

// let data = [];

// $('#fruits > li').each(function (i, elem) {
//     //console.log($(this).text())
//     data.push({
//         val: $(this).text()
//     })
// });

// console.log(data)