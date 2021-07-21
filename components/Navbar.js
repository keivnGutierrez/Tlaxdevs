import React from 'react'
import { COLORS } from '../const/colors'
import CircleIcon from './icons/CircleIcon'
import Link from 'next/link';
export default function Navbar() {
    return (
        <>
            <nav>

                <Link href='/'>
                    <a className='container-icons'>
                        Inicio
                        <CircleIcon color='secondary' />
                        <CircleIcon color='tertiary' />
                        <CircleIcon />
                    </a>
                </Link>


                <div className="container-btn">
                    <Link
                        href="/cotizaciones"
                    >
                        <a>
                            <button >
                                Contactar
                            </button>

                        </a>
                    </Link>
                    <Link
                        href="/portafolio"
                    >
                        <a>
                            <button>
                                Portafolio
                            </button>

                        </a>
                    </Link>
                </div>

            </nav>
            <style jsx>{`
                nav{
                    position:fixed;
                    z-index:3;
                    width:100vw;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    padding:10px 5%;
                    background:#222a4c;
                    opacity:.9; 
                    border-bottom:solid 1px grey;
                    height:50px
                }

                .container-icons{
                    display:flex;
                    grid-gap:5px;
                    align-items:center;
                  
                }
                nav .container-btn{
                    display:flex;
                    grid-gap:10px;
                }
               
                button{
                    border:none;
                    border-radius:5px;
                    padding:5px;
                    font-weight:600;
                    background:linear-gradient(to right, #FF0C7F, #FF8524);
                    /* FF0C7F */
                    color:whitesmoke;
                }
                a{
                    color:white;
                    font-weight:700;
                    cursor:pointer;
                }

                button:hover{
                    opacity:.9;
                    cursor:pointer;
                }
                button:active{
                    opacity:2;
                    cursor:pointer;
                }
                
            `}</style>
        </>
    )
}
