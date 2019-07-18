import React from 'react'
import Header from '../components/Header'


const PageTemplate = ({children}) =>
  <div className="app">
    <Header />
    {children}
  </div>

export default PageTemplate
