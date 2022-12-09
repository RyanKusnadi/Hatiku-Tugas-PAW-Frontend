import React, {useState} from 'react'
import loginImg from '../assets/Login.jpg'
import {link, useNavigate} from 'react-router-dom'

const initialState = {
    username: "",
    age:null,
    gender:null,
    height:null,
    weight:null,
    ap_hi:null,
    ap_lo:null,
    cholesterol:null,
    gluc:null,
    smoke:null,
    alco:null,
    active:null,
    racial_identity:null,
    blood_clotting_disorder:null,
    kidney_disease:null,
    chest_pains:null,
    breathlessness:null,
    nausea:null,
    faintings:null,
    fatigue:null,
    swollen_ankles:null,
    drastic_weight_changes:null, 
    bloating:null,
    loss_of_appetite:null,
    dizziness_confusion:null,
    palpitations:null,
    atrial_fibrillation:null,
    sudden_headache:null,
    sudden_lossofvision:null,
    face_dropping:null,
    numbness:null,
    speech_problem:null,
    leg_pain_cramping:null,
    burning_aching_toes:null,
    cool_feet_skin:null,
    redness_colorchanges_skin:null,
    back_pain:null,
    coughing:null,
    hoarseness:null,
    tenderness_pain_chest:null,
    sharp_sudden_pain_upperback:null,
    pain_chest_jaw_neck_arms:null,
    loss_of_consciousness:null,
    difficulty_breathing:null,
    trouble_swallowing_food:null,
    deep_constant_belly_pain:null,
    family_history_coronaryheartdisease:null,
    personal_family_history_blood_bloodvesseldisease:null
}

export default function Diagnose() {
    const [formData, setFormData] = useState(initialState);
    const {
        username,
        age,
        gender,
        height,
        weight,
        ap_hi,
        ap_lo,
        cholesterol,
        gluc,
        smoke,
        alco,
        active,
        racial_identity,
        blood_clotting_disorder,
        kidney_disease,
        chest_pains,
        breathlessness,
        nausea,
        faintings,
        fatigue,
        swollen_ankles,
        drastic_weight_changes, 
        bloating,
        loss_of_appetite,
        dizziness_confusion,
        palpitations,
        atrial_fibrillation,
        sudden_headache,
        sudden_lossofvision,
        face_dropping,
        numbness,
        speech_problem,
        leg_pain_cramping,
        burning_aching_toes,
        cool_feet_skin,
        redness_colorchanges_skin,
        back_pain,
        coughing,
        hoarseness,
        tenderness_pain_chest,
        sharp_sudden_pain_upperback,
        pain_chest_jaw_neck_arms,
        loss_of_consciousness,
        difficulty_breathing,
        trouble_swallowing_food,
        deep_constant_belly_pain,
        family_history_coronaryheartdisease,
        personal_family_history_blood_bloodvesseldisease
    } = formData  

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value})
    }
  return (
    <div className='relative w-full h-screen'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='pt-10 justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-3'>Selamat Datang</h2>
            <h3 className='text-center pb-8'>Isi form untuk mendapatkan diagnosis</h3>
            
            <div className='flex flex-col'>
                <label>Name</label>
                <input 
                type = "text"
                required
                name = "username"
                value = {username}
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan nama anda'
                />
            </div>

            <div className='flex flex-col '>
                <label>Gender</label>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "gender"
                value = '1'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Female</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100">
                <input 
                type = "radio"
                required
                name = "gender"
                value = '2'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Male</label>
                </div>
            </div>

            <div className='flex flex-col '>
                <label>Age</label>
                <input 
                type = "number"
                required
                name = "age"
                value = {age}
                onChange = {handleInputChange}

                className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan umur anda (tahun)'
                />
            </div>

            <div className='flex flex-col '>
                <label>Height</label>
                <input 
                type = "number"
                required
                name = "height"
                value = {height}
                onChange = {handleInputChange}

                className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan tinggi anda (cm)'
                />
            </div>

            <div className='flex flex-col '>
                <label>Weight</label>
                <input 
                type = "number"
                required
                name = "weight"
                value = {weight}
                onChange = {handleInputChange}

                className='placeholder:text-gray-400 border relative rounded bg-gray-100 p-3' placeholder='Masukkan berat anda (kg)'
                />
            </div>
            
            <div className='flex flex-col '>
                <label>Glucose Level</label>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "gluc"
                value = '1'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Normal</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "gluc"
                value = '2'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Above Normal</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "gluc"
                value = '3'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Well Above Normal</label>
                </div>

            </div>

            <div className='flex flex-col '>
                <label>Cholesterol Level</label>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "cholesterol"
                value = '1'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Normal</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "cholesterol"
                value = '2'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Above Normal</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "cholesterol"
                value = '3'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Well Above Normal</label>
                </div>

            </div>

            <div className='flex flex-col '>
                <label>Racial Identity</label>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "racial_identity"
                value = 'caucasian'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Caucasian</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "racial_identity"
                value = 'african'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>African</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "racial_identity"
                value = 'asian'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Asian</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = "racial_identity"
                value = 'others'
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Others/ Prefer not to say</label>
                </div>

            </div>

            <button className='font-semibold w-full py-3 mt-8 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>Diagnose</button>
        </form>
    </div>
    </div>
  )
}