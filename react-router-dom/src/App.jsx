import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Premium from './pages/Premium'
import DevSchool from './pages/DevSchool'

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <Link className="navbar-brand" to="/">Codepolitan</Link>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/premium">Premium</Link>
            <Link className="nav-item nav-link" to="/devschool">DevSchool</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/premium" element={<Premium/>} />
          <Route path="/devschool" element={<DevSchool/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
