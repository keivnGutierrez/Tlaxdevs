import React from 'react'
import Btn from '../components/Btn';
export default function ItemProyect({
    href = '',
    text = {
        one: '',
        two: ''
    },
    img,
    isprivate = false
}) {
    return (
        <>
            <div className='main'>
                <img src={isprivate ? '/private.svg' : img} alt="Mack Home WEb" />

                <div className='content'>
                    <div className='paragraphs'>
                        <p>{text.one}</p>
                        <p>{text.two}</p>
                    </div>
                    <a href={isprivate ? '#' : href}>
                        <Btn
                            text={isprivate ? 'Proyecto privado' : "Ver ahora"}
                            textColor={isprivate ? "red" : "#FF7272"}
                            colors={{
                                primary: '#fff',
                                secondary: '#fff'
                            }}
                            height="40px"
                            width="240px"
                        />
                    </a>
                </div>
            </div>
            <style jsx>{`
                .main{
                    width:280px;
                    heigth:400px;
                    background:#FFFFFF;
                    display:flex;
                    justify-content:center;
                    aling-items:center;
                    flex-direction:column;
                    padding:10px 0px 0px;
                    border-radius:12px;
                    -webkit-box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.15); 
                    box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.15); 
                }
                .content{
                    background:#F9FAFB;
                    height:60%;
                    display:flex;
                    flex-direction:column;
                    padding:5px;
                    border-top:solid 4px #F4F5F7;
                    border-bottom-left-radius:12px;
                    border-bottom-right-radius:12px;
                }
                p{
                    color:#272C41;
                    margin:5px;
                    font-size:14px;
                }
                p:before{
                    content:''
                    display:block;
                    width:5px;
                    heigth:5px;
                    background:red;
                }
                img{
                    margin:auto;
                    margin-bottom:10px;
                    width:220px;
                    heigth:220px;
                    background:#222A4C;
                    padding:10px;
                }
                .paragraphs{
                    height:80%;
                }
                a{
                    aling-seft:start;
                    bottom:0;
                    margin:auto;
                    margin-top:10px;
                    margin-bottom:10px;
                }

            `}</style>
        </>
    )
}
