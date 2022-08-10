import { useEffect, useState } from "react";
import { logo } from "../../assets";

export function SignIn() {
  const [name, setName] = useState('');
  const colorButton = name.length >= 5 ? true : false;

  return (
    <div 
      className="h-screen flex flex-1 flex-col justify-center items-center"
    >
      <img src={logo} />
      
      <form 
        className='bg-[#ffffff] flex w-[21rem] flex-col mt-3 p-5 rounded-lg shadow-[1px_1px_1px_1px_rgba(0,0,0,0.3)] md:w-[26rem]'
        onSubmit={() => {}}
      >
        <span 
          className='text-center text-[#05799E] text-[12px] md:text-sm'
        >
          Manipule os dados dos seus pets, e consiga uma<br /> 
          organização de todos os bichinhos do seu <br />
          <strong>petshop</strong>.
        </span>

        <input 
          className='bg-[#f2f2f2] focus:outline-none rounded-lg p-2 mt-3'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)} 
          type="text" 
          required 
        />
      
        {
          colorButton ?
          <button
            className='bg-[#49B7E7] focus:outline-none rounded-lg mt-3 mb-3 p-2'
            type="submit"
          >
            <strong className='text-[#FFFFFF]'>Login</strong>
          </button> :
          <button
            className='bg-[#BCBCBC] focus:outline-none rounded-lg mt-3 mb-3 p-2'
            disabled
          >
            <strong className='text-[#242424]'>Login</strong>
          </button>
        }
        
      </form>
    </div>
  )
}