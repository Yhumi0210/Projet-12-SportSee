import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/scss/index.scss'
import HomePage from './components/pages/HomePage.jsx'
import UserSelection from './components/pages/UserSelection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<UserSelection />} />
            <Route path="/user/:userId" element={<HomePage />} />
        </Routes>
    </Router>
)