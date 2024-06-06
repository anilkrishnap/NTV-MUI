
"use client";
import React, { useState } from "react";
import AccordionExpandDefault from "@/components/Accordian/Accordian";
import RadiantInputField from "@/components/RadiantInputField/RadiantInput";
import RadiantBox from "@/components/RadiantBox/RadiantBox";
import GlobalStyles from "../GlobalStyle";

interface MyComponentProps {
  backgroundColor?: string;
  fontColor?: string;
  borderColor?: string;
  headerBackgroundColor?: string;
}

const Equipment: React.FC<MyComponentProps> = ({
  backgroundColor,
  fontColor,
  borderColor,
  headerBackgroundColor
}) => {
  const [equipment, setEquipment] = useState("Default");

  const effectiveBackgroundColor = backgroundColor || "var(--default-background-color)";
  const effectiveFontColor = fontColor || "var(--default-font-color)";
  const effectiveBorderColor = borderColor || "var(--default-border-color)";
  const effectiveHeaderBackgroundColor = headerBackgroundColor || "var(--default-header-background-color)";

  return (
    <>
      <div className="container2">
        <GlobalStyles/>
        <RadiantBox>
          <AccordionExpandDefault/>
        </RadiantBox>
      </div>

      <style jsx>{`
        .container2 {
          align-self: stretch;
          display: flex;
          flex-direction: column;

        }
        .accordion-expand-default {
          justify-content: center;
        }
        .header {
          justify-content: space-between;
          display: flex;
          gap: 20px;
          padding: 3px 8px;
        }
        .title {
          font: 700 14px/143% Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .icon-container {
          justify-content: center;
          border-radius: var(--radius-sm, 6px);
          display: flex;
          flex-direction: column;
        }
        .icon-wrapper {
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .input-field {
          margin-top: 16px;
          justify-content: center;
        }
        .input-field-inner {
          height: 24px;
        }
        .equipment-list {
          padding-bottom: 16px;
          display: flex;
          margin-top: 16px;
          flex-direction: column;
        }
        .equipment-item {
          display: flex;
          flex-direction: column;
          padding: 0 8px;
        }
        .item-header {
          align-items: center;
          border-bottom: 1px solid var(--default-border-color);
          display: flex;
          gap: 4px;
          padding: 8px 8px 8px 9px;
        }
        .item-header + .item-header {
          margin-top: 8px;
        }
        .item-icon {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 16px;
        }
        .details {
          justify-content: center;
          align-self: stretch;
          display: flex;
          flex-direction: column;
          font-size: 12px;
          line-height: 150%;
          flex: 1;
        }
        .name {
          color: var(--Heading, #0958d9);
          font-family: Inter, sans-serif;
          font-weight: 700;
        }
        .description {
          color: var(--Text-color-3, #475467);
          font-family: Inter, sans-serif;
          font-weight: 400;
        }
        .status {
          align-self: stretch;
          display: flex;
          gap: 4px;
          font-size: 12px;
          color: var(--DQI-Widget-sub-title, #475467);
          font-weight: 600;
          white-space: nowrap;
          margin: auto 0;
        }
        .status-icon {
          aspect-ratio: 1.22;
          object-fit: auto;
          object-position: center;
          width: 22px;
        }
        .status-text {
          font-family: Inter, sans-serif;
          justify-content: center;
          margin: auto 0;
        }
        .div {
          align-self: stretch;
          display: flex;
          max-width: 384px;
          flex-direction: column;
          justify-content: center;
        }
        .div-2 {
          border-radius: 24px;
          border-color: var(--default-border-color);
          border-style: solid;
          border-width: 1px;
          display: flex;
          gap: 16px;
          padding: 8px 16px;
          height: 60px;
        }
        .div-3 {
          align-items: center;
          display: flex;
          justify-content: center;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-4 {
          flex: 1;
          margin: auto 0;
          font: 400 14px/143% Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }
      `}</style>
    </>
  );
};

export default Equipment;
