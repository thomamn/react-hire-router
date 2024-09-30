import { useState } from 'react'
import PeopleList from './components/PeopleList'
import { useEffect } from 'react'

function Dashboard(props) {
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
        <PeopleList props={props} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList props={props}/>
      </section>
    </main>
  )
}

export default Dashboard
