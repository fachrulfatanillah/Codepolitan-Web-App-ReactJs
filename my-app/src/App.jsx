import './App.css'
import { useState, useEffect } from "react";
import MenuMakanan from './components/MenuMakanan/MenuMakanan'
import MenuMinuman from './components/MenuMinuman/MenuMinuman'

function App() {
  var [namaResto, setNamaResto] = useState("Nama Resto");
  
  useEffect(() => {
    setNamaResto("Cafe and Resto Codepolitan");
  }, []);
  
  return (
    <div className="App">
        <h1>{namaResto}</h1>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={"25000"}/>
        
        <h2>Menu Minuman</h2>
        <MenuMinuman namaMenu={"Jus Jeruk"} hargaMenu={"10000"}/>
      </div>
  )
}

export default App
