import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function NtvCard() {
  return (
    <>
    <Card sx={{ minWidth: 275 }}>
      
      <div className="divMadeLineCard-2">
            <div className="divMadeLineCard-3">
              <div className="divMadeLineCard-4">
                <div className="divMadeLineCard-5">
                  <div className="divMadeLineCard-6">
                    <div className="divMadeLineCard-7">
                      <div className="divMadeLineCard-8" />
                      <div className="divMadeLineCard-9" />
                    </div>
                    <div className="divMadeLineCard-10">MADELINE</div>
                  </div>
                  <div className="divMadeLineCard-11">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/15e52b33181ebfe55ed24f21135755a942793ee1a1f7d809cb4134f99632fcd4?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="imgMadeLineCard"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b91dcab71957b925411090fc2ffc0f17126f4d7e0c42e2166d01d36f3c1e292?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="imgMadeLineCard"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/37bf1c5afc1ffcff2b896f630876fd87d0b647de2194e7730f3ae75ecd0533bc?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                      className="imgMadeLineCard"
                    />
                  </div>
                </div>
                <div className="divMadeLineCard-12">Macro Cell Site: 499246</div>
              </div>
              <div className="divMadeLineCard-13">
                <div className="divMadeLineCard-14">
                  <div className="divMadeLineCard-15">
                    <div className="divMadeLineCard-16">
                      <div className="divMadeLineCard-17">Address:</div>
                      <div className="divMadeLineCard-18">Monrovia, CA, 91016</div>
                    </div>
                  </div>
                  <div className="divMadeLineCard-19">
                    <div className="divMadeLineCard-20">
                      <div className="divMadeLineCard-21">CLLI Code:</div>
                      <div className="divMadeLineCard-22">TLJHGYT875T</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        
      
      <CardActions>
        
      <div className="divMadeLineCard-23">
          <div className="divMadeLineCard-24">
            <div className="divMadeLineCard-25">
              <div className="divMadeLineCard-26">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b53efc201672611c777dd915bfd122d84afd4865675d77624411317bd6304f4c?apiKey=a938513dc279413eaac5ce0f8c637f66&"
                  className="imgMadeLineCard-2"
                />
              </div>
              <div className="divMadeLineCard-27"><Button>Topology</Button></div>
            </div>
          </div>
        </div>
      </CardActions>
    </Card>

    <style jsx>{`
        .divMadeLineCard {
          display: flex;
          max-width: 416px;
          flex-direction: column;
        }
        .ntv-card {
          width: 100%;
          justify-content: center;
        }
        .divMadeLineCard-2 {
          background-color: var(--BG-2-blue-in-light, #eff3f7);
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .divMadeLineCard-3 {
          justify-content: center;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding: 16px;
        }
        .divMadeLineCard-4 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .divMadeLineCard-5 {
          justify-content: space-between;
          display: flex;
          gap: 0px;
        }
        .divMadeLineCard-6 {
          display: flex;
          gap: 8px;
          flex: 1;
        }
        .divMadeLineCard-7 {
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
        .divMadeLineCard-8 {
          background-color: var(--Success-Success300, #6ce9a6);
          border-radius: 50%;
          width: 12px;
          height: 12px;
        }
        .divMadeLineCard-9 {
          background-color: var(--Success-Success300, #6ce9a6);
          border-radius: 50%;
          width: 12px;
          height: 12px;
        }
        .divMadeLineCard-10 {
          color: var(--Text-color-2, #101828);
          flex: 1;
          font: 700 16px/150% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .divMadeLineCard-11 {
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
        .divMadeLineCard-12 {
          align-items: start;
          margin-top: 8px;
          color: var(--Text-color-3, #475467);
          justify-content: center;
          padding: 0 48px;
          font: 700 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .divMadeLineCard-13 {
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
        .divMadeLineCard-14 {
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .divMadeLineCard-15 {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .divMadeLineCard-16 {
          align-content: flex-start;
          flex-wrap: wrap;
          display: flex;
          gap: 16px;
        }
        .divMadeLineCard-17 {
          color: var(--Text-color-3, #475467);
          font-family: Inter, sans-serif;
        }
        .divMadeLineCard-18 {
          color: var(--Text-color-1, #000);
          font-family: Inter, sans-serif;
        }
        .divMadeLineCard-19 {
          display: flex;
          margin-top: 8px;
          flex-direction: column;
          justify-content: center;
        }
        .divMadeLineCard-20 {
          align-content: flex-start;
          flex-wrap: wrap;
          display: flex;
          gap: 16px;
        }
        .divMadeLineCard-21 {
          color: var(--Text-color-3, #475467);
          font-family: Inter, sans-serif;
        }
        .divMadeLineCard-22 {
          color: var(--Text-color-1, #000);
          font-family: Inter, sans-serif;
        }
        .divMadeLineCard-23 {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          padding: 0 16px;
          border-bottom: 1px solid var(--Border-d2-l2, #D0D5DD);
        }
        .divMadeLineCard-24 {
          align-items: center;
          border:none;
          // border-color: rgba(208, 213, 221, 1);
          // border-style: solid;
          // border-bottom-width: 1px;
          display: flex;
          justify-content: center;
          padding: 8px 60px;
        }
        .divMadeLineCard-25 {
          justify-content: center;
          border-radius: var(--radius-sm, 6px);
          display: flex;
          gap: 8px;
          padding: 4px 16px;
        }
        .divMadeLineCard-26 {
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
          position:relative;
          top:5px;
        }
        .img-2 {
          aspect-ratio: 1.23;
          object-fit: auto;
          object-position: center;
          width: 16px;
        }
        .divMadeLineCard-27 {
          color: var(--Primary, #1570ef);
          margin: auto 0;
          font: 600 14px/143% Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
      `}</style>
      
</>
    
  );
}
