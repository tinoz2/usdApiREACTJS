import React, { useEffect, useState } from 'react'
import { getUsd, setUsd } from './API/apiUSD'
import style from './css/main.css'

function App() {

  const [usdData, setUsdData] = useState(null)

  useEffect(() => { 
    getUsd().then((data) => {
      setUsdData(setUsd(data))
    })
  } ,[])

  return (
    <main className='main'>
      <h1>Valor del dolar
        <br />
        <span className='span1'>(hoy)</span>
      </h1>
      {usdData ? (
        <div className='div'>
            <div className='div2'>
                <p>Compra dolar oficial: </p> <span className='span2'>{usdData.oficial_compra}$</span>
            </div>
            <div className='div2'>
                <p>Venta dolar oficial:</p> <span className='span2'>{usdData.oficial_venta}$</span> 
            </div>
            <div className='div2'>
                <p>Compra dolar blue: </p> <span className='span2'>{usdData.blue_compra}$</span>
            </div>
            <div className='div2'>
                <p>Venta dolar blue: </p> <span className='span2'>{usdData.blue_venta}$</span>
            </div>
        </div>
      ) : (
        <p>Cargando datos...</p>
      )}

        <footer>
          <div>
            <p className='p2'>Copyright Ⓒ</p>
          </div>
        </footer>
    </main>
  )
}

export default App