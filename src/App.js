/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/header/navbar';
 import Pages from './pages/pages';


export default function App() {
  return (

<>
<NavBar />
<Routes>
        
       <Route path='/' element={ <Pages/> } />
  
     
</Routes>

</>
       
  
  
  
  )
}

