import { useState } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
 import { ToastContainer, toast } from 'react-toastify';
import Selected from './components/Selected/Selected'

function App() {
  const [coins, setCoins] = useState(0);
  const handleCoins = () => {
    toast.success("coins are available", {
      position: "top-center"
    })
    setCoins(coins + 600000000);
  }
  const handlePlayerPrice = price => {
    if (coins === 0) {
      toast.warning("Tumi akhon o taka add koro nai");
      return;
    }
    else if (price > coins) {
      toast.warn("Tomar balance kom tumi ai takay kinte parbe na ");
      return;
    }
    setCoins(coins - price);
  }

  return (
    <>
      <Header coins={coins}></Header>
      <Banner handleCoins={handleCoins}></Banner>
      <Available></Available>
      <Players handlePlayerPrice={handlePlayerPrice}></Players>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
