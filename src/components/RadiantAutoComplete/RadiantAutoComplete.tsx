import React from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
 
interface Option {
  value: string;
  label: string;
}
 
interface AutoCompleteProps {
  options: Option[];
  onChange: (event: SelectChangeEvent<string>) => void;
  value: string;
  label: string;
  required?: boolean;
}
 
const RadiantAutoComplete: React.FC<AutoCompleteProps> = ({ options, onChange, value, label, required }) => {
  const defaultOption: Option = { value: "", label: "Select" };
  const allOptions = [defaultOption, ...options];
 
  return (
<>
<div className="drop-container">
<div className="drop-label">
          {required && <span className="required">*</span>}
          {label}
</div>
<div className="select-container">
<Select
            value={value}
            onChange={onChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="select"
            IconComponent={() => null} // Remove the default icon
>
            {allOptions.map((option) => (
<MenuItem key={option.value} value={option.value}>
                {option.label}
</MenuItem>
            ))}
</Select>
<img
            src="https://uirepo.blob.core.windows.net/airwave/down-caret.svg"
            alt="Dropdown Icon"
            className="custom-icon"
          />
</div>
</div>
<style>{`
        .drop-container {
          align-self: stretch;
          display: flex;
          max-width: 328px;
          flex-direction: column;
        }
        .drop-label {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          width: 100%;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .select-container {
          border: 1px solid #808080;
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          position: relative;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          height: 36px;
        }
        .select {
          width: 100%;
        }
        .custom-icon {
          position: absolute;
          top: 50%;
          right: 5px;
          transform: translateY(-50%);
          width: 16px; // Adjust size as needed
          height: 16px;
        }
        .MuiOutlinedInput-input {
            padding: 10.5px 14px;
        }
        .required {
          color: red;
          margin-right: 4px;
        }
        :focus-visible {
          outline: 0;
        }
        .MuiMenu-list {
          padding-top: 0;
        }
        .MuiMenuItem-root {
          padding-top: 4px;
          padding-bottom: 4px;
          padding-left: 12px;
          padding-right: 12px;
        }
        .MuiSelect-select {
          padding-right: 24px !important;
          padding-left: 8px;
        }
      `}</style>
</>
  );
}
 
export default RadiantAutoComplete;