'use client';
import * as React from "react";
import NtvAccordions from "../../components/NtvAccordions/NtvAccordions";
import RadiantBox from "@/components/RadiantBox/RadiantBox";

export default function MyComponent() {
  return (
    <>
    <RadiantBox>
      <NtvAccordions>
        <div className="div">
          <div className="div-2">KPI</div>
          <div className="div-3">
            <div className="div-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ca78c71471a6c0433e17f7269cff62fca92440c938099f1baf384e9d42a10d5?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img"
              />
            </div>
          </div>
        </div>
      </NtvAccordions>
    </RadiantBox>
      <style jsx>{`
        .ntv-accordions {
          justify-content: center;
          align-self: stretch;
          max-width: 376px;
        }
        .div {
          justify-content: space-between;
          display: flex;
          width: 100%;
          gap: 20px;
          padding: 3px 8px;
        }
        .div-2 {
          color: #f2f4f7;
          font: 700 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-3 {
          justify-content: center;
          border-radius: var(--radius-sm, 6px);
          display: flex;
          flex-direction: column;
        }
        .div-4 {
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
      `}</style>
    </>
  );
}


