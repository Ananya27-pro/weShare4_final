var firebaseConfig = {
  apiKey: "AIzaSyCCJ8plnybnEa5aW8BiLbdv_ugy1cuVjnY",
  authDomain: "weshare-f2a29.firebaseapp.com",
  databaseURL: "https://weshare-f2a29-default-rtdb.firebaseio.com",
  projectId: "weshare-f2a29",
  storageBucket: "weshare-f2a29.appspot.com",
  messagingSenderId: "46348642649",
  appId: "1:46348642649:web:0b838241d1fb077e24c448",
  measurementId: "G-QM2DM5YKMQ"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML="Welcome "+user_name;
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="weShare_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;

//End code
});});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="weShare_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
