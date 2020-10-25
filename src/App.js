import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import DataListComponent from './components/DataListComponent';
import InputFormComponent from './components/InputFormComponent';
import firebase from './firebaseConfig'

function App() {

  const database = firebase.database()
  const userRef = database.ref()

  const [firstNameInput, setFirstNameInput] = useState("")
  
  const [lastNameInput, setLastNameInput] = useState("")
  console.log("firstname: ", firstNameInput)
  console.log("lastname: ", lastNameInput)

  const [user, setUser] = useState({firstName: "", lastName: ""})

  function saveNameData(){
    setUser({firstName: firstNameInput, lastName: lastNameInput})
  }

  function testFetch() {
    console.log("userRef: ", userRef)
    const url = userRef + ".json"
    fetch(url, {method: "POST",
    body: JSON.stringify(user)})
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

  }

  useEffect(() => {
    userRef.on("value", (snapshot) => {
      console.log(snapshot.child("user").val())
    })
}, []);

  return (
    <div>

      <DataListComponent/>
      <InputFormComponent
        type="text"
        name="firstName"
        value={firstNameInput}
        handleInput={setFirstNameInput}
        placeholder="write your name"
      />
      <InputFormComponent
        type="text"
        name="lastName"
        value={lastNameInput}
        handleInput={setLastNameInput}
        placeholder="write your lastname"
      />
      <button onClick={saveNameData}>Hej</button>
      <button onClick={testFetch}>Skicka</button>
    </div>
  );
}

export default App;
