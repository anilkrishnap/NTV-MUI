// import React, { FunctionComponent, useState, useRef } from "react";
// import Box from '@mui/material/Box';
// import styled from "styled-components";
// import {
//   FormControl,
//   InputAdornment,
//   TextField,
//   createStyles,
//   makeStyles,
//   Theme
// } from "@material-ui/core";
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// const baseStyles = {
//   backgroundColor: 'white',
//   color: '#0958D9',
//   textcolor:"#475467"


// };

// const StyledBox = styled(Box)(({ variant }) => ({
 

//   backgroundColor: variant ? variant.backgroundColorCard: baseStyles.backgroundColor,
//   color: variant ? variant.color: baseStyles.color,


 
// }));



// const useStyles = makeStyles((theme: Theme) => {
//   return createStyles({
//     search: {
//       margin: "0",
//       width: '100%',
//     },
//     textField: {
//       '& .MuiOutlinedInput-root': {
//         borderRadius: '50px',
//       },
//     },
//   });
// });

// const SearchInput: FunctionComponent = ({variant}) => {

//   const classes = useStyles();
//   const inputRef = useRef<HTMLInputElement>(null);

//   const [inputValue, setInputValue] = useState("");
//   const [showClearIcon, setShowClearIcon] = useState("none");

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     const value = event.target.value;
//     setInputValue(value);
//     setShowClearIcon(value === "" ? "none" : "flex");
//   };

//   const handleClick = (): void => {
//     setInputValue("");
//     setShowClearIcon("none");
//     if (inputRef.current) {
//       inputRef.current.value = ""; // Clear the input field
//     }
//   };

//   return (
//     <StyledBox variant={variant} > <div id="app">
//     <FormControl className={classes.search}>
//       <TextField
//         size="small"
//         variant="outlined"
//         placeholder="Search..."
//         value={inputValue}
//         onChange={handleChange}
//         inputRef={inputRef}
//         classes={{ root: classes.textField }}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon />
//             </InputAdornment>
//           ),
//           endAdornment: (
//             <InputAdornment
//               position="end"
//               style={{ display: showClearIcon }}
//               onClick={handleClick}
//             >
//               <ClearIcon style={{ cursor: 'pointer' }} />
//             </InputAdornment>
//           )
//         }}
//       />
//     </FormControl>
//   </div></StyledBox>
   
//   );
// };

// export default SearchInput;
import React, { FunctionComponent, useState, useRef } from "react";
import Box from '@mui/material/Box';
import styled from "styled-components";
import {
  FormControl,
  InputAdornment,
  TextField,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const baseStyles = {
  backgroundColor: 'white',
  color: 'grey',
  textColor: "#475467"
};

const StyledBox = styled(Box)(({ variant }) => ({
  backgroundColor: variant ? variant.color : baseStyles.backgroundColor,
  color: variant ? variant.color : baseStyles.color,
}));

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    search: {
      margin: "0",
      width: '100%',
    },
    textField: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '50px',
      },
      '& .MuiInputBase-input::placeholder': {
        color: baseStyles.textColor,
        opacity: 1, // This is important to ensure the color is applied
      },
      '& .MuiInputBase-input': {
        color: baseStyles.color, // Apply color to input text
      },
    },
  });
});

const SearchInput: FunctionComponent = ({ variant }) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValue(value);
    setShowClearIcon(value === "" ? "none" : "flex");
  };

  const handleClick = (): void => {
    setInputValue("");
    setShowClearIcon("none");
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input field
    }
  };

  return (
    <StyledBox variant={variant}>
      <div id="app">
        <FormControl className={classes.search}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={inputValue}
            onChange={handleChange}
            inputRef={inputRef}
            classes={{ root: classes.textField }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  style={{ display: showClearIcon }}
                  onClick={handleClick}
                >
                  <ClearIcon style={{ cursor: 'pointer' }} />
                </InputAdornment>
              )
            }}
          />
        </FormControl>
      </div>
    </StyledBox>
  );
};

export default SearchInput;

