import { useState } from 'react'
import './App.css'
import KhCard from './components/Khcard'
import React from 'react';
import {jsx,css} from '@emotion/react';
import styled from'@emotion/styled';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <KhCard/> 
    </>
  )
}

export default App
