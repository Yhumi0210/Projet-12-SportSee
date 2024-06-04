import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/scss/index.scss'
import HomePage from './components/HomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </Router>
)
