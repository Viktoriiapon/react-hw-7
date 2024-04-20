import React from 'react'


const LoginForm = () => {
    const loginId = useId();
    const passwordId = useId();
  
    return (
      <form>
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" id={loginId} />
  
        <label htmlFor={passwordId}>Password</label>
        <input type="password" name="password" id={passwordId} />
  
        <button type="submit">Login</button>
      </form>
    );
  };
  



  export default LoginForm;