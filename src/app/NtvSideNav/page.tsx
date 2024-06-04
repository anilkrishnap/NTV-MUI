
"use client";
import React, { useState } from 'react';
import "../../../styles/global.css";
import GlobalStyles from '../GlobalStyle';
import Box from '@mui/material/Box';
import Header from '../../app/Header/page';
import Madeline from '../../app/Madeline/page';
import KPI from '../../app/KPI/page';
import Equipment from '../Equipment/page';

export default function MyComponent() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
  
    <>
    <GlobalStyles/>
      {/* <div className={isToggled ? 'container dark' : 'container'}>
      <button onClick={handleToggle} style={{cursor: 'pointer'}}> 
      
      {isToggled ? 'Turn Off' : 'Turn On'}
    </button> */}
    <Box 
      sx={{
        width: 416,
        backgroundColor: 'container',
        '&:hover': {
          backgroundColor: 'container dark',
        },
      }}
    >
      <Header/>
      <Madeline/>
      <KPI/>
      <Equipment />
    </Box>
      
      <style jsx>{`
        .div {
          justify-content: center;
          border-color: rgba(16, 24, 40, 1);
          border-style: solid;
          border-right-width: 1px;
       
          display: flex;
          max-width: 480px;
          width: 100%;
          flex-direction: column;
          margin: 0 auto;
        }
        .div-2 {
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-3 {
          border-color: rgba(71, 84, 103, 1);
          border-style: solid;
          border-right-width: 1px;
          border-bottom-width: 1px;
       
          display: flex;
          width: 100%;
          gap: 0px;
          padding: 16px 8px 16px 0;
        }
        .div-4 {
          align-items: start;
          border-radius: 0px 24px 24px 0px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8px 16px 8px 8px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-5 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 8px;
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-7 {
          border-radius: 24px;
          border-color: rgba(71, 84, 103, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-8 {
          border-radius: 24px;
        
          display: flex;
          gap: 16px;
          padding: 10px 16px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-9 {
          color: var(--Search-filled-text, #fff);
          flex: 1;
          font: 700 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-10 {
          display: flex;
          gap: 8px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-11 {
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-12 {
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        .div-13 {
          justify-content: center;
          border-color: rgba(16, 24, 40, 1);
          border-style: solid;
          border-right-width: 1px;
       
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 16px;
        }
        .div-14 {
          align-items: start;
          display: flex;
          gap: 12px;
          font-size: 16px;
          color: var(--Text-color-2, #f2f4f7);
          font-weight: 700;
          white-space: nowrap;
          line-height: 150%;
        }
        .div-15 {
          justify-content: center;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .div-16 {
          display: flex;
          gap: 12px;
        }
        .div-17 {
          font-family: Inter, sans-serif;
          flex: 1;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-18 {
          justify-content: center;
          display: flex;
          margin-top: 16px;
          flex-direction: column;
          font-size: 14px;
          line-height: 143%;
        }
        .div-19 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .div-20 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 36px;
        }
        .div-21 {
          align-content: center;
          flex-wrap: wrap;
          display: flex;
          gap: 16px;
        }
        .div-22 {
          font-family: Inter, sans-serif;
          color: var(--Text-color-3, #d0d5dd);
          font-weight: 500;
          white-space: nowrap;
          justify-content: center;
        }
        .div-23 {
          color: var(--Text-color-2, #f2f4f7);
          font-family: Inter, sans-serif;
          font-weight: 400;
          flex: 1;
        }
        .div-24 {
          align-items: start;
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          justify-content: center;
          padding: 0 36px;
        }
        .div-25 {
          align-content: flex-start;
          flex-wrap: wrap;
          display: flex;
          gap: 16px;
        }
        .div-26 {
          font-family: Inter, sans-serif;
          color: var(--Text-color-3, #d0d5dd);
          font-weight: 500;
          white-space: nowrap;
          justify-content: center;
        }
        .div-27 {
          color: var(--Text-color-2, #f2f4f7);
          font-family: Inter, sans-serif;
          font-weight: 400;
          flex: 1;
        }
        .div-28 {
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          white-space: nowrap;
          justify-content: center;
          padding: 0 36px;
        }
        .div-29 {
          align-content: center;
          flex-wrap: wrap;
          display: flex;
          gap: 16px;
        }
        .div-30 {
          font-family: Inter, sans-serif;
          color: var(--Text-color-3, #d0d5dd);
          font-weight: 500;
          justify-content: center;
        }
        .div-31 {
          color: var(--Text-color-2, #f2f4f7);
          font-family: Inter, sans-serif;
          font-weight: 400;
          flex: 1;
        }
        .div-32 {
          align-items: center;
          border-color: rgba(16, 24, 40, 1);
          border-style: solid;
          border-top-width: 1px;
          border-right-width: 1px;
          border-bottom-width: 1px;
       
          display: flex;
          width: 100%;
          justify-content: center;
          padding: 16px;
        }
        .div-33 {
          display: flex;
          width: 86px;
          flex-direction: column;
        }
        .div-34 {
          justify-content: center;
          align-items: center;
          border-radius: 50px;
          border-color: rgba(105, 177, 255, 1);
          border-style: solid;
          border-width: 1px;
       
          align-self: center;
          display: flex;
          width: 40px;
          height: 40px;
          padding: 0 4px;
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          stroke-width: 2px;
          stroke: var(--Tooltip-type-color, #69b1ff);
          border-color: rgba(105, 177, 255, 1);
          border-style: solid;
          border-width: 2px;
        }
        .div-35 {
          color: var(--Tooltip-type-color, #69b1ff);
          margin-top: 6px;
          font: 600 12px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-36 {
          display: flex;
          margin-top: 16px;
          gap: 20px;
          padding: 0 16px;
        }
        .div-37 {
          color: var(--Text-color-3, #d0d5dd);
          margin: auto 0;
          font: 500 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-38 {
          border-radius: 24px;
          border-color: rgba(71, 84, 103, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        .div-39 {
          border-radius: 24px;
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-40 {
          border-radius: 24px;

          display: flex;
          gap: 16px;
          padding: 10px 16px;
        }
        .div-41 {
          color: var(--Search-filled-text, #fff);
          flex: 1;
          font: 500 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-42 {
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-43 {
          display: flex;
          margin-top: 16px;
          width: 100%;
          flex-direction: column;
        }
        .div-44 {
          justify-content: center;
          border-radius: 4px 4px 0px 0px;
          border-color: rgba(71, 84, 103, 1);
          border-style: solid;
          border-bottom-width: 1px;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          color: var(--Text-color-1, #fff);
          font-weight: 700;
          white-space: nowrap;
          line-height: 143%;
          margin: 0 17px;
          padding: 8px;
        }
        .div-45 {
          display: flex;
          gap: 8px;
        }
        .div-46 {
          font-family: Inter, sans-serif;
          flex: 1;
        }
        .img-9 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-47 {
          display: flex;
          margin-top: 8px;
          padding-left: 16px;
          gap: 8px;
        }
        .div-48 {
       
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 8px;
        }
        .div-49 {
          display: flex;
          flex-direction: column;
        }
        .div-50 {
          justify-content: space-between;
          border-radius: 8px;
       
          display: flex;
          width: 100%;
          gap: 8px;
          font-size: 14px;
          line-height: 143%;
          padding: 12px;
        }
        .div-51 {
          display: flex;
          gap: 8px;
          font-weight: 600;
        }
        .div-52 {
          font-family: Inter, sans-serif;
          color: var(--Text-color-2, #f2f4f7);
          justify-content: center;
        }
        .div-53 {
          font-family: Inter, sans-serif;
          color: var(--Text-color-3, #d0d5dd);
          white-space: nowrap;
          justify-content: center;
        }
        .div-54 {
          display: flex;
          flex-direction: column;
          color: var(--Tooltip-type-color, #69b1ff);
          font-weight: 500;
          justify-content: center;
        }
        .div-55 {
          justify-content: center;
          border-radius: var(--button-button-border-radius, 100px);
          display: flex;
          gap: 8px;
        }
        .div-56 {
          font-family: Inter, sans-serif;
        }
        .img-10 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 18px;
          align-self: start;
        }
        .div-57 {
          border-radius: 8px;
     
          display: flex;
          margin-top: 8px;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          line-height: 143%;
          padding: 12px;
        }
        .div-58 {
          font-family: Inter, sans-serif;
          color: var(--Text-color-2, #f2f4f7);
          justify-content: center;
        }
        .div-59 {
          color: var(--Text-color-3, #d0d5dd);
          font-family: Inter, sans-serif;
          flex: 1;
        }
        .div-60 {
          border-radius: 8px;
        
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          justify-content: center;
          padding: 12px;
        }
        .div-61 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .div-62 {
          display: flex;
          gap: 8px;
          font-size: 14px;
          line-height: 143%;
        }
        .div-63 {
          color: var(--DQI-Widget-title, #fff);
          font-family: Inter, sans-serif;
          font-weight: 600;
          flex: 1;
        }
        .div-64 {
          display: flex;
          flex-direction: column;
          color: var(--Tooltip-type-color, #69b1ff);
          font-weight: 500;
          justify-content: center;
        }
        .div-65 {
          justify-content: center;
          border-radius: var(--button-button-border-radius, 100px);
          display: flex;
          gap: 8px;
        }
        .div-66 {
          font-family: Inter, sans-serif;
        }
        .img-11 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 18px;
          align-self: start;
        }
        .div-67 {
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          justify-content: center;
        }
        .div-68 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-69 {
          display: flex;
          gap: 16px;
        }
        .div-70 {
          display: flex;
          gap: 4px;
          margin: auto 0;
        }
        .div-71 {
          border-radius: 1px;
          background-color: var(--Critical-Error600, #d92d20);
          width: 13px;
          height: 7px;
        }
        .div-72 {
          border-radius: 1px;
         
          width: 14px;
          height: 7px;
        }
        .div-73 {
          border-radius: 1px;
          background-color: #fdbc3d;
          width: 14px;
          height: 7px;
        }
        .div-74 {
          border-radius: 1px;
          background-color: var(--Neutral-Gray300, #d0d5dd);
          width: 13px;
          height: 7px;
        }
        .div-75 {
          color: var(--Text-color-3, #d0d5dd);
          font: 600 14px/129% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-76 {
          border-radius: 8px;
         
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          justify-content: center;
          padding: 12px;
        }
        .div-77 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .div-78 {
          display: flex;
          gap: 8px;
          font-size: 14px;
          line-height: 143%;
        }
        .div-79 {
          color: var(--DQI-Widget-title, #fff);
          font-family: Inter, sans-serif;
          font-weight: 600;
          flex: 1;
        }
        .div-80 {
          display: flex;
          flex-direction: column;
          color: var(--Tooltip-type-color, #69b1ff);
          font-weight: 500;
          justify-content: center;
        }
        .div-81 {
          justify-content: center;
          border-radius: var(--button-button-border-radius, 100px);
          display: flex;
          gap: 8px;
        }
        .div-82 {
          font-family: Inter, sans-serif;
        }
        .img-12 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 18px;
          align-self: start;
        }
        .div-83 {
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          justify-content: center;
        }
        .div-84 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-85 {
          display: flex;
          gap: 16px;
        }
        .div-86 {
          display: flex;
          gap: 4px;
          margin: auto 0;
        }
        .div-87 {
          border-radius: 1px;
          background-color: var(--Critical-Error600, #d92d20);
          width: 13px;
          height: 7px;
        }
        .div-88 {
          border-radius: 1px;
         
          width: 14px;
          height: 7px;
        }
        .div-89 {
          border-radius: 1px;
          background-color: #fdbc3d;
          width: 14px;
          height: 7px;
        }
        .div-90 {
          border-radius: 1px;
          background-color: var(--Neutral-Gray300, #d0d5dd);
          width: 13px;
          height: 7px;
        }
        .div-91 {
          color: var(--Text-color-3, #d0d5dd);
          font: 600 14px/129% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-92 {
          justify-content: center;
          align-items: center;
          border-radius: 100px;
          border-color: rgba(16, 24, 40, 1);
          border-style: solid;
          border-width: 1px;
        
          display: flex;
          margin: auto 0;
          padding: 4px 0;
        }
        .img-13 {
          aspect-ratio: 0.33;
          object-fit: auto;
          object-position: center;
          width: 8px;
        }
        .div-93 {
          display: flex;
          margin-top: 16px;
          width: 100%;
          flex-direction: column;
        }
        .div-94 {
          justify-content: center;
          border-radius: 4px 4px 0px 0px;
          border-color: rgba(71, 84, 103, 1);
          border-style: solid;
          border-bottom-width: 1px;
          display: flex;
          flex-direction: column;
          font-size: 14px;
          color: var(--Text-color-1, #fff);
          font-weight: 700;
          line-height: 143%;
          margin: 0 17px;
          padding: 8px;
        }
        .div-95 {
          display: flex;
          gap: 8px;
        }
        .div-96 {
          font-family: Inter, sans-serif;
          flex: 1;
        }
        .img-14 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-97 {
          border-color: rgba(16, 24, 40, 1);
          border-style: solid;
          border-bottom-width: 1px;
          display: flex;
          margin-top: 8px;
          width: 100%;
          flex-direction: column;
          font-size: 14px;
          line-height: 143%;
          padding: 8px 16px 16px;
        }
        .div-98 {
          display: flex;
          flex-direction: column;
        }
        .div-99 {
          border-radius: 20px;
          border-color: rgba(71, 84, 103, 1);
          border-style: solid;
          border-width: 1px;
          display: flex;
          flex-direction: column;
          color: var(--Search-default-text, #d0d5dd);
          font-weight: 400;
          justify-content: center;
        }
        .div-100 {
          border-radius: 8px 0px 0px 8px;
       
          display: flex;
          gap: 16px;
          padding: 10px 16px;
        }
        .img-15 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .div-101 {
          font-family: Inter, sans-serif;
          flex: 1;
        }
        .div-102 {
          display: flex;
          margin-top: 16px;
          gap: 16px;
          color: #667085;
        }
        .div-103 {
          align-items: center;
          border-radius: 4px;
          border-color: rgba(16, 24, 40, 1);
          border-style: solid;
          border-width: 1px;
        
          display: flex;
          gap: 8px;
          font-weight: 500;
          padding: 8px 16px;
        }
        .img-16 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
        }
        .div-104 {
          font-family: Inter, sans-serif;
          align-self: stretch;
          margin: auto 0;
        }
        .img-17 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          align-self: stretch;
          margin: auto 0;
        }
        .div-105 {
          justify-content: space-between;
          border-radius: 4px;
          border-color: rgba(16, 24, 40, 1);
          border-style: solid;
          border-width: 1px;
 
          display: flex;
          gap: 8px;
          font-weight: 600;
          white-space: nowrap;
          flex: 1;
          padding: 8px 16px;
        }
        .div-106 {
          display: flex;
          gap: 8px;
        }
        .div-107 {
          font-family: Inter, sans-serif;
          margin: auto 0;
        }
        .img-18 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
          margin: auto 0;
        }
        .div-108 {
          display: flex;
          margin-top: 8px;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .div-109 {
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 0 8px;
        }
        .div-110 {
          border-color: rgba(71, 84, 103, 1);
          border-style: solid;
          border-bottom-width: 1px;
          display: flex;
          gap: 8px;
          padding: 8px;
        }
        .img-19 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 32px;
          box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1),
            0px 1px 2px 0px rgba(16, 24, 40, 0.06);
          align-self: start;
        }
        .div-111 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        .div-112 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .div-113 {
          justify-content: space-between;
          display: flex;
          gap: 8px;
          font-weight: 600;
        }
        .div-114 {
          color: var(--Dropdown-List-Selected, #fff);
          justify-content: center;
          font: 14px/143% Inter, sans-serif;
        }
        .div-115 {
          text-decoration-line: underline;
          align-self: start;
          color: var(--Primary, #1570ef);
          justify-content: center;
          font: 12px/150% Inter, sans-serif;
        }
        .div-116 {
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          justify-content: center;
        }
        .div-117 {
          display: flex;
          flex-direction: column;
        }
        .div-118 {
          display: flex;
          flex-direction: column;
          font-size: 12px;
          font-weight: 400;
          line-height: 150%;
        }
        .div-119 {
          color: var(--Dropdown-List-default, #d0d5dd);
          font-family: Inter, sans-serif;
        }
        .div-120 {
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          color: var(--Text-color-3, #d0d5dd);
          justify-content: center;
        }
        .div-121 {
          display: flex;
          gap: 8px;
        }
        .img-20 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 16px;
          align-self: start;
        }
        .div-122 {
          font-family: Inter, sans-serif;
          flex: 1;
        }
        .div-123 {
          justify-content: space-between;
          display: flex;
          margin-top: 8px;
          width: 100%;
          gap: 4px;
        }
        .div-124 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-125 {
          display: flex;
          flex-direction: column;
        }
        .div-126 {
          color: var(--Text-color-3, #d0d5dd);
          font: 600 10px/180% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-127 {
          display: flex;
          margin-top: 4px;
          gap: 3px;
        }
        .div-128 {
          display: flex;
          gap: 4px;
          margin: auto 0;
        }
        .div-129 {
          border-radius: 1px;
          background-color: var(--Critical-Error600, #d92d20);
          width: 13px;
          height: 7px;
        }
        .div-130 {
          border-radius: 1px;
         
          width: 14px;
          height: 7px;
        }
        .div-131 {
          border-radius: 1px;
          background-color: #fdbc3d;
          width: 14px;
          height: 7px;
        }
        .div-132 {
          border-radius: 1px;
          background-color: var(--Neutral-Gray300, #d0d5dd);
          width: 13px;
          height: 7px;
        }
        .div-133 {
          color: var(--Text-color-1, #fff);
          font: 600 12px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-134 {
          align-self: start;
          display: flex;
          margin-top: 12px;
          gap: 8px;
          font-size: 12px;
          color: var(--Text-color-3, #d0d5dd);
          font-weight: 400;
          line-height: 150%;
        }
        .img-21 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 16px;
          align-self: start;
        }
        .div-135 {
          font-family: Inter, sans-serif;
        }
        .div-136 {
          border-color: rgba(71, 84, 103, 1);
          border-style: solid;
          border-bottom-width: 1px;
          display: flex;
          gap: 8px;
          padding: 8px 8px 0;
        }
        .img-22 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 32px;
          box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1),
            0px 1px 2px 0px rgba(16, 24, 40, 0.06);
          align-self: start;
        }
        .div-137 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }
        .div-138 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .div-139 {
          justify-content: space-between;
          display: flex;
          gap: 8px;
          font-weight: 600;
        }
        .div-140 {
          color: var(--Dropdown-List-Selected, #fff);
          justify-content: center;
          font: 14px/143% Inter, sans-serif;
        }
        .div-141 {
          text-decoration-line: underline;
          align-self: start;
          color: var(--Primary, #1570ef);
          justify-content: center;
          font: 12px/150% Inter, sans-serif;
        }
        .div-142 {
          display: flex;
          margin-top: 4px;
          flex-direction: column;
          font-size: 12px;
          color: var(--Dropdown-List-default, #d0d5dd);
          font-weight: 400;
          line-height: 150%;
          justify-content: center;
        }
        .div-143 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-144 {
          font-family: Inter, sans-serif;
          justify-content: center;
        }
      `}</style>
    </>
  );
}


