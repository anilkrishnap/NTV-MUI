'use client';
import * as React from "react";

export default function Header() {
  return (
    <>
      <div className="divHeader">
        <div className="divHeader-2">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39b32a31c330e3f491df175271725a3a8d8e88d29a9497ad2820d97ad18d3e42?apiKey=a938513dc279413eaac5ce0f8c637f66&"
            className="imgHeader"
          />
        </div>
        <div className="divHeader-3">
          <div className="divHeader-4">
            <div className="divHeader-5">
              <div className="divHeader-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9305fa547a1f0c852b61b19064f65977ff728adfc2b068aad86803d345aa20ba?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="imgHeader-2"
                />
                <div className="divHeader-7">MADELINE</div>
                <div className="divHeader-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aac3c1d14cd6f3054cee536e7f86b217768a9c992619382a75f3c6819a82dbc?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="imgHeader-3"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/271c838af64500e3212b368c98c975d03125c917d86722c0928c537f3d5da47c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="imgHeader-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .divHeader {
          align-self: stretch;
          background-color: var(--BG-3-white-in-light, #fff);
          display: flex;
          gap: 0px;
          padding: 16px 8px 16px 0;
        }
        .divHeader-2 {
          align-items: center;
          border-radius: 0px 24px 24px 0px;
          display: flex;
          justify-content: center;
          padding: 8px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .divHeader-3 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          padding: 0 8px;
        }
        .divHeader-4 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .divHeader-5 {
          border-radius: 24px;
          border-color: rgba(152, 162, 179, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .divHeader-6 {
          border-radius: 24px;
          background-color: var(--Search-search-bar-bg, #fcfcfd);
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
        .divHeader-7 {
          color: var(--Search-filled-text, #000);
          flex: 1;
          font: 700 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .divHeader-8 {
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
      `}</style>
    </>
  );
}

