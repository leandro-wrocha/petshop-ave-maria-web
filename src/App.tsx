import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { auth } from './config/firebase';

import logo from './assets/logo.png';

interface IDataFirebaseLogin {
  auth: Auth,
  email: string,
  password: string
}

function App() {
  const [password, setPassword] = useState('');

  function handleSubmit() {
    const data = {
      auth,
      email: 'leandro@leandro.com',
      password
    }

    signInWithEmailAndPassword(data.auth, data.email, data.password)
      .then((value) => alert('User logs'))
      .catch((error) => {
        console.log(error)
        alert('User is no exists')
      })
  }

  return (
    <div className="bg-[#D8F6FF] h-screen flex flex-1 flex-col justify-center items-center">
      <img src={logo} />
      
      <form 
        className='bg-[#ffffff] flex flex-col mt-3 p-5 rounded-lg'
        onSubmit={handleSubmit}
      >
        <span className='text-center'>
          Manipule os dados dos seus pets, e consiga uma<br /> 
          organização de todos os bichinhos do seu <br />
          <strong>petshop</strong>.
        </span>

        <input 
          className='bg-gray-200 focus:outline-none rounded-lg p-2'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          type="text" 
          required 
        />
      
        <button 
          className=' bg-blue-400 focus:outline-none rounded-lg mt-3 p-2'
          type="submit"
        >
          <strong className='text-white'>Login</strong>
        </button>
      </form>
    </div>
  )
}

export default App
