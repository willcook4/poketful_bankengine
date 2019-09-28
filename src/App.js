import React from 'react'
// import { render } from 'react-dom'
import { Router } from '@reach/router'

import "antd/dist/antd.css"
import './App.css'

import { Welcome } from './routes/Welcome'
import { Authentication } from './routes/Authentication'
import { YourBudget } from './routes/YourBudget'
import { YourPlan } from './routes/YourPlan'
import { YourPayment } from './routes/YourPayment'
import { Home } from './routes/Home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Welcome path='/welcome' />
        <YourBudget path='/your-budget' />
        <Authentication path='/authentication' />
        <YourPlan path='/your-plan' />
        <YourPayment path='/your-payment' />
        <Home path='/' />
      </Router>
    )
  }
}

export default App
