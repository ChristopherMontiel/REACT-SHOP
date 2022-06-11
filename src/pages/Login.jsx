import React, { useRef } from 'react';
import '@styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  //useRef se usa   para referenciar al elemento del form mas abajo con el atributo ref.
  const form = useRef(null);

  //event se usará para prevenir que se recarge la pagina al hacer click en el boton del formulario.
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);

    const data = {
      username: formData.get('email'),
      password: formData.get('password')
    }
    console.log(data);
  }

  return (
    <div className="login">
    <div className="form-container">
      <img src= {logo} alt="logo" className="form-logo" />
      <form action="/" className="form" ref= { form }>
        <label for="email" className="label">Email address</label>
        <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />
        <label for="password" className="label">Password</label>
        <input type="password" name="password" placeholder="*********" className="input input-password" />
        <button 
          className="primary-button login-button" 
          onClick={handleSubmit} >
          Log In
        </button>
        <a href="/">Forgot my password</a>
      </form>
      <button className="secondary-button signup-button">Sign up</button>
    </div>
  </div>
  );
}

export default Login;