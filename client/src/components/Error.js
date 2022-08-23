import React from 'react'

function Error({ error }) {

  console.log(error)
  return (
      <p>{error}</p>
  );
}

export default Error;
