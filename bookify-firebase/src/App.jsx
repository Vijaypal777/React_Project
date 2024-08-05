import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//css
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


//pages
import Register from './pages/Register'
import Login from './pages/Login'

//componentss
import NavbarPage from './components/Navbar.jsx'
import ListingPage from './pages/List.jsx'
import HomePage from './pages/Home.jsx'
import BookDetailPage from './pages/Details.jsx'
import OrdersPage from './pages/ViewOrder.jsx'
import ViewOrderDetails from './pages/ViewOrderDetail.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <NavbarPage/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/book/list' element={<ListingPage/>}/>
      <Route path='/book/view/:bookId' element={<BookDetailPage/>}/>
      <Route path='/book/orders' element={<OrdersPage/>}/>
      <Route path='/books/orders/:bookId' element={<ViewOrderDetails/>}/>
     </Routes>
     </div>
      
  )
}

export default App
