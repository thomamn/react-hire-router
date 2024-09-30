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
    fetch('https://randomuser.me/documentation')
    .then(res => res.json())
    .then(people => setPeople(people))
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
              <Link to="/profiles">PersonProfile</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
          path="/Dashboard" 
          element={<Dashboard people={people} hiredPeople={hiredPeople}/>} />
        <Route
          path="/PersonProfile"
          element={<PersonProfile person={people}/>}
        />
      </Routes>
    </>
  )
}
