import { useState } from 'react'
import './App.scss'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Album from './pages/Album';

function App() {
  return (
    <>
    <Header />
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/albums/:id" element={<Album />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
