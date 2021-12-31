import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [listData, setListData] = useState([])

  useEffect(() => {
    const getNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xC15461E2Bfc38F59963f0A10C6e9343b1fDcFd46')
      console.log(openseaData.data.assets)
      setListData(openseaData.data.assets)
    }
    return getNfts()
  }, []);
  return (
    <div className='app'>
      <Header />
      <Main />
      <List listData={listData} />
    </div>
  );
}

export default App;
