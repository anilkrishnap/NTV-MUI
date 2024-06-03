import React from "react";
import TextField from "@mui/material/TextField";
 
interface InputFieldProps {
  label: string;
  inputType: string;
  required?: boolean;
}
 
const RadiantInputField: React.FC<InputFieldProps> = ({ label, inputType, required }) => {
  return (
<div className="input">
<label className="label">
        {required && <span className="required">*</span>}
        {label}
</label>
<div className="inputclass1">
<div className="inputclass2">
<TextField
            className="inputclass3"
            type={inputType}
            variant="outlined"
            fullWidth
            placeholder="Placeholder"
          />
<div className="input-icon" />
</div>
</div>
<style>{`
        .input {
          max-width: 100%;
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
        }
 
        .label {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          width: 100%;
          font: 400 12px/133% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
 
        .inputclass1 {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 100%;
          max-width: 100%;
          flex-direction: column;
          justify-content: center;
        }
 
        .inputclass2 {
          justify-content: center;
          align-items: end;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          height: 36px;
        }
 
        @media (max-width: 991px) {
          .inputclass2 {
            max-width: 100%;
            padding-left: 20px;
          }
        }
 
        .inputclass3 {
          border-radius: 0px 3px 3px 0px;
          width: 100%;
          max-width: 100%;
          height: 42px;
        }
 
        .input-icon {
          border-radius: 0 3px 3px 0;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
          position: absolute;
          right: 0;
        }
 
        .MuiInputBase-input-MuiOutlinedInput-input {
          width: 100%;
          height: 42px;
          padding: 0;
        }
 
        .MuiInputBase-root-MuiOutlinedInput-root {
          padding: 0 8px;
          outline: 0;
        }
 
        input::after {
          border-bottom: none !important;
        }
        .MuiOutlinedInput-notchedOutline {
          border: none;
        }
 
        .required {
          color: red;
          margin-right: 4px;
        }
      `}</style>
</div>
  );
};
 
export default RadiantInputField;
