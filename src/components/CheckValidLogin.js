import LoginForm from './LoginForm';
import Welcome from './Welcome';
import React, { useState } from 'react';
const CheckValidLogin=() => {
  const[datas,setData]=useState(false);
  const[name,setName]=useState('');
  async function fetchDataHandler(names,passwords){
    
    //isLoading(true);
    const name=names;
    const password=passwords;
     const response = await  fetch("http://localhost:7070/login?username="+name+"&password="+password)
     
     const data =await response.json();
     console.log(data);
     const getdata=data;
     /*for(const key in getdata){
      console.log(data.key);
     
    }*/
     if(data.data===true){
       setData(true);
       setName(name);
       console.log(datas+" if true");
     }else{
      setData(false);
      console.log(datas+" if false");
     }
     
    
     console.log(datas);
      //this.setState({ persons });
    }
    const dataHandler=()=>{
      setData(false);
    }
    return (
     <React.Fragment>
        {datas && <Welcome name={name} onAdd={dataHandler}/>}
       {!datas && <LoginForm onSubmit={fetchDataHandler}/>}
       
       </React.Fragment>
   );
   
}
export default CheckValidLogin;