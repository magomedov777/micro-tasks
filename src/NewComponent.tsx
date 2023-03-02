import React from 'react'


type NewComponentType = {
  students: Array<StudentsType>
}

type StudentsType = {
    id: number,
    name: string, 
    age: number,
}



const NewComponent = (props: NewComponentType) => {
  return (
    <ul>
      {props.students.map((StudentsMapCount, index) => {
        return <li key={StudentsMapCount.id}>
          {StudentsMapCount.name}
          {StudentsMapCount.age}</li>
      })}
     </ul>
  )
}


















export default NewComponent;