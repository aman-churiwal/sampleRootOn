import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginForm from './LoginPage'
import SignupForm from './SignupPage'
import Dashboard from './Dashboard'
import University from './University'
import Apply from './Apply'
import {Provider} from 'react-redux';
import {store} from '../redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<SignupForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/dashboard/" element={<Dashboard />}/>
                <Route path="/university" element={<University />} />
                <Route path="/apply" element={<Apply/>}/>
            </Routes>
        </Provider>
    )
}

export default App