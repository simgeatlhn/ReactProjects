import axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./Coin";
import "./App.css"

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  //api
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => {
        setCoins(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  //for search 
  const handleChange = e => {
    setSearch(e.target.value)
  }

  //search kısmında arama yaparken filtreleme
  //useState de alınan coins filteredCoins  a aktarılır
  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    //coin ekranda gözükmesi için map fonk kullanılır 
    //App.js-parent ,  coin.js- child
    <div className="crypto-App">
      <div className="crypto-search">
        <h1 className="crypto-text">Search</h1>
        <form >
          <input type="text" placeholder="Search.." className="crypto-input" onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        );
      })}
    </div>

  );
}

export default App;
