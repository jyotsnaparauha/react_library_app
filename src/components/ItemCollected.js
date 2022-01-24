
import LoginForm from "./LoginForm";
import ShowDataInTable from "./ShowDataInTable";
import React, {useState} from "react";
const Dummy_data=[{   id:'e1',
                       name:'',
                       lastname:'',
                       email:'',
                       message:'',
                       detail:'',
}];
const ItemCollected =(props)=>{
    
    const[loadedData,setLoadedData]= useState(Dummy_data);
    let[isLoading,setIsLoading]=useState(false);
    const setIsLoadingTrue=()=>{
        setIsLoading(true);
        console.log(isLoading);
    }
    const setIsLoadingFalse=()=>{
        
        setIsLoading(false);
        console.log(isLoading);
    }
    const addDataHandler=(data)=>{
      
          setLoadedData((prevState)=>{
        return[...prevState,data]
         }
        )
    }
       const callHttpHandler=()=>{
           props.onShow();
    }
     return(
        <React.Fragment>
       
         {!isLoading && <LoginForm onAdd={addDataHandler} isLodingTrue={setIsLoadingTrue} isLodingFalse={setIsLoadingFalse}/>}
         {isLoading &&  <ShowDataInTable data={loadedData} /> }
         {isLoading && <button onClick={setIsLoadingFalse}>Return</button>}
         <button onClick={callHttpHandler}>HttpData</button>
         </React.Fragment> 
    );

}
export default ItemCollected ;