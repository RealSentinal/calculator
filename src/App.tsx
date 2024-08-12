import { useState } from 'react'
import './app.css'

function App() {
  const [opp, setOpp] = useState('')

  const handleClick = (e: any) => {
    const targetValue = e.target.innerText;
    setOpp(opp + targetValue);
  }

  const calculate = () => {
    try {
      setOpp(eval(opp).toString());
    } catch (error) {
      setOpp('Error');
    }
  }

  return (
    <div className="app">
      <div className='container'>
        <h1 className='opp'>{opp}</h1>
      </div>
      <div className='buttons'>
        <div className='line1'>
          <button className='func' onClick={() => setOpp('')}>AC</button>
          <button className='func' onClick={() => setOpp(opp.slice(0, -1))}>DEL</button>
          <button className='func' onClick={handleClick}>%</button>
          <button className='func' onClick={handleClick}>/</button>
        </div>
        <div className='line2'>
          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button className='func' onClick={handleClick}>X</button>
        </div>
        <div className='line3'>
          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button className='func' onClick={handleClick}>-</button>
        </div>
        <div className='line4'>
          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button className='func' onClick={handleClick}>+</button>
        </div>
        <div className='line5'>
          <button onClick={handleClick}>0</button>
          <button onClick={handleClick}>.</button>
          <button className='zero func' onClick={calculate}>=</button>
        </div>
      </div>
    </div >
  )
}

export default App
