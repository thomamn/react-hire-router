import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import PersonProfile from './pages/PersonProfile';
import { useEffect } from 'react'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => setPeople(data.result))
  }, []
  )



  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/view">PersonProfile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
          path="/Dashboard" 
          element={<Dashboard props={[people, setHiredPeople]}/>} />
        <Route
          path="/view/:id"
          element={<PersonProfile person={people}/>}
        />
      </Routes>
    </>
  )
}
