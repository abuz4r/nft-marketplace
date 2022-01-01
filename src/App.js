import './App.css';
import Header from './components/Header';
import List from './components/List';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [listData, setListData] = useState([])
  const [selectedNft, setSelectedNft] = useState(1)


  useEffect(() => {

    const getNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xC15461E2Bfc38F59963f0A10C6e9343b1fDcFd46&order_direction=asc')
      console.log(openseaData.data.assets)
      setListData(openseaData.data.assets)
    }
    return getNfts()
  }, []);
  return (
    <div className='app'>
      <Header />

      {listData.length > 0 && (
        <>
          <Main listData={listData} selectedNft={selectedNft} />
          <List listData={listData} setSelectedNft={setSelectedNft} />
        </>
      )}

    </div>
  );
}

export default App;
