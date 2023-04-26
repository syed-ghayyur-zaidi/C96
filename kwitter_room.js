
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
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

    user_name = localStorage.getItem("user_name");

    room_name = localStorage.getItem("room_name")
    document.getElementById("user_name").innerHTML =  "Welcome" + user_name + "!";
   
    function addRoom() 
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class="room_name" id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;  

      //End code
      });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout ()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}
