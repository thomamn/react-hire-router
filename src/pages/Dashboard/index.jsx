import { useState } from 'react'
import PeopleList from './components/PeopleList'
import { useEffect } from 'react'

function Dashboard(props, setHiredPeople) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(data => setPeople(data.results))
  }, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} setHiredPeople={setHiredPeople} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} setHiredPeople={setHiredPeople}/>
      </section>
    </main>
  )
}

export default Dashboard
