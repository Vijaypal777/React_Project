import Button from './components/Button'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import './style.css'

function App() {
  

  return (
    <div className='todo-container'>
    <h1>TodoIe App</h1>
    <Header/>
    <TodoItem text="Eat"/>
    <TodoItem text="Code"/>
    <TodoItem completed={true} text="Play"/>
    <TodoItem text="Study"/> 
    <TodoItem text="Sleep"/>
    <Button/>
   </div>
  )
}

export default App
