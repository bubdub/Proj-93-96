
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML="Welcome "+user_name+"! :)";
function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name="+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}

getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}