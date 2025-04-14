import { useEffect, useState } from "react";
import "../styles/Cuadricula.css";
import LoadingCircle from "./LoadingCircle";
import Cryptos from "./Cryptos";

function Cuadricula() {
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    fetch(
      "https://rest.coincap.io/v3/assets?apiKey=d7a8c72e3b339b06959c5bf63dba53d4ccba0adaac70546554e2dcfa5d02f203"
    )
      .then((res) => res.json())
      .then((data) => setCryptos(data.data))
      .catch((error) => console.error(error));
  }, []);

  if (!cryptos) return <LoadingCircle />;

  return (
    <div className="crypto-container">
      <div className="crypto-content">
        <h1 className="crypto-page-title">Criptomonedas</h1>
        <div className="crypto-grid-container">
          {cryptos.map(({ id, changePercent24Hr, symbol, name, priceUsd }) => (
            <Cryptos
              key={id}
              changePercent24Hr={changePercent24Hr}
              name={name}
              symbol={symbol}
              priceUsd={priceUsd}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cuadricula;
