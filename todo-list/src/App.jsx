import React from 'react';
import { List, Form, Footer, Filters } from './components/index.js'

export default function App() {
  return(
    <>
      <Form/>
      <Filters/>
      <List/>
      <Footer/>
    </>
  )
}