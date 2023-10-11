/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import StepOne from '../Components/Cadastro/BodyCadastroStep1.jsx';
import StepTwo from '../Components/Cadastro/BodyCadastroStep2.jsx';
import StepThree from '../Components/Cadastro/BodyCadastroStep3.jsx';
import axios from 'axios';
import Navbar from '../Components/Index/Navbar.jsx';
// import Step from '../Components/Cadastro/Steps.jsx';     




function Cadastro() {
    //Envio de dados
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        cpf: '',
        state: '',
        city: '',
        phone: '',
        email: '',
        senha: '',

    });


    //MUDNÇA DE TELAS
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step <= 3) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };
    //Atualizar informações
    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value,
        });

    };

    let currentStepComponent;

    


    switch (step) {
        case 1:
            currentStepComponent = <StepOne onNextStep={nextStep} />;
            break;
        case 2:
            currentStepComponent = <StepTwo 
            onNextStep={nextStep} 
            onPrevStep={prevStep} 
            handleFormEdit={handleFormEdit} 
            formData={formData}
            />;
            break;
        case 3:
            currentStepComponent = <StepThree onPrevStep={prevStep} handleFormEdit={handleFormEdit} formData={formData}/>;
            break;
        default:
            currentStepComponent = <StepOne onNextStep={nextStep} />;
    }


    return (
        <div>
            <Navbar />
            {currentStepComponent}
=        </div>
    );
    



}

export default Cadastro;
