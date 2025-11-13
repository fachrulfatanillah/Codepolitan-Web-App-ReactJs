import './App.css'
import { useState, useEffect } from "react";
import MenuMakanan from './components/MenuMakanan/MenuMakanan'
import MenuMinuman from './components/MenuMinuman/MenuMinuman'

function App() {
  var [namaResto, setNamaResto] = useState("Nama Resto");
  var [daftarMenu, setDaftarMenu] = useState({
    makanan:
      [{ 'namaMenu' : 'Ayam Bakar',
        'hargaMenu' : 25000,
        'stokMenu' : 10
      },
      { 'namaMenu' : 'Ikan Bakar',
        'hargaMenu' : 28000,
        'stokMenu' : 0
      }
    ],
    minuman: [
      { 'id' : 1,
        'namaMenu' : 'Jus Jeruk',
        'hargaMenu' : 10000,
        'stokMenu' : 10
      },
      { 'id' : 2,
        'namaMenu' : 'Jus Apel',
        'hargaMenu' : 10000,
        'stokMenu' : 5
      },
      { 'id' : 3,
        'namaMenu' : 'Air Mineral',
        'hargaMenu' : 5000,
        'stokMenu' : 50
      },
    ]
  });
  
  useEffect(() => {
    setNamaResto("Cafe and Resto Codepolitan");
  }, []);

  var handleBtnOnChange = (props) => {
    setNamaResto(props);
  };
  
  return (
      <div className="App">
        <h1>{namaResto}</h1>
        <button onClick={()=> handleBtnOnChange('Programming')}>Ganti Nama</button>
        <h2>Menu Makanan</h2>
        <MenuMakanan namaMenu={daftarMenu.makanan[0].namaMenu} hargaMenu={daftarMenu.makanan[0].hargaMenu} stokMenu={daftarMenu.makanan[0].stokMenu}/>
        <br />
        <MenuMakanan namaMenu={daftarMenu.makanan[1].namaMenu} hargaMenu={daftarMenu.makanan[1].hargaMenu} stokMenu={daftarMenu.makanan[1].stokMenu}/>
        
        <h2>Menu Minuman</h2>
        { daftarMenu.minuman.map(menu =>
            <MenuMinuman key={menu.id} namaMenu={menu.namaMenu} hargaMenu={menu.hargaMenu} stokMenu={menu.stokMenu}/>
        )}
      </div>
  )
}

export default App
