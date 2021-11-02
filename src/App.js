import React, { useState } from 'react'
import Child from './child';

const App = (props) => {
  const [data, setData] = useState([])
  const formData = (a) => {
    let newArr = []
    let num = a.no
    const arr = ['APPLE', 'BOY', 'CAT']
    for (let i = 0; i < num; i++) {
      let b = arr[i % arr.length]
      newArr.push(b)

    }
    setData(newArr)
  }


  return (
    <div>
      <h1>{data.map((ele, i) => {
        return <li key={i}>{ele}</li>
      })}</h1>
      <Child formData={formData} />
    </div>
  )
}

export default App;
