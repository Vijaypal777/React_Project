import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import {app} from './firebase'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

const auth =getAuth(app)


function App() {

  const signupUser=()=>{
    createUserWithEmailAndPassword(auth,
      "vijaysaini@gmail.com",
    "vijay@123"
  ).then((value)=> console.log(value))
  }
  return (
    
    <div>
       <Signup/>
       <Signin/>
    </div>
  )
}

export default App
