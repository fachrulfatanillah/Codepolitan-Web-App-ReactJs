import images_1 from '../assets/7c6005347a471c2b237ecb28181084fb.jpg'

const Home = () => {
    const styles = {
        container: {
            position: 'relative',
            textAlign: 'center',
        },
        imageCover: {
            width: '100%',
            maxHeight: '95vh',
            objectFit: 'cover'
        },
        blockText: {
            width: '100%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white'
        }
    }
    return (
        <div style={styles.container}>
            <img 
                style={styles.imageCover}
                src={images_1}
                alt="belajarcoding"
            />
            <div style={styles.blockText}>
                <h1>Belajar Coding Sekarang</h1>
                <h4>
                    Lebih dari 2.000 modul belajar pemrograman dalam beragam format yang bisa kamu pelajari.
                </h4>
            </div>
        </div>
    )
}

export default Home