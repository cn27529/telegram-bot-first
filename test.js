var helloworld = require('getmynumber')

var hi_value = helloworld.sayHi('hiiiiiiiiii')

console.log(hi_value)



var firebase = require('firebase');

let config = {
    apiKey: "AIzaSyAg0tGWsKqtjZcRnFPrBroVn8r111Q4EKY",
    authDomain: "bkappdb.firebaseapp.com",
    databaseURL: "https://bkappdb.firebaseio.com",
    projectId: "bkappdb",
    storageBucket: "bkappdb.appspot.com",
    messagingSenderId: "1087681092838"
};
firebase.initializeApp(config);

// msgRef = firebase中的資料表/messages/，若沒有的會自動建立
const msgRef = firebase.database().ref('/messages/');
msgRef.on('value', function(snapshot) {
    const val = snapshot.val();
    //vm.messages = val;
    console.log(val)
})