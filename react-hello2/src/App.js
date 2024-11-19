import './App.css';
import HeaderComponent from './components/HeaderComponent';
import AboutPage  from './pages/AboutPage';
import  ContactPage  from './pages/ContactPage';
import  HomePage  from './pages/HomePage';
import  {CartPage}  from './pages/CartPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 




function App() {
  

return (
  <div className="App">
    <Router>
  <HeaderComponent/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/cart" element={<CartPage />} />
  </Routes>
</Router>
</div>
);
}

export default App;
