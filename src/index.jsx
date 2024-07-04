import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/scss/index.scss'
import HomePage from './components/pages/HomePage.jsx'
import UserSelection from './components/pages/UserSelection.jsx'

/**
 * The main entry point of the application.
 * This function sets up the router and renders the root component.
 * It defines the routes for the application.
 *
 * Routes:
 * - "/" renders the UserSelection component.
 * - "/user/:userId" renders the HomePage component.
 *
 */

// Render the application to the root element
ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<UserSelection />} />
            <Route path="/user/:userId" element={<HomePage />} />
        </Routes>
    </Router>
)
