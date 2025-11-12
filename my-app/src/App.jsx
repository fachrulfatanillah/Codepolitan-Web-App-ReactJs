import './App.css'
import MenuMakanan from './components/MenuMakanan/MenuMakanan'
import MenuMinuman from './components/MenuMinuman/MenuMinuman'

function App() {

  return (
    <div className="App">
        <h1>Cafe and Resto Codepolitan</h1>
        <h2>Menu Makanan</h2>
        <MenuMakanan/>
        
        <h2>Menu Minuman</h2>
        <MenuMinuman />
      </div>
  )
}

export default App
