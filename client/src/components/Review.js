import React from 'react'

const Review = ({description}) => {

  return (
    <tr>
      <td>{description}</td>
      <td><button> Edit </button></td>
      <td><button> Delete </button></td>
    </tr>
  )
}

export default Review