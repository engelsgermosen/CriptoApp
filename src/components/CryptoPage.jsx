
import LoadingCircle from './LoadingCircle';
import { useParams } from 'react-router';
import '../styles/CryptoPages.css';
import usePetition from '../hooks/usePetition';

const CryptoPage = () => {

  const { id } = useParams();



  const data = usePetition(`https://api.coincap.io/v2/assets/${id}`);
  const history = usePetition(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`);



  if (!data || !history) return <LoadingCircle />;

  return (
    <div className="container">
      <aside className="aside">
        <div>
          <p className='label-datos'>
            Rank: <span className='infro-datos'>{data.rank}</span>
          </p>
          <p className='label-datos'>
            Name: <span className='infro-datos'>{data.name}</span>
          </p>
          <p className='label-datos'>
            Symbol: <span className='infro-datos'>{data.symbol}</span>
          </p>
          <p className='label-datos'>
            Supply: <span className='infro-datos'>{parseFloat(data.supply).toFixed(3)}</span>
          </p>
          <p className='label-datos'>
            MaxSupply: <span className='infro-datos'>{isNaN(parseFloat(data.maxSupply).toFixed(3)) ? "Unknown" : parseFloat(data.maxSupply).toFixed(3)}</span>
          </p>
          <p className='label-datos'>
            MarketCapUsd: <span className='infro-datos'>{parseFloat(data.marketCapUsd).toFixed(3)}</span>
          </p>
        </div>
      </aside>
      <main>
        <div className="table-container">
          {
            history && (
              <table className="table">
                <thead className="thead">
                  <tr>
                    <th className="th">Fecha</th>
                    <th className="th">Precio</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {
                    history.map(({ priceUsd, date, time }) => (
                      <tr key={time} className="tr">
                        <td className="td">{new Date(date).toDateString()}</td>
                        <td className="td">{parseFloat(priceUsd).toFixed(3)}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )
          }
        </div>
      </main>
    </div>
  );
}

export default CryptoPage;