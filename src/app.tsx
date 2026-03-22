import React from 'react'
import ReactDOM from 'react-dom/client'

const root = document.getElementById('root')

if (!root) {
  document.body.innerHTML = '<h1 style="color:red">ROOT NÃO ENCONTRADO</h1>'
} else {
  ReactDOM.createRoot(root).render(
    <h1 style={{ color: 'lime' }}>REACT OK</h1>
  )
}