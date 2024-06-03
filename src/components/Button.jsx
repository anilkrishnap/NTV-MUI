// // src/components/Button.js
// import styled from 'styled-components';

// const Button = styled.button`
//   background-color: var(--secondary-color) ;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   font-size: 1rem;
//   cursor: pointer;

//   &:hover {
//     background-color: var(--primary-color);
//   }
// `;

// export default Button;

// import styled from 'styled-components';

// const Button = styled.button`
//   background-color: ${({ bgColor }) => bgColor || 'var(--secondary-color)'};
//   color: ${({ color }) => color || 'white'};
//   padding: ${({ padding }) => padding || '10px 20px'};
//   border: ${({ border }) => border || 'none'};
//   border-radius: ${({ borderRadius }) => borderRadius || '5px'};
//   font-size: ${({ fontSize }) => fontSize || '1rem'};
//   cursor: pointer;

//   &:hover {
//     background-color: ${({ hoverBgColor }) => hoverBgColor || 'var(--primary-color)'};
//   }
// `;

// export default Button;
import React from 'react';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';

const baseStyles = {
  backgroundColor: 'var(--primary-color)',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  hoverBgColor: 'darkgray'
};

const variants = {
  primary: {
    backgroundColor: 'var(--primary-color)',
    color: 'var(--text-color)',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    hoverBgColor: 'darkblue'
  },
  secondary: {
    backgroundColor:  'var( --secondary-color)',
    color: 'var(--text-color)',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    hoverBgColor: 'darkgreen'
  },
  danger: {
    backgroundColor: 'var(--tertiary-color)',
    color: 'var(--text-color)',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    hoverBgColor: 'darkred'
  },
  warning: {
    backgroundColor: 'orange',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    hoverBgColor: 'darkorange'
  },
  info: {
    backgroundColor: 'lightblue',
    color: 'black',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    hoverBgColor: 'deepskyblue'
  }
};

const StyledButton = styled(MuiButton)(({ variant }) => ({
  backgroundColor: variant ? variants[variant].backgroundColor : baseStyles.backgroundColor,
  color: variant ? variants[variant].color : baseStyles.color,
  padding: variant ? variants[variant].padding : baseStyles.padding,
  border: variant ? variants[variant].border : baseStyles.border,
  borderRadius: variant ? variants[variant].borderRadius : baseStyles.borderRadius,
  fontSize: '1rem',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: variant ? variants[variant].hoverBgColor : baseStyles.hoverBgColor,
  },
}));

const Button = ({ variant, name, ...props }) => {
  return <StyledButton variant={variant} {...props}>{name}</StyledButton>;
};

export default Button;
