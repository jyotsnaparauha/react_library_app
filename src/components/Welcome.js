import { useState } from "react";
import ShowDataInTable from "./ShowDataInTable";
const Welcome=(props)=>{
     const [bookData,setBookData]=useState(['']);
     const [isShow,setIsShow]=useState(false);
    async function viewBookHandler(names,passwords){
    
        //isLoading(true);
        const name=names;
        const password=passwords;
         const response = await  fetch("http://localhost:7070/books");
         
         const data =await response.json();
         const books=data;
         setBookData(books);
         setIsShow(true);
               /* for(const key in data){

          console.log(data[key].authour);
            console.log(data[key].name);
     }*/
    }
    const isShowHandler=()=>{
      setIsShow(false);
      //props.onAdd();
    }
    return(
        <div>
            <h1>Welcome { props.name}</h1>
            {!isShow && <button onClick={viewBookHandler}>Show Books</button>}
            {isShow && <ShowDataInTable data={bookData} onAdd={props.onAdd}/>}
           {isShow && <button onClick={isShowHandler}>Return</button>}
        </div>
    )
    ;

}
export default Welcome;