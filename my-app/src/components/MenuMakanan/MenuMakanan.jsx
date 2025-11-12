var MenuMakanan = (props) => {
    return (
        props.stokMenu>0 ? 
            <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
                <p>Nama Menu: {props.namaMenu}</p>
                <p>Harga: Rp. {props.hargaMenu}</p>
                <p>Stok: Rp. {props.stokMenu}</p>
            </div>
        :
            null
    )
}

export default MenuMakanan;