import React from 'react'

function test() {

    const hello = () => {
        console.log("hi");
    }
  return (
    <div>test

        <button onClick={hello}></button>

    </div>
  )
}

export default test