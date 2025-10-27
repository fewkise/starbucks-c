import {React, useState, useEffect} from 'react'

const Section6 = () => {
const [array, setArray] = useState(["nyanyanya", "1212112", "1111111111", "such ass"])
useEffect(() => {
    if(array.length < 4){
        console.log ("массив изменился")
    }
  }, [array]); 

  return (
    <div>
      {array.map(function(item, i) {
        return <li style={{fontSize:"32px", color:"white"}} key={i}>{item}</li>
      })}
      <button onClick={()=> setArray(["121", "23"])}>123</button>
    </div>
  )
}

export default Section6
