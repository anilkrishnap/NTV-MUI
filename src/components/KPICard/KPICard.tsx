import { Card } from "@mui/material";
import * as React from "react";

export default function KPICard() {
  return (
    <>
    <Card>
      <div className="div">
        <div className="div-2">
          <div className="div-3">Utilization</div>
          <div className="div-4">Moderate (25% to 50%)</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f096038999b1ff38132a475c789972a95d392daaaace567c023bf9c83b0fad22?"
          className="img"
        />
      </div>
    </Card>
      <style jsx>{`
        .div {
          justify-content: space-between;
          align-self: stretch;
          border-radius: 8px;
          display: flex;
          gap: 0px;
          background-color: var(--BG-2-blue-in-light, #eff3f7);
          padding:12px;
        }
        .div-2 {
          
          justify-content: center;
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: auto 0;
          padding: 0 20px;
        }
        .div-3 {
          color: var(--DQI-Widget-title, #000);
          font: 600 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-4 {
          color: var(--DQI-Widget-sub-title, #475467);
          margin-top: 4px;
          font: 500 12px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 70px;
        }
        
      `}</style>
    </>
  );
}

