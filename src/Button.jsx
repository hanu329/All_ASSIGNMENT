
import "./button.css"

export const Button = ({children,onClick,className}) =>{
 
    return (
        
            <button onClick={onClick} className={className}>{children}</button>
       
    )

}
// import styled from "styled-components"


// export const Button = styled.button`
//    background:red;
//    color:blue;
//    padding:20px;
// `;