//bot-talks.js

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

var today = new Date();
var strGMTString = today.toGMTString();

var now = new Date();
var utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

var t = new Date(1502267619349);
//var formatted = t.format("yyyy.mm.dd hh:MM:ss");

//set
var db_path = "users/" + utc_timestamp;

//push
db_path = "bot-talks/";

//db root
var ref = db.ref(db_path);

ref.push({
    chartid: '123',
    ontext: 'name111',
    parameters: 'hello',
    //timestamp: now.toLocaleString()
    timestamp: utc_timestamp
});
