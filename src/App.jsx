import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import About from './About.jsx'
import Menu from './Menu.jsx'
import Contact from './Contact.jsx'

function Navbar() {
  return (
    <nav style={{backgroundColor: '#2E1A15', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <Link to="/" style={{color: '#D4A373', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none'}}>Abod's Coffee</Link>
      <div style={{display: 'flex', gap: '30px'}}>
        <Link to="/" style={{color: '#FFF8E1', textDecoration: 'none', fontSize: '18px'}}>Home</Link>
        <Link to="/about" style={{color: '#FFF8E1', textDecoration: 'none', fontSize: '18px'}}>About</Link>
        <Link to="/menu" style={{color: '#FFF8E1', textDecoration: 'none', fontSize: '18px'}}>Menu</Link>
        <Link to="/contact" style={{color: '#FFF8E1', textDecoration: 'none', fontSize: '18px'}}>Contact</Link>
      </div>
    </nav>
  )
}

function Home() {
  const [ordered, setOrdered] = useState(false)
  return (
    <div>
      <Navbar />
      <div style={{backgroundColor: '#3E2723', color: '#FFF8E1', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'Arial', padding: '40px', textAlign: 'center'}}>
        
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400" 
          alt="Coffee Cup"
          style={{width: '250px', borderRadius: '20px', marginBottom: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)'}}
        />

        <h1 className="main-title">Abod's Coffee House</h1>
        <h2 className="sub-title">Crafted Coffee, Warm Moments</h2>
        <button onClick={() => setOrdered(true)} style={{padding: '16px 48px', fontSize: '18px', backgroundColor: '#D4A373', color: '#3E2723', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '30px'}}>
          {ordered ? 'Order Received' : 'Order Now'}
        </button>
        {ordered && <p style={{marginTop: '20px'}}>Your coffee will be ready in 5 minutes</p>}
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<><Navbar /><About /></>} />
        <Route path="/menu" element={<><Navbar /><Menu /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /></>} />
      </Routes>
    </Router>
  )
}

export default App