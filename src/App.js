import './App.css';
import React from 'react';
import { Route, Routes, } from 'react-router-dom';
import Navbar from './pages/navbar';
import BookForm from './pages/addbook';
import FncDisplayBooks from './pages/displaybook';
import BookUpDateForm from './pages/update';
//import  DisplayData  from './comp/displaydata';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<h1>Welcome  Manager</h1>} />
                <Route path="/add-book" element={<BookForm />} />
                <Route path="/display-book" element={<FncDisplayBooks />} />
                <Route path="/update-book" element={<BookUpDateForm />} />
            </Routes>
        </div>
    );
}

export default App;