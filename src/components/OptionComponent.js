import React from 'react';
import WritePostButton from './WritePostButton';

const OptionComponent = () => {
    return ( <>
        <div
            style={{
                display: 'flex',
                width: '358px',
                height: '21px',
                top: '559px',
                left: '200px',
                gap: '10px',
                opacity: 1,
                color: 'black', 
                justifyContent: 'space-between', 
                position: 'absolute',
            }}
        >
             <span style={{
                width:' 93px',
                height: '21px',
                fontFamily:'IBM Plex Sans, sans-serif',
                fontSize: '16px',
                lineHeight: '20.8px',
                textalign: 'left',
                color:'#000000',
                }}>All Posts(32)</span>
            <span style={{width:'47px',height:'21px',fontFamily:'IBM Plex Sans, sans-serif',fontSize:'16px',lineHeight:'20.8px',color:'#8A8A8A'}}>Article</span>
            <span style={{width:'41px',height:'21px',fontFamily:'IBM Plex Sans, sans-serif',fontSize:'16px',lineHeight:'20.8px',color:'#8A8A8A'}}>Event</span>
            <span style={{width:'72px',height:'21px',fontFamily:'IBM Plex Sans, sans-serif',fontSize:'16px',lineHeight:'20.8px',color:'#8A8A8A'}}>Education</span>
            <span style={{width:'27px',height:'21px',fontFamily:'IBM Plex Sans, sans-serif',fontSize:'16px',lineHeight:'20.8px',color:'#8A8A8A'}}>Job</span>
        </div>
        <WritePostButton />
        </>
    );
};

export default OptionComponent;
