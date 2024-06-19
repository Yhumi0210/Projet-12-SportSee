import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/scss/index.scss'
import HomePage from './components/HomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/user/:userId' element={<HomePage />} />
        </Routes>
    </Router>
)

// si je veux je peux ajouter une page sur laquelle je clique sur user 12 ou 18
// pour etre redirigé au lieu d'écrire l'URL