import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginPage.css';

const API_URL = process.env.REACT_APP_API_URL;

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      const data = await response.json();
      sessionStorage.setItem('token', data.token);
      console.log(data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('token')) sessionStorage.removeItem('token');
  });

  return (
    <div className="login-page">
      {/* <div className="login_title">
          <h1>MAKO LMS</h1>
        </div> */}
      <div className="login_form">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>login</button>
          {error && <p className="error">{error}</p>}
          <p className="message">
            Not registered?{' '}
            <a href="#" onClick={() => navigate('/register')}>
              Create an account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

// import React from 'react';
// import './loginPage.css';
// import './loginPage.js'

// function handleLogin(event) {
//   event.preventDefault();

//   const email = document.getElementById('login-email').value;
//   const password = document.getElementById('login-password').value;

//   fetch('/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password
//     })
//   })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // handle successful login, e.g. store token in local storage and redirect to dashboard
//   })
//   .catch(error => {
//     // handle error, e.g. display error message to user
//   });
// }

// function LoginPage() {
//   return (
//     <div>
//         <div className="login-page">
//             <div className='title'> <h1>OMAK LMS</h1> </div>
//           <div className="form">
//             <form className="register-form" id="register-form">
//               <input type="text" placeholder="name"/>
//               <input type="password" placeholder="password"/>
//               <input type="text" placeholder="email address"/>
//               <button>create</button>
//               <p className="message">Already registered? <a href="#">Sign In</a></p>
//             </form>
//             <form className="login-form" id="login-form">
//               <input type="text" placeholder="email"/>
//               <input type="password" placeholder="password"/>
//               <button>login</button>
//               <p className="message">Not registered? <a href="#">Create an account</a></p>
//             </form>
//           </div>
//         </div>
//     </div>
//   );
// }

// export default LoginPage;
