

import { createContext, useState} from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [isauth,setC] = useState(false)

  const [tAuth,setD] = useState(false)

   const auth =() =>{
    alert("your login status is true")
     setC(true)
   
  }

  const tauth =() =>{
      if(isauth==true){
        alert(`your login status is false`)
        setC(false)
      }
      else{
        alert(`your login status is ${!isauth}`)
    
        setD(tAuth==true?false:true)
      }
 
   
  }

    return (
            <AuthContext.Provider value={{isauth, auth , tauth}}> 
        {children}
        </AuthContext.Provider>

    )
       

}


