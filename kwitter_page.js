const firebaseConfig = {
    apiKey: "AIzaSyArueijB4IAo1DHejqOfi7SXKSkNYtdEio",
    authDomain: "rizzler-hw.firebaseapp.com",
    databaseURL: "https://rizzler-hw-default-rtdb.firebaseio.com",
    projectId: "rizzler-hw",
    storageBucket: "rizzler-hw.appspot.com",
    messagingSenderId: "191280065253",
    appId: "1:191280065253:web:f9b248f1116a6998c9420c"
  };
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    })
    document.getElementById("msg").value=" ";
  }

  function logOut(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
window.location.replace("kwitter_page.html");
  }