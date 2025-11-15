import Card from '../components/Card'
import Intro from '../components/Intro'

import gambar_2 from '../assets/3f114994ab05023ce622fb37c8a9e102.jpg'
import gambar_3 from '../assets/da404bf7bd4398c9f256c65507d3c860.jpg'

const Premium = () => {
    const intro = {
        content: `Premium Online Course merupakan platform 
        belajar coding online yang dikemas secara 
        interaktif dengan beragam media belajar. 
        Kamu bisa belajar dan mengembangkan skill 
        pemrograman melalui program ini. Kami telah 
        menyusun kurikulum dan materi belajar pada 
        setiap course dengan alur yang sangat jelas 
        sehingga bisa diikuti oleh siapa saja. 
        Kamu tak perlu bingung lagi bagaimana cara 
        memulai belajar pemrograman. Pilih jalur 
        belajarmu, mulai belajar coding sekarang dan 
        jadilah developer prefessional!`,
    }

    const features = [
        {title: 'Materi Belajar',   desc: 'Materi belajar disusun secara sistematis dengan metode dan teknologi terbaru. Materi belajar menggunakan berbagai media.'},
        {title: 'Waktu Belajar',    desc: 'Waktu belajar sangat fleksibel. Kamu bisa menyesuaikan waktu belajarmu dengan kesibukan yang kamu miliki.'},
        {title: 'Metode Belajar',   desc: 'Kamu hanya perlu mengikuti alur belajar yang telah disediakan dengan membaca teks penjelasan, memutar video belajar dan mencoba sendiri.'},
    ]

    const cards = [
        {title: 'Menjadi Web Programmer', imageUrl: gambar_2},
        {title: 'Belajar Pemrograman PHP', imageUrl: gambar_3},
    ]

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center'}}>PREMIUM ONLINE COURSE</h1>
                <div className="row" style={{marginTop: 40, marginBottom: 100}}>
                    <Intro content={intro.content}/>

                    <div className="col-md-6" style={styles.box450border} >
                        {
                            features.map(feature => (
                                <div>
                                    <h5><strong>{feature.title}</strong></h5>
                                    <p>{feature.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="row" style={{ marginBottom: 50 }}>
                    {
                        cards.map(card => 
                            <Card 
                                imageUrl={card.imageUrl} 
                                title={card.title} 
                            />
                        )
                    }
                </div>
            
        </div>
    )
}

const styles = {
    box450border: {
        height: '450px',
        border: '2px solid #f1f1f1',
        borderRadius: 10,
        padding: 30
    },
}

export default Premium