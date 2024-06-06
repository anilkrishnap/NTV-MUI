import React, { FunctionComponent, useState, useRef } from "react";
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
    },
  });
});

const SearchInput: FunctionComponent = () => {
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
  );
};

export default SearchInput;
