'use client';
import * as React from "react";
import NtvCard from "@/components/NtvCard/NtvCard";

export default function MyComponent() {
  return (
    <>
      <div className="div">
        <NtvCard/>
        
      </div>
      <style jsx>{`
        .div {
          display: flex;
          max-width: 416px;
          flex-direction: column;
        }
        .ntv-card {
          width: 100%;
          justify-content: center;
        }
        .div-2 {
          background-color: var(--BG-2-blue-in-light, #eff3f7);
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-3 {
          justify-content: center;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 16px;
        }
        .div-4 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .div-5 {
          justify-content: space-between;
          display: flex;
          gap: 0px;
        }
        .div-6 {
          display: flex;
          gap: 8px;
          flex: 1;
        }
        .div-7 {
          justify-content: center;
          border-radius: var(--radius-lg, 12px);
          border-color: rgba(208, 213, 221, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--BG-4-white-in-light, #fff);
          align-self: start;
          display: flex;
          gap: 4px;
          padding: 4px 6px;
        }
        .div-8 {
          background-color: var(--Success-Success300, #6ce9a6);
          border-radius: 50%;
          width: 12px;
          height: 12px;
        }
        .div-9 {
          background-color: var(--Success-Success300, #6ce9a6);
          border-radius: 50%;
          width: 12px;
          height: 12px;
        }
        .div-10 {
          color: var(--Text-color-2, #101828);
          flex: 1;
          font: 700 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-11 {
          justify-content: end;
          display: flex;
          gap: 8px;
          padding: 2px 0 2px 16px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-12 {
          align-items: start;
          margin-top: 8px;
          color: var(--Text-color-3, #475467);
          justify-content: center;
          padding: 0 48px;
          font: 700 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-13 {
          justify-content: center;
          align-items: start;
          display: flex;
          margin-top: 16px;
          flex-direction: column;
          font-size: 14px;
          font-weight: 400;
          line-height: 143%;
          padding: 0 48px;
        }
        .div-14 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .div-15 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-16 {
          align-content: flex-start;
          flex-wrap: wrap;
          display: flex;
          gap: 16px;
        }
        .div-17 {
          color: var(--Text-color-3, #475467);
          font-family: Inter, sans-serif;
        }
        .div-18 {
          color: var(--Text-color-1, #000);
          font-family: Inter, sans-serif;
        }
        .div-19 {
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          justify-content: center;
        }
        .div-20 {
          align-content: flex-start;
          flex-wrap: wrap;
          display: flex;
          gap: 16px;
        }
        .div-21 {
          color: var(--Text-color-3, #475467);
          font-family: Inter, sans-serif;
        }
        .div-22 {
          color: var(--Text-color-1, #000);
          font-family: Inter, sans-serif;
        }
        .div-23 {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          padding: 0 16px;
        }
        .div-24 {
          align-items: center;
          border-color: rgba(208, 213, 221, 1);
          border-style: solid;
          border-bottom-width: 1px;
          display: flex;
          justify-content: center;
          padding: 8px 60px;
        }
        .div-25 {
          justify-content: center;
          border-radius: var(--radius-sm, 6px);
          display: flex;
          gap: 8px;
          padding: 4px 16px;
        }
        .div-26 {
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          border-color: rgba(21, 112, 239, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          display: flex;
          width: 24px;
          height: 24px;
          padding: 4px;
        }
        .img-2 {
          aspect-ratio: 1.23;
          object-fit: auto;
          object-position: center;
          width: 16px;
        }
        .div-27 {
          color: var(--Primary, #1570ef);
          margin: auto 0;
          font: 600 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
      `}</style>
    </>
  );
}


