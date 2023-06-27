import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register';
import Navbar from './components/Navbar';

import './style/Variables.css';
import './style/App.css';


function App() {
  return (
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar />
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/login"
                element={<Login />}
              />
              <Route 
                path="/register"
                element={<Register />}
              />
              {/* <Route 
                path="/:teamId"
                element={<Team />}
              /> */}
              
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
