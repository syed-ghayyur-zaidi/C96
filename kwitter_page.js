//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyD4ScVoPF4R7_1zdVeAYe1TVBaD4_NKcyM",
      authDomain: "kwitter-john.firebaseapp.com",
      databaseURL: "https://kwitter-john-default-rtdb.firebaseio.com",
      projectId: "kwitter-john",
      storageBucket: "kwitter-john.appspot.com",
      messagingSenderId: "787351872065",
      appId: "1:787351872065:web:ef6b6fb0155936c1375cc0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
      msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
       });

       document.getElementById("msg").value = "";
}