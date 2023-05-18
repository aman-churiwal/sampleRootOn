import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginPage'
import SignupForm from './SignupPage'
import Dashboard from './Dashboard'
import University from './University'
import Apply from './Apply'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/dashboard/" element={<Dashboard />}/>
                <Route path="/university/:id" element={<University />} />
            </Routes>
        </div>
    )
}

export default App