
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
  import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBPsBgxYiQ5uTHREE41LH2Z6EufR0fyyEA",
    authDomain: "watchaholicweb.firebaseapp.com",
    databaseURL: "https://watchaholicweb-default-rtdb.firebaseio.com",
    projectId: "watchaholicweb",
    storageBucket: "watchaholicweb.appspot.com",
    messagingSenderId: "729479701539",
    appId: "1:729479701539:web:b5fc249b7e77ab7e423d96",
    measurementId: "G-2DRRDPZTMF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);

  const button_Signup = document.getElementById('button_signup');
  const button_LogIn = document.getElementById('button_login');

  button_Signup.addEventListener('click', (e) =>{
    let name  = document.getElementById("name").value;
    let emailSignup  = document.getElementById("email").value;
    let passwordSignup  = document.getElementById("password_signup").value;
    

    createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        set (ref(database, "users/" + user.uid), {
          name : name,
          emailSignup : email,
          passwordSignup : password
        });
      })
      .then(()=> {
        alert("User has been added!!");
      }).catch((error)=>{
        alert(error);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  })

  button_LogIn.addEventListener('click', (e) =>{
    let emailLogin = document.getElementById('email_login').value;
    let passwordLogin = document.getElementById('password_login').value;
    

    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(error.message);
  });

  })