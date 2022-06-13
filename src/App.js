import './assets/css/styles.css'
import './assets/css/custom.css'
import './assets/js/scripts'
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Blog from './components/pages/blog/Blog';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="blogs" element={<Blog/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
