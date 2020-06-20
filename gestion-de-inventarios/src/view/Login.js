import React, { useEffect } from 'react'
// import { useHistory } from 'react-router-dom';
import Component1 from '../components/Component1';

const Login = () => {

  // let history = useHistory()
  useEffect(() => {
    // history.push("/sigin") // ejemplo de redireccionamiento
  }, [])

  return (
    <>
      <h1><i className="fa fa-user" /> Login component</h1>
      <Component1 />
    </>
  )
}

export default Login
