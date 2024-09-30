import { useState } from 'react'
import PeopleList from './components/PeopleList'
import { useEffect} from 'react'

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])


  useEffect(() => {
    fetch('https://randomuser.me/documentation')
    .then(res => res.json())
    .then(people => setPeople(people))
  }, []
  )

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
