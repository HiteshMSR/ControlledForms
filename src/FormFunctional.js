import React from 'react';
import {useState} from 'react';


export default function FormFunctionalComponent(){
  const[state,setstate]=useState({
    firstName:'',
    lastName:'',
    email: '',
      gender: '',
      courses: 'react',
    } );

 const [errors, setErrors]=useState({
  firstName:'',
  lastName:'',
  email: '',
    gender: '',
 });

 function handleSubmit(e){
  e.preventDefault();
  var errkeys=Object.keys(state).filter((key)=>{
    if(state[key]===''){
      return key;
    }
  })
   if(errkeys.length>=1){
     alert('Please fill all the fields');
   }
   else{
     console.log("state is:"+state+"errors is:"+errors)
   }
}

 function handleChange(e){
   if(e.target.value===''){
     setErrors({ ...errors, [e.target.name]: `${e.target.name} is Required`})
   }else{
     setErrors({...errors, [e.target.name]:''})
   }
   setstate({...state,[e.target.name]:e.target.value});
   {console.log(state)}
 }
 
 

return(
  <>
  <h3>Controlled Form using Functional Component....</h3>
  <form onSubmit={(e) =>handleSubmit(e)}>
          <div>
            <label> First Name: </label>
            <input type="text"  name="firstName" onChange={(e)=>handleChange(e)}/>
            <br/>
            <span style={{ color: 'red' }}>{errors.firstName}</span>
      
          </div>
          <br />

          <div>
            <label> Last Name: </label>
            <input    type="text" name="lastName" onChange={(e)=>handleChange(e)}/>
            <br/>
            <span style={{ color: 'red' }}>{errors.lastName}</span>
          </div>
          <br />

          <div>
            <label> Email: </label>
            <input type="email"  name="email" onChange={(e)=>handleChange(e)}/>
            <br/>
            <span style={{ color: 'red' }}>{errors.email}</span>
           </div>
          <br />

          <div>
            <label> Gender: </label>
            <input type="radio" name="gender" value="male" onChange={(e)=>handleChange(e)}/> Male
            <input type="radio" name="gender" value="Female" onChange={(e)=>handleChange(e)}/> Female
            <br />
            <br/>
            <span style={{ color: 'red' }}>{errors.gender}</span>
          </div>

          <br />
          <div>
            <label> Courses: </label>
            <select name="courses" onChange={(e)=>handleChange(e)}
            >
              <option value="react"> React </option>
              <option value="node"> Node </option>
              <option value="mysql"> MySQL </option>
              <option value="mongo"> Mongo </option>
            </select>
          </div>
          <br />

          <button type="submit"> Submit </button> &nbsp;
          <button type="button"> Reset </button> &nbsp;
        </form>
  </>
);
}



