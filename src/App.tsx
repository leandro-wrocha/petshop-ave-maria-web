import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import reactLogo from './assets/react.svg';
import { auth } from './config/firebase';

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
      <img src={reactLogo} />
      
      <form 
        className='flex flex-col mt-3'
        onSubmit={handleSubmit}
      >
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
