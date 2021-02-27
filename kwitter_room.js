var firebaseConfig = {
      apiKey: "AIzaSyD1ihCuwCHv3Np9MZjNZT1hqnevNYMCzyI",
      authDomain: "lets-chat-e1651.firebaseapp.com",
      databaseURL: "https://lets-chat-e1651-default-rtdb.firebaseio.com",
      projectId: "lets-chat-e1651",
      storageBucket: "lets-chat-e1651.appspot.com",
      messagingSenderId: "45802723863",
      appId: "1:45802723863:web:4ea160cf7aa42ceb691a52",
      measurementId: "G-0FSLK97XMW"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
