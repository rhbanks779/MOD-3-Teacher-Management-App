import ListTeacher from './Components/ListTeacher';
import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddTeacher from './Components/AddTeacher.jsx';
import UpdateTeacher from './Components/UpdateTeacher';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import ViewTeacher from './Components/ViewTeacher';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <div className="container">
          <Routes>
            <Route path='/teachers' element ={<ListTeacher />} />
            <Route path='/add-teachers' element ={<AddTeacher />}/>
            <Route path='/view-teacher/:id' element ={<ViewTeacher />}/>
            <Route path='/update-teachers/:id' element ={<UpdateTeacher />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
