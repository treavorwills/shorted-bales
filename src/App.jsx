import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';
import Table from './components/Table.jsx';
import Output from './components/Output.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <Input></Input>
      <Table></Table>
      <Output></Output>
    </>
  )
}

export default App
