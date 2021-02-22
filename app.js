// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAvsfRiyhlnLfgRD9n26wzrc1WdozRjLDs",
    authDomain: "adminbasedatos-d3996.firebaseapp.com",
    projectId: "adminbasedatos-d3996",
  });
  
  var db = firebase.firestore();

  function agregar(){
      var nombre = document.getElementById('nombre').value;
      var apellido = document.getElementById('apellido').value;
      var año = document.getElementById('año').value;
    
      console.log(nombre, apellido, año);
        db.collection("users").add({
        first: nombre,
        last: apellido,
        born: año
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
  }
  