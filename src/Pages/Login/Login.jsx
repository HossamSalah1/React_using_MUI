import React, { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors,setErrors]=useState({
    emailError: "",
    passwordError: "",
  })
  //console.log(user);
  const handleValidation = (evt) => {
    //console.log(evt.target.name);
    if (evt.target.name == "email") {
     setUser({...user,email: evt.target.value}); //email: "",  password: "",
     setErrors({...errors,emailError:(evt.target.value.length==0)?'email is required':(evt.target.value.includes("@"))?'':"invalid email"})
    //  console.log(user);
    } else {
      // setUser()
   setUser({...user,password:evt.target.value});//email: "shrouk",  password: "",
    //  console.log(user);
    }
  };
 const handleSubmit=(e)=>{
e.preventDefault();
if(!errors.emailError&&!errors.passwordError){
  console.log(user);
}


 }
  return (
    <>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => {
              handleValidation(e);
            }}

            name="email"
        className={`form-control ${(errors.emailError)?'border-danger shadow-none m-4':'m-4'}`}
          />
          <p className="text-danger">{errors.emailError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => {
              handleValidation(e);
            }}
            name="password"
            className="form-control"
            id="exampleInputPassword1"
          />

        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
