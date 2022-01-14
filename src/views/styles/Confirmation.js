import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import StepConnector from '@material-ui/core/StepConnector';
 

const useStyles = makeStyles((theme) => ({
  root: {
  width: '100%',
  height:'200px',
  },
  button: {
  marginRight: theme.spacing(1),
  },
  instructions: {
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
  },
}));

const ColorlibConnector = withStyles({
alternativeLabel: {
top: 22,
},
active: {
'& $line': {
  backgroundImage:
    'linear-gradient( 95deg,rgb(255,255,255) 0%, rgb(255,39,37) 50%, rgb(255,39,37) 100%)',
},
},
completed: {
'& $line': {
  backgroundImage:
    'linear-gradient( 95deg,rgb(255,255,255) 0%, rgb(255,39,37) 50%, rgb(255,39,37) 100%)',
},
},
line: {
height: 3,
border: 0,
backgroundColor: '#eaeaf0',
borderRadius: 1,
},
})(StepConnector);

function ColorlibStepIcon(props) {
const classes = useColorlibStepIconStyles();
const { active, completed } = props;

const icons = { 
1: <i className="fas fa-user-circle fa-lg" />,
2: <i className="fas fa-clipboard-check fa-lg" />,
3: <i className="fas fa-credit-card fa-lg" />,
};

return (
<div
  className={clsx(classes.root, {
    [classes.active]: active,
    [classes.completed]: completed,
  })}
>
  {icons[String(props.icon)]}
</div>
);
}

ColorlibStepIcon.propTypes = {
/**
* Whether this step is active.
*/
active: PropTypes.bool,
/**
* Mark the step as completed. Is passed to child components.
*/
completed: PropTypes.bool,
/**
* The label displayed in the step icon.
*/
icon: PropTypes.node,
};

const useColorlibStepIconStyles = makeStyles({
root: {
backgroundColor: '#ccc',
zIndex: 1,
color: '#fff',
width: 50,
height: 50,
display: 'flex',
borderRadius: '50%',
justifyContent: 'center',
alignItems: 'center',
},
active: {
backgroundImage:
  'linear-gradient( 136deg, rgb(255,255,255) 0%, rgb(255,39,37) 50%, rgb(255,39,37) 100%)',
boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
},
completed: {
backgroundImage:
  'linear-gradient( 136deg, rgb(255,255,255) 0%, rgb(255,39,37) 50%, rgb(255,39,37) 100%)',
},
});


export{
  useStyles,
  ColorlibConnector,
  ColorlibStepIcon  
}