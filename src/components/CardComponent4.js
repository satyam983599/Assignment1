import React from 'react';
import MoreVertIcon from './assets/baseline-more_vert.svg';
import ProfileImage from './assets/Joseph.png';
import GroupImage from './assets/Group.png';
import Baseline from './assets/baseline-share.png'
import Bag from './assets/bag.png'
import Map from './assets/Map.png'

const CardComponent4 = () => {
    return (
    <>
        <div
            style={{
                position: 'absolute',
                width: '692px',
                height: '269px',
                top: '2110px',
                left: '200px',
                borderRadius: '4px',
                border: '1px solid #E0E0E0', 
                opacity: 1,
            }}
        > 
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
                }}>💼️ Job</p>
                
                <p style={{
                    position:'absolute',
                    top:'40px',
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
                    }}>Software Developer</p>

                <div
                style={{
                    position: 'absolute',
                    width: '28px',
                    height: '28px',
                    top:'115px',
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
                    top: '140px',
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
                top:'-45px',
                left:'4px'
                }}>
                <img src={Bag}
                alt='Calender'
                    style={{width:'15px',height:'16.67px'}}
                />
                </div>
                <div style={{
                position:'absolute',
                width:'250px',
                height:'20px',
                top:'-39px',
                left:'25px',
                fontFamily:'IBM Plex Sans, sans-serif',
                fontSize:'15px',
                lineHeight:'19.5px',
                color:'#000000',
                fontWeight:600,
                }}
                >
                Innovaccer Analytics Private Ltd.
                </div>

                <div style={{
                position:'absolute',
                width:'20px',
                height:'20px',
                top:'-45px',
                left:'300px'
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
                top:'-40px',
                left:'320px',
                fontFamily:'IBM Plex Sans, sans-serif',
                fontSize:'15px',
                lineHeight:'19.5px',
                color:'#000000',
                fontWeight:600,
                }}
                >
                Noida, India
                </div>

                <div
                    style={{
                        position: 'absolute',
                        width: '150px',
                        height: '18px',
                        top: '10px', 
                        left: '250px',
                        gap: '0px',
                        opacity: 1,
                        fontFamily:'IBM Plex Sans, sans-serif',
                        fontSize: '13px',
                        lineHeight: '18.25px',
                        textAlign: 'center',
                        color: '#02B875',
                        borderRadius: '4px', 
                        fontWeight:'600'
                    }}
                >
                    Apply on Timesjobs
                </div>
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '48px',
                    height: '48px',
                    top: '205px',
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
                    top: '218px',
                    left: '79px',
                    fontFamily:'IBM Plex Sans, sans-serif',
                    fontSize: '18px',
                    lineHeight: '23.4px',
                    color: '#000000',
                    fontWeight:'550'
                }}
                >
                Joseph Gray
                </div>
                <div
                style={{
                    position: 'absolute',
                    width: '95px',
                    height: '18px',
                    top: '220px',
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
                    top:'213px',
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


export default CardComponent4;
