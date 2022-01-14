import React, { useState, useContext } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel'; 
import Button from '@material-ui/core/Button'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import UserData from '../components/Pay/UserData';
import ConfirmData from '../components/Pay/ConfirmData';
import FormIncrustado from '../components/Form/FormIncrustado';

import { useStyles,ColorlibConnector,ColorlibStepIcon } from './styles/Confirmation'

function getSteps() {
    return ['Datos Cliente', 'Confirmación', 'Pago'];
}

function getStepContent(step, handleNext) {
  console.log("step", step);
    switch (step) {
        case 0:
        return <UserData handleNext={handleNext}/>;
        case 1:
            return <ConfirmData handleNext={handleNext}/>; 
        case 2:
          return <FormIncrustado/>; 
        default:
        return <UserData/>;
    }
} 
 

export const PayView = () => {
    //* Botones *//
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    //* Fin Botones *//
  
    return (
        <div  style={{marginTop: '6rem', marginBottom: '1rem'}}>
        <div className={classes.root}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length -1 ? (
              <div className="d-flex justify-content-center flex-column">
                  <FormIncrustado/> 
                  <Button onClick={handleReset} className={classes.button}>
                    Volver al Inicio
                  </Button>
              </div>
            ) : (
              <div>
                  <CssBaseline />
                  <Container maxWidth="sm" className="mr-auto"> 
                      {
                          getStepContent(activeStep, handleNext)
                      } 
                  </Container>
                  <div className="d-flex justify-content-center">
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                          Atras
                      </Button> 
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
}
