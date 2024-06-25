import React from 'react';
import Image from './assets/Car.png';
import MoreVertIcon from './assets/baseline-more_vert.svg';
import ProfileImage from './assets/Ronal.png';
import GroupImage from './assets/Group.png';
import Baseline from './assets/baseline-share.png'
import Calender from './assets/Calender.png'
import Map from './assets/Map.png'

const CardComponent3 = () => {
    return (
    <>
        <div
            style={{
                position: 'absolute',
                width: '692px',
                height: '490px',
                top: '1604px',
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
            }}>🗓️ Meetup</p>
          
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
                }}>Finance & Investment Elite Social Mixer @Lujiazui</p>

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
                width: '652px',
                height: '38px',
                top: '360px',
                left: '20px',
                borderRadius: '8px',
                border: '0.7px solid #A9AEB8',
                backgroundColor: '#FFFFFF',
                padding: '10px',
                boxSizing: 'border-box'
            }}
        >
        <div style={{
            position:'absolute',
            width:'20px',
            height:'20px',
            top:'-40px',
            left:'4px'
            }}>
            <img src={Calender}
            alt='Calender'
                style={{width:'15px',height:'16.67px'}}
            />
        </div>
        <div style={{
            position:'absolute',
            width:'142px',
            height:'20px',
            top:'-35px',
            left:'25px',
            fontFamily:'IBM Plex Sans, sans-serif',
            fontSize:'15px',
            lineHeight:'19.5px',
            color:'#000000',
            fontWeight:600,
        }}
        >
        Fri, 12 Oct, 2018
        </div>

        <div style={{
            position:'absolute',
            width:'20px',
            height:'20px',
            top:'-38px',
            left:'214px'
            }}>
            <img src={Map}
            alt='Map'
                style={{width:'11.67px',height:'16.67px'}}
            />
        </div>
        <div style={{
            position:'absolute',
            width:'142px',
            height:'20px',
            top:'-35px',
            left:'238px',
            fontFamily:'IBM Plex Sans, sans-serif',
            fontSize:'15px',
            lineHeight:'19.5px',
            color:'#000000',
            fontWeight:600,
        }}
        >
        Ahmedabad, India
        </div>

            <div
                style={{
                    position: 'absolute',
                    width: '90px',
                    height: '18px',
                    top: '10px', 
                    left: '270px',
                    gap: '0px',
                    opacity: 1,
                    fontFamily:'IBM Plex Sans, sans-serif',
                    fontSize: '13px',
                    lineHeight: '18.25px',
                    textAlign: 'center',
                    color: '#E56135',
                    borderRadius: '4px', 
                    fontWeight:'600'
                }}
            >
                Visit Website
            </div>
        </div>
        <div
            style={{
                position: 'absolute',
                width: '48px',
                height: '48px',
                top: '425px',
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
                top: '438px',
                left: '79px',
                fontFamily:'IBM Plex Sans, sans-serif',
                fontSize: '18px',
                lineHeight: '23.4px',
                color: '#000000',
                fontWeight:'550'
            }}
        >
           Ronal Jones
        </div>
        <div
            style={{
                position: 'absolute',
                width: '95px',
                height: '18px',
                top: '438px',
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
                top:'430px',
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


export default CardComponent3;
