import React, {useState} from 'react'
import loginImg from '../assets/Login.jpg'
// import {link, useNavigate} from 'react-router-dom'
// import {useDispatch} from 'react-redux'
// import { SET_LOGIN, SET_NAME } from '../redux/features/authSlice'


const initialState ={
    email: "",
    password: "",
};

export default function Login() {

    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const [formData, setFormData] = useState(initialState);
    // const {email, password} = formData  

    // const login = async(e) =>{
    //     e.preventDefault();
    // }

    // const handleInputChange = (e) => {
    //     const {name, value} = e.target;
    //     setFormData({...formData, [name] : value})
    // }



  return (
    <div className='relative w-full h-screen'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-3'>Selamat Datang</h2>
            <h3 className='text-center pb-8'>Login untuk melanjutkan</h3>
            
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input 
                    // type = "email"
                    // required
                    // name = "email"
                    // value = {email}
                    // onChange = {handleInputChange}

                className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan email'
                />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input 
                // type = "password"
                // required
                // name = "password"
                // value = {password}
                // onChange = {handleInputChange}

                className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan password'
                />
            </div>
            <button className='font-semibold w-full py-3 mt-8 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>LOGIN</button>
            <p className='text-center mt-8'>Belum punya akun? Daftar sekarang</p>
        </form>
    </div>
    </div>
  )
}