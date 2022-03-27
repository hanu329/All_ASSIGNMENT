
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";





export const IsAuth =()=> {

    const {auth}= useContext(AuthContext)
   
    return (
        <div>
    
        <button onClick={()=>auth()}>Login
      
        </button>
        </div>
      
    )
}



export const ToggleAuth =()=> {

    const {tauth}= useContext(AuthContext)
   
    return (
        <div>
    
        <button onClick={()=>tauth()}>toggle
      
        </button>
        </div>
      
    )
}