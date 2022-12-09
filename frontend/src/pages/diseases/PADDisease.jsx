import React, {useState} from 'react'
import loginImg from '../../assets/Login.jpg'
import {Link, useNavigate} from 'react-router-dom'
const initialState ={
    diseaseName:"Peripheral Arterial Disease",
    diseaseDescription:"Peripheral Arterial Disease (PAD) is a common circulatory condition in which narrowing of the arteries reduces blood flow to arms, legs and other parts of the body. It is caused by a build-up of fatty deposits, including cholesterol, in the arteries that supply blood to the legs and feet. Over time, PAD can lead to pain, numbness, and even gangrene in the affected areas.",
    diseaseReccomendation:"A person at risk of peripheral arterial disease should take steps to reduce their risk factors, such as quitting smoking, maintaining a healthy weight, exercising regularly, and eating a diet rich in fruits and vegetables. Additionally, they should visit their doctor regularly to monitor their blood pressure, cholesterol, and blood sugar levels, and discuss with their doctor any other lifestyle modifications they can make to reduce their risk. They should also be aware of the signs and symptoms of peripheral arterial disease, and seek medical attention immediately if they experience any of these symptoms."
};

export default function PADDisease() {
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