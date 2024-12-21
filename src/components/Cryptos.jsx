import { Link } from 'react-router'
import '../styles/Cryptos.css'

const Cryptos = ({ id, name, priceUsd, symbol, changePercent24Hr }) => {
  return (
    <Link to={`/criptomonedas/${id}`} className="crypto-link">
      <article className="crypt-container">
        <h2 className="crypto-name">{name}</h2>
        <p className="crypto-label">{symbol}</p>
        <p className="crypto-label">
          Price: <span className="crypto-price">{parseFloat(priceUsd).toFixed(3)}</span>
        </p>
        <p className="crypto-label">
          Variación 24hrs:{' '}
          <span className={parseFloat(changePercent24Hr) > 0 ? 'positivo' : 'negativo'}>
            {parseFloat(changePercent24Hr).toFixed(3)}%
          </span>
        </p>
      </article>
    </Link>
  );
}

export default Cryptos