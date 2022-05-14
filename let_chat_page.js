const firebaseConfig = {
  apiKey: "AIzaSyDhWxnO0JFzC2O4rO2SYWlxo9n8Sj9qLDU",
  authDomain: "let-s-chat-room-2e8f3.firebaseapp.com",
  databaseURL: "ht/tps://let-s-chat-room-2e8f3-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-room-2e8f3",
  storageBucket: "let-s-chat-room-2e8f3.appspot.com",
  messagingSenderId: "513960593109",
  appId: "1:513960593109:web:dcba95cdc2e3c28a3bc45c",
  measurementId: "G-68F7NHH93M"
};
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

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