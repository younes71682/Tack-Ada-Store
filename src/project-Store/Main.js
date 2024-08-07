import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Provider } from 'react-redux';
import stroe from './redux/store';
import Navbar from './components/layout/Navbar';

const Main = () => {
    return (
        <Provider store={stroe}>
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

export default Main;