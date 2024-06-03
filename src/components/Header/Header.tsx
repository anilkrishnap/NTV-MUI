"use client";
import * as React from "react";

export default function Header() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="div-3">
            <div className="div-4">
              <div className="div-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b640c078351a3b66419fad5ca6b15b0518180b15ad436ef59be354a64665db2?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="img"
                />
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2dee969245952063eee3f6b88dc867fc9a06e29cbe20498fe1e1284f2a3cd079?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-2"
              />
            </div>
            <div className="div-6">
              <div className="div-7">
                <div className="div-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/61039aae9ca0cabc4d66c5f413609fe8839da294118e5a172bab06c0f2ac318c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                    className="img-3"
                  />
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f1e5e4f143f150a3b6b89aaaab7b7e43b9967fdab2973dded2922a976133816e?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-4"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0c00f26b9b4eaa939cb8ae4a2673b02566afa4c290133ca176e79f37a7d4d14?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-5"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7a3f19c265e94cd241d736a95ff53456d8e5934aba484f5c178513caeda500f?apiKey=a938513dc279413eaac5ce0f8c637f66&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7a3f19c265e94cd241d736a95ff53456d8e5934aba484f5c178513caeda500f?apiKey=a938513dc279413eaac5ce0f8c637f66&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7a3f19c265e94cd241d736a95ff53456d8e5934aba484f5c178513caeda500f?apiKey=a938513dc279413eaac5ce0f8c637f66&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7a3f19c265e94cd241d736a95ff53456d8e5934aba484f5c178513caeda500f?apiKey=a938513dc279413eaac5ce0f8c637f66&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7a3f19c265e94cd241d736a95ff53456d8e5934aba484f5c178513caeda500f?apiKey=a938513dc279413eaac5ce0f8c637f66&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7a3f19c265e94cd241d736a95ff53456d8e5934aba484f5c178513caeda500f?apiKey=a938513dc279413eaac5ce0f8c637f66&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7a3f19c265e94cd241d736a95ff53456d8e5934aba484f5c178513caeda500f?apiKey=a938513dc279413eaac5ce0f8c637f66&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7a3f19c265e94cd241d736a95ff53456d8e5934aba484f5c178513caeda500f?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-6"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cc98ca40ceee02cd396b2ca730ee938191040427bce9c983a3fca8488e84e45?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                className="img-7"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px 0;
        }
        .div-2 {
          background-color: var(--Grey-Grey-1, #fff);
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          padding: 0 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
          }
        }
        .div-3 {
          justify-content: space-between;
          display: flex;
          width: 100%;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-4 {
          display: flex;
          gap: 8px;
        }
        .div-5 {
          justify-content: center;
          align-items: center;
          border-radius: 24px;
          background-color: var(--GRAY95, #f6f6f6);
          display: flex;
          width: 44px;
          height: 44px;
          padding: 12px;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 20px;
        }
        .img-2 {
          aspect-ratio: 2.63;
          object-fit: auto;
          object-position: center;
          width: 116px;
          max-width: 100%;
        }
        .div-6 {
          align-items: center;
          display: flex;
          gap: 20px;
          margin: auto 0;
        }
        .div-7 {
          align-self: stretch;
          border-radius: 4px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .div-8 {
          align-items: end;
          border-radius: 4px;
          border-color: rgba(111, 113, 113, 1);
          border-style: solid;
          border-width: 1px;
          background-color: var(--whitelffffffd-000000, #fff);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px 60px 10px 8px;
        }
        @media (max-width: 991px) {
          .div-8 {
            padding-left: 20px;
          }
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 16px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          margin: auto 0;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          margin: auto 0;
        }
        .img-6 {
          aspect-ratio: 0.85;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          margin: auto 0;
        }
        .img-7 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
          align-self: stretch;
          margin: auto 0;
        }
      `}</style>
    </>
  );
}


