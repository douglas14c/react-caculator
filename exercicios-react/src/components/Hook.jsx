import React, { useState, useEffect } from 'react';

export default props => {
  const [contador, setContador] = useState(100)
  const [status, setParOuImpar] = useState('par')

  useEffect(() => {
    contador % 2 === 0 ? setParOuImpar('par') : setParOuImpar('impar')
  })

  return (
    <div>
      <h1>{contador}</h1>
      <h3>{status}</h3>
      <button onClick={() => setContador(contador - 1)}>Dec</button>
      <button onClick={() => setContador(contador + 1)}>Inc</button>
    </div>
  )
}