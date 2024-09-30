import PeopleListItem from './PeopleListItem'

function PeopleList({people, setHiredPeople}) {
  //const { people } = props

  return (
    <ul>
      {people.map((person, index) => (
        <PeopleListItem key={index} person={person} setHiredPeople={setHiredPeople}/>
      ))}
    </ul>
  )
}

export default PeopleList
