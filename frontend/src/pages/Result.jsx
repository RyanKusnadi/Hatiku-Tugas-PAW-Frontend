import React, {useState} from 'react'
import loginImg from '../assets/Login.jpg'
import {Link, useNavigate} from 'react-router-dom'

import { useStateContext } from '../contexts/ContextProvider';


export default function Result() {
    const initialState ={
        number_of_positive: 0,
        number_of_total: 4,
        coronary_heart_disease: 0.1,
        stroke: 0.1,
        peripheral_arterial_disease: null,
        thoracic_aortic_aneurysm: null,
        abdominal_aortic_aneurysm: null
    };
  var riskResult = initialState.number_of_positive>0?"You are at risk of having any Cardiovascular Disease":"You are not at risk of having any Cardiovascular Disease."
  var riskResultExplanation = initialState.number_of_positive + " out of " + initialState.number_of_total + " of our models determine that you are at risk of having any Cardiovascular Disease."    
  var CHDResult = initialState.coronary_heart_disease>0?"Our expert system determines that you may have Coronary Heart Disease with "+initialState.coronary_heart_disease +" confidence.":"you are not at risk of having Coronary Heart Disease"
  var StrokeResult = initialState.stroke>0?"Our expert system determines that you may be at risk of Stroke with "+initialState.stroke +" confidence.":"you are not at risk of having Stroke"
  var PADResult = initialState.thoracic_aortic_aneurysm>0?"Our expert system determines that you may have Peripheral Arterial Disease with "+initialState.peripheral_arterial_disease +" confidence.":"you are not at risk of having Peripheral Arterial Disease"
  var TAAResult = initialState.thoracic_aortic_aneurysm>0?"Our expert system determines that you may have Thoracic Aortic Aneurysm with "+initialState.thoracic_aortic_aneurysm +" confidence.":"you are not at risk of having Thoracic Aortic Aneurysm"
  var AAAResult = initialState.abdominal_aortic_aneurysm>0?"Our expert system determines that you may have Abdominal Aortic Aneurysm with "+initialState.abdominal_aortic_aneurysm +" confidence.":"you are not at risk of having Abdominal Aortic Aneurysm"

  return (
    <div className='relative w-full h-screen'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[800px] w-full mx-auto rounded-lg bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-3'>Risk Evaluation</h2>
            {/* <h3 className='text-center pb-8'>Login untuk melanjutkan</h3> */}
            
            <div className='flex flex-col mb-4'>
                <label className='border relative rounded bg-gray-300 p-3'>{riskResult}</label>
                <label className='border relative rounded bg-gray-300 p-3'>{riskResultExplanation}</label>
            </div>
            
            <h2 className='text-4xl font-bold text-center py-3'>Diagnosis Result</h2>
            {/* <h3 className='text-center pb-8'>Login untuk melanjutkan</h3> */}
            
            <div className='flex flex-col mb-4'>
                <div class="justify-between flex items-center border relative rounded bg-gray-300 p-3'">
                    <label className='relative rounded bg-gray-300 p-3'>{CHDResult}</label>
                    <Link to={"CoronaryHeartDisease"} >
                    <button className='p-2 mr-2 font-semibold py-2 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>More Info</button>
                    </Link>
                    
                </div>
                
                <div class="justify-between flex items-center border relative rounded bg-gray-300 p-3'">
                <label className='relative rounded bg-gray-300 p-3'>{StrokeResult}</label>
                    <Link to={"Stroke"} >       
                    <button className='p-2 mr-2 font-semibold py-2 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>More Info</button>
                    </Link>
                </div>

                <div class="justify-between flex items-center border relative rounded bg-gray-300 p-3'">
                <label className='relative rounded bg-gray-300 p-3'>{PADResult}</label>
                    <Link to={"PeripheralArterialDisease"} >
                        <button className='p-2 mr-2 font-semibold py-2 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>More Info</button>
                    </Link>
                </div>

                <div class="justify-between flex items-center border relative rounded bg-gray-300 p-3'">
                <label className='relative rounded bg-gray-300 p-3'>{TAAResult}</label>
                    <Link to={"ThoracicAorticAneurysms"} >
                    <button className='p-2 mr-2 font-semibold py-2 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>More Info</button>
                    </Link>
                </div>

                <div class="justify-between flex items-center border relative rounded bg-gray-300 p-3'">
                <label className='relative rounded bg-gray-300 p-3'>{AAAResult}</label>
                <Link to={"AbdominalAorticAneurysm"} >
                    <button className='p-2 mr-2 font-semibold py-2 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>More Info</button>
                </Link>
                </div>
                
                <Link to={"/"} >
                <button className='my-2 p-2 mr-2 font-semibold py-2 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>Home</button>
                </Link>
            </div>

        </form>
    </div>
    </div>
  )
}