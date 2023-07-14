import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import DataTable from './components/DataTable.jsx';
import Output from './components/Output.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <Input></Input>
      <DataTable></DataTable>
      <Output></Output>
    </>
  )
}

export default App
