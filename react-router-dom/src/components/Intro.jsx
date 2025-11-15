const Intro = (props) => {
    return (
        <div className="col-md-6" style={styles.box450}>
            <h5 style={styles.greyText}>
                {props.content}
            </h5>
            <a href="#" className="btn buttonAction" >
                Pelajari Detail Program
            </a>
        </div>
    )
}

const styles = {
    box450: {
        height: '450px'
    },
    greyText: {
        color: '#808080',
        textAlign: 'justify'
    }
}

export default Intro