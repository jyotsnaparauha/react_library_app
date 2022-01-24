
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import ItemCollected from './components/ItemCollected';
import CheckValidLogin from './components/CheckValidLogin';
function App() {
  const[users ,setUsers]=useState([]);
  const[user ,setUser]=useState('');
  async function fetchDataHandler(){
    //isLoading(true);
    const name='sudheer';
    const password='parauha';
    axios.get(`http://localhost:7070/login?username="+name+"&password="+password`)
    .then(res => {
      const persons = res.data;
      console.log(persons);
      setUser(persons);
      console.log(user);
      //this.setState({ persons });
    })
   
     /*const response=await fetch("http://localhost:7070/login?username="+name+"&password="+password);
     const data= await response.json();
     console.log(data);
     setUser(data);
     console.log("hello");
     //console.log(data);
    users.map(data=>{
      console.log(data);
    })
     for(const key in users){
      console.log(users[key].AUTHOUR);
       console.log(users[key].NAME);
     }*/
    
  }
  return (
    <div className="App">
     <CheckValidLogin/>
    </div>
  );
};
export default App;
