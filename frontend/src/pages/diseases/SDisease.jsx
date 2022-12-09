import React, {useState} from 'react'
import loginImg from '../../assets/Login.jpg'
import {Link, useNavigate} from 'react-router-dom'
const initialState ={
    diseaseName:"Stroke",
    diseaseDescription:"Stroke is a medical condition in which the blood flow to an area of the brain is disrupted, resulting in a lack of oxygen and nutrients to the brain. Strokes can be caused by either a blockage of a blood vessel in the brain, or a rupture of a blood vessel in the brain.",
    diseaseReccomendation:"Making lifestyle changes to reduce cholesterol, blood pressure, and diabetes can help reduce the risk of stroke. Eating a healthy diet, exercising regularly, and quitting smoking can also help. Try to reduce your stress levels and make sure to get regular checkups with your doctor."
};

export default function SDisease() {
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