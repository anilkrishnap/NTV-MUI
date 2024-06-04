import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadiantInputField from '../RadiantInputField/RadiantInput';

export default function AccordionExpandDefault() {
  return (
    <>
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Equipment(6)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className="div" >
            <div className="div-2">
              <div className="div-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c75f04f6b38c59f3ee7b75db91cd616c4a6a3ad81bff07ef4cca125062d71105?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img"
                />
              </div>
              <div className="div-4" >
                <RadiantInputField inputType="text" label="" />
              </div>
            </div>
          </div>

          <div className="equipment-list" >
          <div className="equipment-item">
            <div className="item-header">
              <div className="icon-wrapper">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eddc5c428eec3a75d1f8ce69a979f2f143e818d880aa16fd981c52c5d62eba5d?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="item-icon" />
              </div>
              <div className="details">
                <div className="name">ENODEB</div>
                <div className="description">384002 E20TH BROADWAY AWS</div>
              </div>
              <button className="status">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cff1665e195fade683fffd5ef347be1b6d6137d01b7753c47d4686c35ab19b01?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="status-icon" />
                <div className="status-text">80%</div>
              </button>
            </div>
          </div>
          <div className="equipment-item">
            <div className="item-header">
              <div className="icon-wrapper">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1ef9d25c8a9f39d5f5cfb1247fda4642f3dabeb5bb704d80cbd49561a964632?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="item-icon" />
              </div>
              <div className="details">
                <div className="name">RADIO FRAME</div>
                <div className="description">NY_MINI NO2_002 ASSEMBIAGE</div>
              </div>
              <button className="status">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cff1665e195fade683fffd5ef347be1b6d6137d01b7753c47d4686c35ab19b01?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="status-icon" />
                <div className="status-text">80%</div>
              </button>
            </div>
          </div>
          <div className="equipment-item">
            <div className="item-header">
              <div className="icon-wrapper">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a6d0b63f928e2a980c82009dd90f6e36948a2f7195ef4e3ad01a99cef5d9b0a?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="item-icon" />
              </div>
              <div className="details">
                <div className="name">CDMA 800 CELL</div>
                <div className="description">NY_MINI NO2_002 ASSEMBIAGE</div>
              </div>
              <button className="status" >
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cff1665e195fade683fffd5ef347be1b6d6137d01b7753c47d4686c35ab19b01?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="status-icon" />
                <div className="status-text">80%</div>
              </button>
            </div>
          </div>
          <div className="equipment-item">
            <div className="item-header">
              <div className="icon-wrapper">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eddc5c428eec3a75d1f8ce69a979f2f143e818d880aa16fd981c52c5d62eba5d?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="item-icon" />
              </div>
              <div className="details">
                <div className="name">ENODEB</div>
                <div className="description">MINLNYACTA-P-AL-0002-01</div>
              </div>
              <button className="status">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cff1665e195fade683fffd5ef347be1b6d6137d01b7753c47d4686c35ab19b01?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="status-icon" />
                <div className="status-text">80%</div>
              </button>
            </div>
          </div>
          <div className="equipment-item">
            <div className="item-header">
              <div className="icon-wrapper">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c335223822994db67c2f86854ad4f9e819bafcde11c33ff18403a2186ac68996?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="item-icon" />
              </div>
              <div className="details">
                <div className="name">CDMA 800 CELL</div>
                <div className="description">NY_MINI NO2_002 ASSEMBIAGE</div>
              </div>
              <button className="status">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cff1665e195fade683fffd5ef347be1b6d6137d01b7753c47d4686c35ab19b01?apiKey=a938513dc279413eaac5ce0f8c637f66&" className="status-icon" />
                <div className="status-text">80%</div>
              </button>
            </div>
          </div>
        </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
   
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
      `}</style></>
    
  );
}
