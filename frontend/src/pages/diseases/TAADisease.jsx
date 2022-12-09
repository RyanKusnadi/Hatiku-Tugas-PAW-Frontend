import React, {useState} from 'react'
import loginImg from '../../assets/Login.jpg'
import {Link, useNavigate} from 'react-router-dom'
const initialState ={
    diseaseName:"Thoracic Aortic Aneurysms",
    diseaseDescription:"Thoracic Aortic aneurysms are a serious medical condition where the aorta, the largest artery in the body, balloons out and becomes weakened. This can cause a tear in the artery wall as well as a rupture, both of which can be fatal if not treated quickly. Treatment for thoracic aortic aneurysms often involves open surgery to repair the aneurysm or to replace the weakened section of the aorta.",
    diseaseReccomendation:"A recommendation for someone at risk of thoracic aortic aneurysms is to seek medical attention immediately if they experience any symptoms. Symptoms of thoracic aortic aneurysms may include chest pain, shortness of breath, dizziness, and a feeling of impending doom. Additionally, individuals at risk should follow up with their physician regularly and make lifestyle changes that can reduce their risk, such as maintaining a healthy weight, eating a balanced diet, not smoking, and avoiding excessive alcohol consumption."
};

export default function TAADisease() {
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