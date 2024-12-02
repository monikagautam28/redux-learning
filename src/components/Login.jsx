import React from 'react'

export default function Login() {
  return (
    <div className='login-container'> 
        <form className='login-form'>
            <label>Name</label>
            <input type ="text"/>
            <label>Name</label>
            <input type ="text"/>
       <input type = "submit" value ="login"/>
        </form>
    </div>
  )
}
