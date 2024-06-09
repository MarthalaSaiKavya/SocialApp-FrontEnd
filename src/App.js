import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Option from './components/Option';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/" element={<Option />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
