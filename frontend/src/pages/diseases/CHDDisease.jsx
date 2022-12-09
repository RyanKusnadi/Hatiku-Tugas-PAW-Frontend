import React, {useState} from 'react'
import loginImg from '../../assets/Login.jpg'
import {Link, useNavigate} from 'react-router-dom'
const initialState ={
    diseaseName:"Coronary Heart Disease",
    diseaseDescription:"Coronary heart disease is a type of cardiovascular disease caused by the buildup of plaque in the walls of the arteries that supply blood to the heart. This can lead to an irregular heartbeat, chest pain, and potentially a heart attack.",
    diseaseReccomendation:"Treatment typically includes lifestyle changes, such as eating healthier and engaging in regular physical activity, as well as taking medications prescribed by a doctor."
};

export default function CHDDisease() {
  return (
    <div className='relative w-full h-screen'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[800px] w-full mx-auto rounded-lg bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-3'>Disease Details</h2>
            {/* <h3 className='text-center pb-8'>Login untuk melanjutkan</h3> */}
            
            <div className='flex flex-col mb-4'>
                <label className='my-2 relative rounded bg-gray-300 p-2 font-bold'>{initialState.diseaseName}</label>
                <label className='my-2 relative rounded bg-gray-300 p-2'>Description: {initialState.diseaseDescription}</label>
                <label className='my-2 relative rounded bg-gray-300 p-2'>Reccomendation: {initialState.diseaseReccomendation}</label>
                <Link to={"/Result"} >
                <button className='p-2 mr-2 font-semibold py-2 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>Return</button>
                </Link>
            </div>
        </form>
    </div>
    </div>
  )
}