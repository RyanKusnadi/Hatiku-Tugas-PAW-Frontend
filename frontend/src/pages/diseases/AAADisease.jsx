import React, {useState} from 'react'
import loginImg from '../../assets/Login.jpg'
import {Link, useNavigate} from 'react-router-dom'
const initialState ={
    diseaseName:"Abdominal Aortic Aneurysm",
    diseaseDescription:"Abdominal aortic aneurysm is a bulge or ballooning in the aorta, the major blood vessel that carries blood from the heart to the rest of the body. It is caused by a weakening of the blood vessel wall which can result in a rupture if left untreated. Abdominal aortic aneurysms are usually treated with surgery to prevent life-threatening bleeding.",
    diseaseReccomendation:"If you are at risk for an abdominal aortic aneurysm, it is important for you to seek a physician's  monitoring. It is recommended that they have regular checkups with their doctor and have imaging tests such as an ultrasound or CT scan to monitor the size of the aneurysm. If the aneurysm is found to be growing, it may be necessary for them to have surgery to repair or replace the aorta. Additionally, it is important for them to make lifestyle changes to reduce their risk of the aneurysm rupturing. This includes quitting smoking, eating a healthy diet, maintaining a healthy weight, exercising regularly, and controlling any underlying conditions such as hypertension or diabetes."
};

export default function AAADisease() {
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