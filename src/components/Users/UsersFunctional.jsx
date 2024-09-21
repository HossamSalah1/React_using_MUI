import React, { useEffect, useState } from 'react'

export default function UsersFunctional() {
    //react Hooks (Functions)  //v 16.8
    //1- setState
   
const [users,setUsers]=useState([
    {id:1, name:"Shrouk", email:"shrouk@gmail.com", isAdmin:false},
    {id:2, name:"Montaser", email:"Montaser17@gmail.com", isAdmin:true},
    {id:3, name:"Motasem", email:"Motasem@gmail.com", isAdmin:false},
    {id:4, name:"Ahmed", email:"Ahmed@gmail.com", isAdmin:false},
])

const [isAuth, setAuth]=useState(true)


const handleChange =()=>(
setAuth(!isAuth)
)


 //2- useEffect  ==> life cycle methods
useEffect(()=>{
//mounting
console.log('from mounting');
},[])  //when i want to call function or do logic when the component start or mount []
//array if dependence

useEffect(()=>{
    //component updating
console.log('isAuth updated..');

//routing
// return()=>{
//     console.log('unmounting...');
// }
},[isAuth])

useEffect(()=>{
    //any updates happens
    console.log('test');
})



  return (
    <>
   
    {(isAuth)?<ul>
    {users.map(user=>{
        if(!user.isAdmin){
        return <li key={user.id}>{user.name}</li>
        }
    })}
    </ul>:<p>you must login first</p>}
    
<button className='btn btn-primary' onClick={()=>{handleChange()}}>Toggle users</button>
    </>
  )
}

