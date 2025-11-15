import Intro from '../components/Intro'
import Card from '../components/Card'

import devschool from '../assets/93de97f96f4cbcc8f0b85d0ef1aa6dfa.jpg'
import weekendBootcamp from '../assets/6aaf54d688c2f1feb11076bee125f748.jpg'
import intensiveBootcamp from '../assets/4b58750ae834fd09e2fe339647e31aa3.jpg'

const DevSchool = () => {
    const intro = {
        content: 
        `Program pelatihan belajar pemrograman 
        dengan tatap muka secara offline dan 
        dengan bimbingan para instruktur profesional. 
        Peserta akan belajar dengan kurikulum yang 
        berorientasi pada industri dengan teknologi 
        terbaru dengan konsentrasi utama yaitu 
        pemrograman web dan Android. Saat ini 
        program diselenggarakan di 2 kota besar, 
        yaitu Bandung dan Jakarta.`
    }

    const cards = [
        {
            imageUrl: weekendBootcamp,
            title   : 'Weekend Bootcamp', 
            subtitle: 'Kelas belajar coding yang diselenggarakan di setiap akhir pekan, berlokasi di Bandung dan Jakarta'
        },
        {
            imageUrl: intensiveBootcamp,
            title   : 'Intensive Bootcamp', 
            subtitle: 'Kelas belajar pemrograman Web dan Android secara intensif selama satu minggu dengan sistem karantina'
        },
    ]

    return (
        <div className="container">
            <h1 style={{ textAlign: 'center'}}>DEVELOPER SCHOOL</h1>
            <div className="row" style={{marginTop: 40, marginBottom: 100}}>
                <Intro content={intro.content}/>
                <div className="col-md-6">
                    <img 
                        src={devschool}
                        alt=""
                        style={styles.image}
                    />
                </div>
            </div>

            <div className="row" style={{ marginBottom: 50}}>
                {
                    cards.map(card => 
                        <Card 
                            imageUrl={card.imageUrl} 
                            title={card.title} 
                            subtitle={card.subtitle}
                        />
                    )
                }
            </div>
            
        </div>
    )
}

const styles = {
    image: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
        borderRadius: '8px'
    }
};

export default DevSchool