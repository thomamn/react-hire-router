import { useNavigate } from "react-router-dom"



function PeopleListItem(props,setHiredPeople) {
  
  const { person } = props

  

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
