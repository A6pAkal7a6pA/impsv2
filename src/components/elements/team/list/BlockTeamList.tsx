import React from 'react'
import { Person } from '../person/Person'
import { persons } from '../Team'

export const BlockTeamList = () => {
  return (
    <div className="team__people">
      {persons.map((person, index) => (
        <Person
          key={index}
          linkedIn={person.linkedIn}
          name={person.name}
          position={person.position}
          photo={person.photo}
          photoWebp={person.photoWebp}
          descriptions={person.descriptions}
        />
      ))}
    </div>
  )
}
