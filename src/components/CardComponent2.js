import React from 'react';
import Image from './assets/Rectangle 6.png';
import MoreVertIcon from './assets/baseline-more_vert.svg';
import ProfileImage from './assets/SarahWest.png';
import GroupImage from './assets/Group.png';
import Baseline from './assets/baseline-share.png'

const CardComponent2 = () => {
    return (
    <>
        <div
            style={{
                position: 'absolute',
                width: '692px',
                height: '472px',
                top: '1116px',
                left: '200px',
                borderRadius: '4px',
                border: '1px solid #C4C4C4', 
                opacity: 1,
            }}
        > 
        <img
                src={Image}
                alt="CardImage"
                style={{
                    width: '100%',
                    height: '220px',
                    top:'628px',
                    left:'200px',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                }} />

        <p
         style={{
                position: 'absolute',
                width: '145px',
                height: '25px',
                paddingLeft:'20px',
                paddingTop:'20px',
                color:'#000000',
                fontWeight:550,
                fontSize:'18px',
                fontFamily:'IBM Plex Sans, sans-serif',
                lineHeight:'23.4px'
            }}>🔬️Education</p>
          
        <p style={{
                position:'absolute',
                top:'260px',
                left:'5px',
                width:'600px',
                height:'60px',
                fontFamily:'IBM Plex Sans, sans-serif',
                fontSize:'22px',
                lineHeight:'29.52px',
                color:'#000000',
                paddingLeft:'18px',
                paddingTop:'20px',
                fontWeight:600,
                }}>Tax Benefits for Investment under National Pension Scheme launched by Government</p>

        <div
            style={{
                position: 'absolute',
                width: '28px',
                height: '28px',
                top:'337px',
                left: '635px',
                opacity: 1,
                transform: 'rotate(-180deg)',
            }}
        >
            <img src={MoreVertIcon} alt="More Vert Icon" style={{ paddingTop:'56px' }} />
        </div>

        <div
            style={{
                position: 'absolute',
                width: '655px',
                height: '25px',
                opacity: 1,
                fontFamily:'IBM Plex Sans, sans-serif',
                fontSize: '18.5px',
                lineHeight: '25.49px',
                textAlign: 'left',
                color: '#5C5C5C',
                top:'350px',
                left:'5px',
                paddingLeft:'22px',
            }}
        >
            I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
        </div>
        <div
            style={{
                position: 'absolute',
                width: '48px',
                height: '48px',
                top: '407px',
                left: '20px',
                borderRadius: '24px',
                background: `url(${ProfileImage}) no-repeat center center`,
                backgroundSize: 'cover',
                opacity: 2,
            }}
        />
         <div
            style={{
                position: 'absolute',
                width: '130px',
                height: '24px',
                top: '420px',
                left: '79px',
                fontFamily:'IBM Plex Sans, sans-serif',
                fontSize: '18px',
                lineHeight: '23.4px',
                color: '#000000',
                fontWeight:'550'
            }}
        >
            Sarah West
        </div>
        <div
            style={{
                position: 'absolute',
                width: '95px',
                height: '18px',
                top: '420px',
                left: '521px',
                opacity: 1,
                background: `url(${GroupImage}) no-repeat center center`,
            }}
        />
        <div 
            style={{
                position:'absolute',
                width:'42px',
                height:'36px',
                top:'410px',
                left:'630px',
                opacity:3,
                background: `url(${Baseline}) no-repeat center center`,
                backgroundColor:'#EDEEF0',
            

            }}
        />
        
       </div>
       
      
    </>
    );
};


export default CardComponent2;
