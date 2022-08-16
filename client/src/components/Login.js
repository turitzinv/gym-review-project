import React from 'react'

const Login = () => {
  return (
    <form id="login-form">
    <div class="mb-3">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Username" width/>
</div>
<div class="mb-3">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Password" width/>
</div>
<button type="submit" class="btn btn-dark">Log In</button>
    </form>
  )
}

export default Login