import { Component } from "react";

export default class Users extends Component {

constructor(){

 
super()
this.state={
users:[
    {id:1, name:"Shrouk", email:"shrouk@gmail.com", isAdmin:false},
    {id:2, name:"Montaser", email:"Montaser17@gmail.com", isAdmin:true},
    {id:3, name:"Motasem", email:"Motasem@gmail.com", isAdmin:false},
    {id:4, name:"Ahmed", email:"Ahmed@gmail.com", isAdmin:false},
], isAuthenticated:true
}
}
   
handleChange=()=>{
    this.setState({isAuthenticated:!this.state.isAuthenticated});
}

//Conditional rendering//
render(){
  return <>
  {/* //&& acts as if condition  only*/  } 

  {/* {this.state.isAuthenticated && <ul>
    {this.state.users.map((user)=>{
        if(!user.isAdmin){
            return <li key={user.id}> {user.name}</li>
        }
    })}
</ul>}  */}



{/* //ternary operator     acts as if else condition */  } 
{(this.state.isAuthenticated)? <ul>
    {this.state.users.map((user)=>{
        if(!user.isAdmin){
            return <li key={user.id}> {user.name}</li>
        }
    })}
</ul>:<p>You must login first</p>}

<button className="btn btn-success" onClick={()=>{this.handleChange()}}> toggle user</button>
{/* <button onClick={()=>{this.changeName()}}>Change name</button>  */}

</>
}
}