import * as React from "react";
import { Button } from "@mui/material";
import { FC } from "react";

type MyComponentProps = {
  label: string;
  backgroundColor: string;
};

const RadiantButton: FC<MyComponentProps> = ({ label, backgroundColor }) => {
  return (
    <div className="radiant-container">
      <Button 
        className="radiant-button" 
        variant="contained" 
        style={{ backgroundColor }}
      >
        {label}
      </Button>
    
      <style jsx>{`
        .radiant-container {
          display: flex;
        }
        .radiant-button {
          max-width: 91px;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default RadiantButton;
