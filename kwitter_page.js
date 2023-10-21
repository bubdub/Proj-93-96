//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDNx_VHsImXQ6kFGrZ2nsLFkNjJjmJuATU",
      authDomain: "quitter-b6c4e.firebaseapp.com",
      databaseURL: "https://quitter-b6c4e-default-rtdb.firebaseio.com",
      projectId: "quitter-b6c4e",
      storageBucket: "quitter-b6c4e.appspot.com",
      messagingSenderId: "742405895144",
      appId: "1:742405895144:web:d02b826b2b1a33594b6a5d"
    };
    
  firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}