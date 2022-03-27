

import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";





export const Status =()=> {

    const {isauth}  = useContext(AuthContext)
    
   {
      if(isauth){
          document.getElementById("root").innerText="success"
      }
      else{
        document.getElementById("root").innerText="log in failed"
      }
    }
    return (
        <div>helllllllsdfsfs</div>
    )
}



