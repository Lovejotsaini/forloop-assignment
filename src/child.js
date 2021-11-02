import React,{useState} from 'react'

const Child=(props)=>{
const [no,setNo]=useState(0)
const {formData}=props

const handleNoChange=(e)=>{
    setNo(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    const data={
        no:no
    }
    formData(data)
}

  return (
    <div>
         <form onSubmit={handleSubmit}>
             <input type="number" onChange={handleNoChange}/>
             <input type="submit"/>
         </form>
    </div>
  )
}

export default Child;
