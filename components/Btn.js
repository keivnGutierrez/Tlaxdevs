import React from 'react';

export default function Btn({
    text,
    colors = {
        primary: '#FF0C7F',
        secondary: '#20294F'
    },
    width = "auto",
    height = "auto",
    textColor = "whitesmoke"
}) {
    const { primary, secondary } = colors;
    return (
        <>
            <div className="button noselect">
                <p style={{margin:'auto'}}>{text}</p>
            </div>
            <style jsx>{`
                .button{
                    width:${width};
                    height:${height};
                    display:flex;
                    text-align:center;
                    border:none;    
                    justify-content:center;
                    border-radius:10px;
                    font-weight:600;
                    background:linear-gradient(to right,${primary},${secondary} );
                    color:${textColor};
                    -webkit-box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.15); 
                    box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.15);
                }
                p{
                    text-align:center;
                    margin:0;

                }
                .button:hover{
                    opacity:.9;
                    cursor:pointer;
                }
                .button:active{
                    opacity:2;
                    cursor:pointer;
                }    
            `}</style>
        </>
    )
}
// FF0C7F
// #FF8524 
//  #FF0C7F 
