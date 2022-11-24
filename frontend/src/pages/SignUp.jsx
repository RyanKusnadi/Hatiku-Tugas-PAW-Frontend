import React from 'react'
import loginImg from '../assets/Login.jpg'

export default function Login() {
  return (
    <div className='relative w-full h-screen'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-3'>Daftar Sekarang</h2>
            
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan username' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan email' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan password' type="password" />
            </div>
            <button className='font-semibold w-full py-3 mt-8 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>LOGIN</button>
            <p className='text-center mt-8'>Sudah punya akun? Login sekarang</p>
        </form>
    </div>
    </div>
  )
}