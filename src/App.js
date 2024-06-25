import React from 'react';
import MyNavbar from './components/Navbar';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import ImageComponent from './components/ImageComponent';
import OptionComponent from './components/OptionComponent';
// import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <MyNavbar />
        <Routes>
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Routes>
      </div>
    </Router>
      <ImageComponent />
      <OptionComponent />
      
    </div>
  );
}

export default App;
