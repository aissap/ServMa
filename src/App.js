import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CreateProfile from './pages/CreateProfile';
import ListServices from './pages/ListServices';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import LogOut from './pages/LogOut';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/list-services" element={<ListServices />} />
           <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/log-out" element={<LogOut />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
