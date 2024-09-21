import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function ContactUs() {
const navigate = useNavigate()


const handleNavigation=()=>{
navigate("/about")
}

const count = useSelector((state)=>state.counter.counter)
//console.log(x);


  return (
    <>ContactUs counter = {count}
    <br/>

    <button className='btn btn-primary' onClick={()=>{handleNavigation()}}> go to About us</button>

    </>
  )
}
