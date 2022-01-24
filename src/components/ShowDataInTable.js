import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import React from "react";
 let columns=[];
 let rows=[];
const ShowDataInTable=(props)=>{
    
   columns=[ 
       {headerName: "Authour" , field:'authour'},
       {headerName: "Name" , field:'name'},
   ,]
   
    /*columns=[
        {headerName: "firstname" , field:'name'},
        {headerName: "Lastname" , field :'lastname'},
        {headerName: "Email" , field :'email'},
        {headerName: "Message" , field :'message'},
        {headerName: "AdditionalDetail" , field:'detail'},
    ] */
    const defaultColDef={
        sortable:true,editable:true,filter:true
    }
    /*<div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            
     <AgGridReact rowData={props.data} columnDefs={columns}defaultColDef={defaultColDef}>

        </AgGridReact>*/
        const isShowHandler=()=>{
            props.onClick();
        }
    return(
            
             <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            
              <AgGridReact rowData={props.data} columnDefs={columns}defaultColDef={defaultColDef}>
       
               </AgGridReact>
                <button onClick={isShowHandler}>Return</button>
               </div>
    );

}
export default ShowDataInTable;