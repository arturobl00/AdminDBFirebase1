// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyAvsfRiyhlnLfgRD9n26wzrc1WdozRjLDs",
    authDomain: "adminbasedatos-d3996.firebaseapp.com",
    projectId: "adminbasedatos-d3996",
  });
  
  var db = firebase.firestore();

  //Codigo para agregar registros a mi colección
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
            document.getElementById('nombre').value = '';
            document.getElementById('apellido').value = '';
            document.getElementById('año').value = '';
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
  }

  //Codigo para Leer o Mostrar registros de mi colección
  //Leer el id de la tabla
  var tabla = document.getElementById('tabla');

  db.collection("users").onSnapshot((querySnapshot) => {
      tabla.innerHTML = ''; //Limpiar mi tabla
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().last}`);
        tabla.innerHTML += `
        <tr>
            <th scope="row">${doc.id}</th>
            <td>${doc.data().first}</td>
            <td>${doc.data().last}</td>
            <td>${doc.data().born}</td>
            <td><button class="btn btn-danger">Eliminar</button></td>
            <td><button class="btn btn-warning">Editar</button></td>
        </tr>
        `
        });
    });
