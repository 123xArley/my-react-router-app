import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Product from './components/Product'
import Home from './components/Home'

function App() {
  
  return (
    <>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product/1">Product 1</Link>
            </li>
            <li>
              <Link to="/product/2">Product 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product  />} />
        </Routes>
      </div>
    </>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

export default App
