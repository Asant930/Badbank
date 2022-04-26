import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Components/HomePage'
import CreateAccount from './Components/CreateAccount';
import Deposit from './Components/Deposit';
import Withdraw from './Components/Withdraw';
import AllData from './Components/AllData';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/createaccount" index element={<CreateAccount />} />
          <Route path="/deposit" index element={<Deposit />} />
          <Route path="/withdraw" index element={<Withdraw />} />
          <Route path="/alldata" index element={<AllData />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
