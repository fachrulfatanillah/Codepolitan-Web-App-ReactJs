import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Codepolitan</Link>
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/premium">Premium</Link>
            <Link className="nav-item nav-link" to="/devschool">DevSchool</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<h4>Home</h4>} />
          <Route path="/premium" element={<h4>Premium</h4>} />
          <Route path="/devschool" element={<h4>DevSchool</h4>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
