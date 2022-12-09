import React, {useState} from 'react'
import loginImg from '../assets/Login.jpg'
import {Link, useNavigate} from 'react-router-dom'
import RiwayatList from '../assets/riwayat_penyakit'

import { useStateContext } from '../contexts/ContextProvider'


export default function Diagnose() {
    const initialState = {
        age:20,
        gender:2,
        height:175,
        weight:90,
        ap_hi:120,
        ap_lo:90,
        cholesterol:1,
        gluc:1,
        smoke:0,
        alco:0,
        active:0,
        racial_identity:"caucasian",
        blood_clotting_disorder:0,
        kidney_disease:0,
        chest_pains:0,
        breathlessness:0,
        nausea:0,
        faintings:0,
        fatigue:0,
        swollen_ankles:0,
        drastic_weight_changes:0, 
        bloating:0,
        loss_of_appetite:0,
        dizziness_confusion:0,
        palpitations:0,
        atrial_fibrillation:0,
        sudden_headache:0,
        sudden_lossofvision:0,
        face_dropping:0,
        numbness:0,
        speech_problem:0,
        leg_pain_cramping:0,
        burning_aching_toes:0,
        cool_feet_skin:0,
        redness_colorchanges_skin:0,
        back_pain:0,
        coughing:0,
        hoarseness:0,
        tenderness_pain_chest:0,
        sharp_sudden_pain_upperback:0,
        pain_chest_jaw_neck_arms:0,
        loss_of_consciousness:0,
        difficulty_breathing:0,
        trouble_swallowing_food:0,
        deep_constant_belly_pain:0,
        family_history_coronaryheartdisease:0,
        personal_family_history_blood_bloodvesseldisease:0
    }    

    const {upData, setData} = useStateContext();

    let response_temp = null;
    const [formData, setFormData] = useState(initialState);
    const {
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
        setFormData({...formData, [name] : value});
        console.log(formData);
    }

    const callDiagnosisAPI = (formData) => {
        var inputJSON = {
            "age":formData.age,
            "gender":formData.gender,
            "height":formData.height,
            "weight":formData.weight,
            "ap_hi":formData.ap_hi,
            "ap_lo":formData.ap_lo,
            "cholesterol":formData.cholesterol,
            "gluc":formData.gluc,
            "smoke":formData.smoke,
            "alco":formData.alco,
            "active":formData.active,
            "racial_identity":formData.racial_identity,
            "blood_clotting_disorder":formData.blood_clotting_disorder,
            "kidney_disease":formData.kidney_disease,
            "chest_pains":formData.chest_pains,
            "breathlessness":formData.breathlessness,
            "nausea":formData.nausea,
            "faintings":formData.faintings,
            "fatigue":formData.fatigue,
            "swollen_ankles":formData.swollen_ankles,
            "drastic_weight_changes":formData.drastic_weight_changes, 
            "bloating":formData.bloating,
            "loss_of_appetite":formData.loss_of_appetite,
            "dizziness_confusion":formData.dizziness_confusion,
            "palpitations":formData.palpitations,
            "atrial_fibrillation":formData.atrial_fibrillation,
            "sudden_headache":formData.sudden_headache,
            "sudden_lossofvision":formData.sudden_lossofvision,
            "face_dropping":formData.face_dropping,
            "numbness":formData.numbness,
            "speech_problem":formData.speech_problem,
            "leg_pain_cramping":formData.leg_pain_cramping,
            "burning_aching_toes":formData.burning_aching_toes,
            "cool_feet_skin":formData.cool_feet_skin,
            "redness_colorchanges_skin":formData.redness_colorchanges_skin,
            "back_pain":formData.back_pain,
            "coughing":formData.coughing,
            "hoarseness":formData.hoarseness,
            "tenderness_pain_chest":formData.tenderness_pain_chest,
            "sharp_sudden_pain_upperback":formData.sharp_sudden_pain_upperback,
            "pain_chest_jaw_neck_arms":formData.pain_chest_jaw_neck_arms,
            "loss_of_consciousness":formData.loss_of_consciousness,
            "difficulty_breathing":formData.difficulty_breathing,
            "trouble_swallowing_food":formData.trouble_swallowing_food,
            "deep_constant_belly_pain":formData.deep_constant_belly_pain,
            "family_history_coronaryheartdisease":formData.family_history_coronaryheartdisease,
            "personal_family_history_blood_bloodvesseldisease":formData.personal_family_history_blood_bloodvesseldisease
            }
        // https://cvd-diagnosis-api.herokuapp.com/diagnose/
        fetch("http://127.0.0.1:8000/diagnose/", {
        headers:{
          'Access-Control-Allow-Origin': '*',
        },
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputJSON),
      })
      .then((response) => {
        response.json();
        console.log(response);
    })
      .then((data) => {
        response_temp = JSON.stringify(data);
        document.getElementById('result').innerHTML = JSON.stringify(data);
        setData(data);
        console.log('Success:', upData);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
    console.log(RiwayatList)
  return (
    <div className='relative w-full'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='py-10 justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-3'>Selamat Datang</h2>
            <h3 className='text-center pb-8'>Isi form untuk mendapatkan diagnosis</h3>

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

            {RiwayatList.map((element)=>{
                return(
                    <div className='flex flex-col '>
                <label>{element.question_text}</label>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100 my-1">
                <input 
                type = "radio"
                required
                name = {element.question_id}
                value = {1}
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>Yes</label>
                </div>

                <div class="flex items-center pl-4 rounded border border-gray-100 dark:border-gray-100">
                <input 
                type = "radio"
                required
                name = {element.question_id}
                value = {0}
                onChange = {handleInputChange}
                className='placeholder:text-gray-400 border relative rounded bg-gray-100'
                />
                <label className='ml-2'>No</label>
                </div>
            </div>
                )
            })}
            {/* make button call api -> then send the user to result page */}
            <Link to={"/Result"} >
                <button onClick={callDiagnosisAPI(formData)} className='font-semibold w-full py-3 mt-8 bg-emerald-500 hover:bg-emerald-400 relative rounded-lg text-white'>Diagnose</button>
            </Link>
        </form>
    </div>
    </div>
  )
}