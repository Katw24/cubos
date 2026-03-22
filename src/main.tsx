import React from 'react'
import ReactDOM from 'react-dom/client'

function Teste() {
  return <h1 style={{ color: 'red' }}>TESTE RENDER</h1>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Teste />
)