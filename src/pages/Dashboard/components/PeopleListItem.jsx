import { useNavigate } from "react-router-dom"



function PeopleListItem({person, setHiredPeople}) {
  
  //const { person } = props
  console.log(person)
  

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}

      <button onClick={()=>setHiredPeople(prev => [...prev, person])}>
        Hire
      </button>
    </li>
  )
}

export default PeopleListItem
