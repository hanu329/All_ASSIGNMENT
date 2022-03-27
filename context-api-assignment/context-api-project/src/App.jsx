import { useContext, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { IsAuth , ToggleAuth} from './Component/Navbar'
import { Status} from './Component/Status'


// import { Demo1 ,IsAuth} from './Component/Demo'
import { AuthContext } from './context/AuthContextProvider'

function App() {
 
  const [count, setCount] = useState(0)
  // const {isauth} = useContext(AuthContext)


  return (
    <div className="App">

      hello from app
      {/* <Demo1 /> */}
      {/* <Demo3 /> */}
    <IsAuth />
    <ToggleAuth />
    <Status />
    {/* {console.log(isauth)} */}
    </div>
  )
}

export default App
