import { Link } from 'react-router';
import '../styles/Home.css'

const Home = () => {
    return (
        <div className="container-home">
            <h1 className="section-title-home">Bienvenido a EGmarket</h1>
            <p className="section-description-home">Las 100 criptomonedas más usadas</p>
            <Link to={'/criptomonedas'}>
                <button className="btn-primary-home">Ver lista de cryptos</button>
            </Link>
        </div>
    );

}

export default Home;