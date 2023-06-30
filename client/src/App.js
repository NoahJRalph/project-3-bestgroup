import './App.css';

import React from 'react'

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import './App.css';
import Form from './pages/Form';


function App() {
  return (
    <ChakraProvider >
      <Form />
    </ChakraProvider >
  )
}

export default App;
