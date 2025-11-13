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

  var [nama, setNama] = useState("");
  var [keterangan, setKeterangan] = useState("");
  var [jenisPembayaran, setJenisPembayaran] = useState("");
  
  useEffect(() => {
    setNamaResto("Cafe and Resto Codepolitan");
  }, []);

  var handleBtnOnChange = (props) => {
    setNamaResto(props);
  };

  var handleOnChangeNama = (event) => {
    setNama(event.target.value);
  };

  var handleOnChangeKeterangan = (event) => {
    setKeterangan(event.target.value);
  };

  var handleOnChangeJenisPembayaran = (event) => {
    setJenisPembayaran(event.target.value);
  };
  
  return (
      <div className="App">
        <h1>{namaResto}</h1>
        <button onClick={()=> handleBtnOnChange('Programming')}>Ganti Nama</button>

        <form >
          <label style={{ display: 'block', fontWeight: 'bold' }}>Nama:</label>
          <input type="text" style={{ minWidth: 300 }} name='inputNama' onChange={handleOnChangeNama}/>
          <small style={{ display: 'block'}}>Nama: {nama}</small>

          <label style={{ display: 'block', fontWeight: 'bold' }}>Keterangan:</label>
          <textarea style={{ minWidth: 300, minHeight: 100 }} name="inputKeterangan" onChange={handleOnChangeKeterangan}></textarea>
          <small style={{ display: 'block' }}>Keterangan: {keterangan}</small>

          <label style={{ display: 'block', fontWeight: 'bold' }}>Jenis Pembayaran: </label>
          <select name="jenisPembayaran" style={{ minWidth: 300 }} onChange={handleOnChangeJenisPembayaran}>
            <option value="Cash">Cash</option>
            <option value="Debit">Debit</option>
            <option value="Voucher">Voucher</option>
          </select>
          <small style={{ display: 'block' }}>Jenis Pembayaran: {jenisPembayaran} </small>
        </form>

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
