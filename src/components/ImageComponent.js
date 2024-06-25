import React from 'react';
import Image from './assets/Rectangle 2.png';


const ImageComponent = () => {
    return (
        <>
        <div className="position-relative" style={{ height: '440px', overflow: 'hidden' }}>
            <img
                src={Image}
                className="img-fluid"
                alt="Responsive"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '378px',
                    height: '47px',
                    top: '65%', 
                    left: '200px',
                    opacity: 1,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily:'IBM Plex Sans, sans-serif',
                    fontSize:'36px',
                    lineHeight:'46.8px'
                }}
            >
                Computer Engineering
            </div>
            <div
                style={{
                    position: 'absolute',
                    width: '327px',
                    height: '23px',
                    top: '77%',
                    left: '200px',
                    opacity: 1,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily:'IBM Plex Sans, sans-serif',
                    fontSize:'18px',
                    lineHeight:'23.4px'
            
                }}
            >
                142,765 Computer Engineers follow this
            </div>

        </div>
        <div
                style={{
                    position: 'absolute',
                    width: '1296px',
                    height: '0px',
                    top: '544px',
                    left: '72px',
                    border: '1px solid #E0E0E0',
                    opacity: 0,
                }}
            />
          
            </>
    );
};

export default ImageComponent;
