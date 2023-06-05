import React from 'react'
import './App.css'
/* import Form from './components/Form/Form' */
/* import ItemCount from './components/ItemCount/ItemCount' */
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
const App = () => {
  let nombre ="Chuampis"
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting = {"Bienvenidos a la tienda"}/>
    </>
   )
}

export default App