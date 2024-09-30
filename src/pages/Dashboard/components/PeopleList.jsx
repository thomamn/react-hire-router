import PeopleListItem from './PeopleListItem'

function PeopleList(props, setHiredPeople) {
  const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} setHiredPeople={setHiredPeople}/>
      ))}
    </ul>
  )
}

export default PeopleList
