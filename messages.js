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
var str = today.toGMTString();

var now = new Date();
var utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
var t = new Date(1502267619349);
//var formatted = t.format("yyyy.mm.dd hh:MM:ss");

//set
let db_path = "users/" + utc_timestamp;

//push
db_path = "/messages/";

//db root
let ref = db.ref(db_path);

let messages = [];

ref.once('value', function(snapshot) {
    messages = snapshot.val()
    console.log(messages)
})

// ref.push({
//     userid: utc_timestamp,
//     username: 'name111',
//     email: 'email111',
//     //timestamp: now.toLocaleString()
//     timestamp: utc_timestamp
// });