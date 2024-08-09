import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './project-Store/pages/HomePage';
import CartPage from './project-Store/pages/CartPage';
import Navbar from './project-Store/components/layout/Navbar';
import store from './project-Store/redux/store';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;