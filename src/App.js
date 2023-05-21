import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './component/Home.jsx';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';
import Videos from './component/Videos.jsx';
import Upload from './component/Upload.jsx';
import About from './component/About.jsx';
import Login from './component/Login.jsx';
import Signup from './component/Signup.jsx';
import Forgetpassword from './component/forgetpassword.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/About" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
