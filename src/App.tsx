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
    <div className="h-screen flex flex-1 flex-col justify-center items-center">
      <img src={logo} />
      
      <form 
        className='bg-[#ffffff] flex w-[21rem] flex-col mt-3 p-5 rounded-lg shadow-[1px_1px_1px_1px_rgba(0,0,0,0.3)]'
        onSubmit={handleSubmit}
      >
        <span className='text-center text-[#05799E] text-[12px]'>
          Manipule os dados dos seus pets, e consiga uma<br /> 
          organização de todos os bichinhos do seu <br />
          <strong>petshop</strong>.
        </span>

        <input 
          className='bg-[#f2f2f2] focus:outline-none rounded-lg p-2 mt-3'
          placeholder='Name'
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          type="text" 
          required 
        />
      
        <button 
          className=' bg-[#BCBCBC] focus:outline-none rounded-lg mt-3 mb-3 p-2'
          disabled
        >
          <strong className='text-[#242424]'>Login</strong>
        </button>
      </form>
    </div>
  )
}

export default App
